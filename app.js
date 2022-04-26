require('dotenv').config();

var demoConfig = require('./demo.config');
const express = require('express');
const exphbs = require('express-handlebars');
const cookieSession = require('cookie-session');
const path = require('path');
const logger = require('morgan');

console.log(demoConfig);

const app = express();

// Configure cookie sessions
app.use(cookieSession({
  secret: process.env.SESSION_SECRET_KEY,
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

// Automatically pass session data to Handlebars
app.use(function(req, res, next) {
  app.locals.session = req.session;
  next();
})

// Configure handlebars and helpers
app.engine('hbs', exphbs({
  extname: '.hbs',
  helpers: {
    stripePublishableKey: () => { return process.env.STRIPE_PUBLISHABLE_KEY; },
    returnURL: () => { return process.env.RETURN_URL; },
    demoConfig: () => { return demoConfig; },
    formatCurrency: (locale, amount) => {
      return new Intl.NumberFormat(locale, { style: 'currency', currency: demoConfig.currency.toUpperCase() }).format(amount/100);
    },
    formatDate: (secondsSinceEpoch) => {
      var d = new Date(secondsSinceEpoch * 1000);
      var date = d.getDate();
      var month = d.getMonth() + 1; //Months are zero based
      var year = d.getFullYear();
      return (date + " / " + month + " / " + year);
    }
  }
}));

app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// routes
var indexRouter = require('./routes/index');
app.use('/', indexRouter);

// port where app is served
app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});
