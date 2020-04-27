const express = require('express');
const router = express.Router();

// const PubKey = process.env.PUBLISHABLE_KEY;
const config = require('../../../config/keys');
var stripe = require("stripe")(config.stripe.secretKey);

var shippo = require('shippo')(process.env.REACT_APP_SHIPPO);

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
router.post('/api/payment/charge', (req,res,next) => {
	
	// define token
	var token = req.body;

	console.log(token);
	
	// create purchase order and charge via stripe
	stripe.customers.create({
		email: token.email,
		description: token.card.name,
		shipping: {
			name: token.shipping_name,
			address: {
				line1: token.shipping_address_line1,
				city: token.shipping_address_city,
				state: token.shipping_address_state,
				postal_code: token.shipping_address_zip,
				country: 'US',
			},
		}
	})
	.then(customer =>
		stripe.orders.create({
			customer: customer.id,
			currency: 'usd',
			email: token.email,
			items: [
				{	
					type: 'sku',
					amount: 4950,
					parent: 'sku_EsM1SJCEEOjzM2',
					quantity: token.qty,
				}
			],
			shipping: {
				name: token.shipping_name,
				address: {
					line1: token.shipping_address_line1,
					city: token.shipping_address_city,
					state: token.shipping_address_state,
					postal_code: token.shipping_address_zip,
					country: 'US',
				},
			}
		})
	)
	.then(order => 
		stripe.orders.pay(order.id, {
			source: token.id
		})
	)
	.then(purchaseParcel(token))
	.catch(err => {
		console.log("Error:", err);
		res.status(500).send({error: "Purchase Failed"});
	});

});

module.exports = router;