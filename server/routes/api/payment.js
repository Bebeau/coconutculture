const express = require('express');
const router = express.Router();

// const PubKey = process.env.PUBLISHABLE_KEY;
const config = require('../../../config/keys');
const stripe = require("stripe")(config.stripe.secretKey);

const shippo = require('shippo')(config.shippo);

var addressFrom = {
	name: 'PGM Outfitters',
	street1: '908 Joseph St',
	city: 'Shreveport',
	state: 'LA',
	zip: '71107',
	phone: '318-469-6502',
	country: 'US'
};

// purchaseParcel(token) {

// 	var parcel = {
// 		length: 12,
// 		width: 8,
// 		height: 1,
// 		distance_unit: 'in',
// 		weight: 128,
// 		mass_unit: 'oz'
// 	};

// 	// define customer shipping address
// 	var addressTo = {
// 		name: token.shipping_name,
// 		street1: token.shipping_address_line1,
// 		street2: token.shipping_address_line2,
// 		city: token.shipping_address_city,
// 		state: token.shipping_address_state,
// 		zip: token.shipping_address_zip,
// 		country: token.shipping_address_country_code
// 	};

// 	// create shipment and purchase
// 	shippo.shipment.create({
// 	    address_from: addressFrom,
// 	    address_to: addressTo,
// 	    parcels: [parcel],
// 	    async: false
// 	}, function(err, shipment){
// 		if(err) {
// 			console.log(err);
// 		}
// 	 	shippo.transaction.create({
// 		    "shipment": shipment,
// 		    "carrier_account": process.env.REACT_APP_CARRIER,
// 		    "servicelevel_token": "usps_priority"
// 		}, function(err, transaction) {
// 		    if(err) {
// 				console.log(err);
// 			}
// 		});
// 	});
// }

// subscribe artist
// router.post('/create-checkout-session', (req,res,next) => {
	
// 	// define token
// 	let token = req.body;
	
// 	// create purchase order and charge via stripe
// 	stripe.customers.create({
// 		email: token.email,
// 		description: token.card.name,
// 		shipping: {
// 			name: token.shipping_name,
// 			address: {
// 				line1: token.shipping_address_line1,
// 				city: token.shipping_address_city,
// 				state: token.shipping_address_state,
// 				postal_code: token.shipping_address_zip,
// 				country: 'US',
// 			},
// 		}
// 	})
// 	.then(customer =>
// 		stripe.orders.create({
// 			customer: customer.id,
// 			currency: 'usd',
// 			email: token.email,
// 			items: [
// 				{	
// 					type: 'sku',
// 					amount: 4950,
// 					parent: 'sku_EsM1SJCEEOjzM2',
// 					quantity: token.qty,
// 				}
// 			],
// 			shipping: {
// 				name: token.shipping_name,
// 				address: {
// 					line1: token.shipping_address_line1,
// 					city: token.shipping_address_city,
// 					state: token.shipping_address_state,
// 					postal_code: token.shipping_address_zip,
// 					country: 'US',
// 				},
// 			}
// 		})
// 	)
// 	.then(order => 
// 		stripe.orders.pay(order.id, {
// 			source: token.id
// 		})
// 	)
// 	.then(purchaseParcel(token))
// 	.catch(err => {
// 		console.log("Error:", err);
// 		res.status(500).send({error: "Purchase Failed"});
// 	});

// });

router.post('/create-checkout-session', async (req, res) => {
  // const domainURL = localhost;

  const { 
  	cart, 
  	locale 
  } = req.body;
  // Create new Checkout Session for the order
  // Other optional params include:
  // [billing_address_collection] - to display billing address details on the page
  // [customer] - if you have an existing Stripe Customer ID
  // [payment_intent_data] - lets capture the payment later
  // [customer_email] - lets you prefill the email input in the form
  // For full details see https://stripe.com/docs/api/checkout/sessions/create
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_address_collection: {
		allowed_countries: ['US', 'CA'],
	},
    locale: locale,
    line_items: cart,
    // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cart',
  });

  res.send({
    sessionId: session.id,
  });
});

module.exports = router;