const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HjmoxHuoAMSNauq91axkXuNIkS1BmIZIwzn4UrzkBEeSc0C3EbCGsSswUZ5KTfjncAwWYhdwVYj8K2lEZo4L0hy00V8EFCL5m')


//API

// App Config
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API Routes
app.get('/', (request, response) => response.status(200).send('hello world!'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved - BOOOM!! Here is your amount >>>>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listen Command
exports.api = functions.https.onRequest(app)