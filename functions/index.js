const functions = require("firebase-functions");

// since in node, can't use es6 import module functionality
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HWl83BbG9uzYWRnlzDcg93bTRqy3HyC2NsoziqmTFccYdLQD3IWwZUXCv9p9zg03OBHQ9VRTYojvwllSFYTQTGv00qAYhMjw1"
);
//API

//App Config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API Routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  //OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen Command
exports.api = functions.https.onRequest(app);
