const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
var demoConfig = require('../demo.config');

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET product listing page */
router.get('/products', async (req, res, next) => {
  const prices = await stripe.prices.list({
    active: true,
    expand: ['data.product']
  });

  res.render('products', { prices: prices.data });
});

/* GET product detail page */
router.get('/products/:id', async (req, res, next) => {
  const prices = await stripe.prices.list({
    active: true,
    product: req.params.id,
    expand: ['data.product']
  });

  res.render('product', { price: prices.data[0] });
});

/* POST checkout page
 *
 * Expects the checkout page to POST data in the below format:
 * {
 *    cart: [
 *      { id: 'prod_KE8Krev8fG16MT', quantity: '1' },
 *      { id: 'prod_KE8KkoLyxpRDxU', quantity: '3' },
 *      { id: 'prod_KE8KvRF9iDynHz', quantity: '1' }
 *    ]
 * }
 *
 */
router.post('/checkout', async (req, res, next) => {
  let prices = [];
  let amount = 0;
  const tax = 2000;

  // Take the items from the cart and calculate the
  // total to be used in the payment intent creation.
  for (const product of req.body.cart) {
    var stripePrices = await stripe.prices.list({
      active: true,
      product: product.id,
      expand: ['data.product']
    });

    // Add the quantity from the cart
    stripePrices.data[0].product["quantity"] = parseInt(product.quantity)
    prices.push(stripePrices.data[0]);

    // Calculate total for the Payment Intent
    amount += (stripePrices.data[0].unit_amount * product.quantity);
  };

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount + tax,
    currency: demoConfig.currency,
    customer: req.session.customerId,
    payment_method_types: demoConfig.paymentMethods,
    metadata: {
      order_id: Math.floor(Math.random() * 10000)
    },
    shipping: {
      name: 'Jenny Rosen',
      address: {
        line1: '1234 Main Street',
        city: 'San Francisco',
        state: 'CA',
        country: 'US',
        postal_code: '94111',
      },
    }
  });

  res.render('checkout', {
    prices: prices,
    orderSubTotal: amount,
    orderTotal: amount + tax,
    clientSecret: paymentIntent.client_secret
  });
});

/* GET success page */
router.get('/success', function(req, res, next) {
  res.render('success', { paymentIntent: req.query.payment_intent });
});


/* GET cart page */
router.get('/cart', function(req, res, next) {
  res.render('cart');
});

/* GET account page */
router.get('/account', async (req, res, next) => {
  if (req.session.customerId) {
    const customer = await stripe.customers.retrieve(
      req.session.customerId,
    );

    const paymentIntents = await stripe.paymentIntents.list({
      limit: 100,
      customer: req.session.customerId
    });

    res.render('account', { customer: customer, paymentIntents: paymentIntents.data });
  } else {
    res.redirect('/signin');
  }
});

/* GET signin page */
router.get('/signin', function(req, res, next) {
  res.render('signin');
});

/* POST signin page
 *
 * Checks if a customers with the email entered already exists. If so
 * redirects the customer to the account page.
 *
 * If a customer does not exist, then rerenders the signin page and
 * displays an error for a missing customer.
 *
 */
router.post('/signin', async (req, res, next) => {
  const customers = await stripe.customers.list({
    email: req.body.email,
  });

  if (customers.data.length < 1) {
    res.render('signin', { error: 'An account with that email does not exist. Please signup!' });
  } else {
    req.session.customerId = customers.data[0].id
    res.render('account', { customer: customers.data[0] });
  }
});

/* GET signup page */
router.get('/signup', function(req, res, next) {
  res.render('signup');
});

/* POST signup page
 *
 * Checks if a customers with the email entered already exists. If so
 * rerenders the signup page with an error message to note that a
 * customer already exists.
 *
 * If a customer does not exist, then creates a new customer with
 * the name and email address entered before redirecting to the
 * account page.
 *
 */
router.post('/signup', async (req, res, next) => {
  const customers = await stripe.customers.list({
    email: req.body.email,
  });

  if (customers.data.length < 1) {
    const customer = await stripe.customers.create({
      name: req.body.name,
      email: req.body.email
    });

    req.session.customerId = customer.id
    res.render('account', { customer: customer });
  } else {
    res.render('signup', { error: 'An account with that email already exists. Please signin!' });
  }
});

router.post('/signout', async (req, res, next) => {
  req.session = null;
  res.redirect('/');
});

module.exports = router;
