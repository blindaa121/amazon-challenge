const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HPvTkAcMOeYN5s4xT8Fc8q0whrYZ7H0Hf5jOuNzCjOEDH2pml9SqYBFJgWqVHmNZ7OCOnvSEKnhmmzW3kanlXPH00RAEJ7AYy"
);

// API

// - App config 
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes 
app.get('/', (req, res) => {
    res.status(200).send('hello world')
});

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Received BOOOM!!!', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
});
// - Listen command
exports.api = functions.https.onRequest(app);

// API Endpoint 
// http://localhost:5001/challenge-b2d7f/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
