const express = require('express');
const mongoose = require("mongoose");
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

const connectionString = process.env.ATLAS_URI || "";
const AppointmentRequest = require("../models/appointmentRequest.model");

app.get("/api/appointmentRequest", async (req, res) => {
    try {
        const appointments = await AppointmentRequest.find({});
        res.status(200).json(appointments);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
})

/**
 * Connect to the database and listen for the locahost:3000 port. Try/catch for error handling.
 * @param {any}
 * @returns {any}
 */
mongoose.connect(connectionString)
.then(() => {
    console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });

app.use('/.netlify/functions/api', router);
const handler = serverless(app);
module.exports.handler = async (event, context) => {
    const result = await handler(event, context);
    return result;
}