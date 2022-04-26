# Furni: Stripe Global Payments Demo

Furni is a demo of accepting global payments with Stripe for ecommerce. It features an online furniture store where customers can select furniture items, put them in a cart, then checkout paying with either a credit card or local payment method. Additionally, customers can create accounts with Furni to view their purchase history however creating an account is not required to make a purchase.

**You can try the app live at [https://furni.stripedemos.com](https://furni.stripedemos.com).**

## Overview

<img width="1975" alt="Furni homepage" src="https://git.corp.stripe.com/storage/user/4247/files/3b288200-1ac6-11ec-8276-edf9c4c94c5d">


Furni has the following features, Stripe products, and Stripe integrations:
<!-- prettier-ignore -->
|     |Features
:---: | :---
📦|**Products and Prices.** Furni uses the Stripe [Products and Prices](https://stripe.com/docs/billing/prices-guide) APIs.
⚡️|**Customers.** Furni allows customers to create accounts which creates new [Customers](https://stripe.com/docs/billing/customer) in Stripe to save purchase history.
💳|**New Payment Element** This demo uses pre-built Stripe components customized to fit the app design, including the [Payment Element](https://stripe.com/docs/elements) which provides real-time validation, formatting, and localization.
🌏|**Local Payment Methods.** Relevant [local payment methods](https://stripe.com/docs/payments/payment-methods/overview) are shown via the Payment Element to the customer on checkout.
🛒|**Shopping Cart.** Users pick multiple items and add them to a shopping cart to better simulate a real ecommerce experience.
🔑|**User authentication.** Simple session cookie based authentication is included for user login and registration. The session cookie stores the Stripe customer Id for any customer related interactions.

## Running locally

If you want to run this demo locally against a different Stripe account, follow the instructions below:

### Requirements

* You'll need a Stripe account. [Sign up for free](https://dashboard.stripe.com/register) before running the application.
* Node.js >= 14.7.0

### Getting Started

Clone the repo and install dependencies using npm (or yarn):

```
$ git clone https://git.corp.stripe.com/davidsantoso/furni.git
$ cd furni
$ npm install
```

Copy the example .env file. You'll need to fill out two details:

- Your [Stripe API keys](https://dashboard.stripe.com/account/apikeys)
- A random 20-character string to keep user authentication secure

```
$ cp .env.example .env
```

If this is your first time running the app, you'll need to run the `setup` script to prep the Stripe account with Products and Prices:
```
$ npm run setup
```

Run the app:
```
$ npm run dev
```

Go to [http://localhost:3000](http://localhost:3000) in your browser to start using Furni.

## Resetting Data
If you'd like to wipe the slate clean and start with a fresh environment, you can [wipe all test data](https://dashboard.stripe.com/account/data) from your Stripe account, then rerun the setup script with `npm run setup`. Furni runs purely on top of the Stripe API with no local database so wiping the Stripe account resets the entire application.


## Credits
* Furni code: [David Santoso](https://home.corp.stripe.com/people/davidsantoso)
* Stock photos provided by [Unsplash](https://unsplash.com/)
