const express = require('express');
const mongoose = require("mongoose");
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//     port: 465,
//     host: "smtp.gmail.com",
//     auth: {
//         user: "nahome@woldecode.ca",
//         pass: "Senzero1999"
//     },
//     secure: true
// });

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'andrew.spinka@ethereal.email',
        pass: 'fjAMypQvjMFj8gx5wJ'
    }
});

const connectionString = process.env.ATLAS_URI || "";
const AppointmentRequest = require("../models/appointmentRequest.model");

app.use('/.netlify/functions/api', router);
app.use(express.json(),cors());

app.get("/api/appointmentRequest", async (req, res) => {
    try {
        const appointments = await AppointmentRequest.find({});
        res.status(200).json(appointments);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
})

app.post("/api/appointmentRequest", async (req, res) => {
    try {
        const appointment = await AppointmentRequest.create(req.body);
        res.status(200).json(appointment);
        // call to Netlify Function to send email
        fetch("./functions/triggerAppointmentEmail", {
            method: "POST",
            body: JSON.stringify({
                name: req.body.name,
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
                requestedDate: req.body.requestedDate,
                requestedTime: req.body.requestedTime
            }),
        })
    } catch(error) {
        res.status(500).json({message: error.message})
    }
});

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

const handler = serverless(app);
module.exports.handler = async (event, context) => {
    const result = await handler(event, context);
    return result;
}