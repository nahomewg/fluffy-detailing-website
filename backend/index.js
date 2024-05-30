const express = require("express");
const mongoose = require("mongoose");
const AppointmentRequest = require("./models/appointmentRequest.model");
const app = express();
const cors = require("cors");

const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
};

app.use(express.json(), cors(corsOptions));

/**
 * Initialize the node API server.
 * @param {any} "/"
 * @param {any} (req
 * @param {any} res
 * @returns {any}
 */
app.get("/", (req, res) => {
    res.send("Hello from Node API Server");
});

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
    } catch(error) {
        res.status(500).json({message: error.message})
    }
});

/**
 * Connect to the database and listen for the locahost:3000 port. Try/catch for error handling.
 * @param {any} "mongodb+srv://admin:Football8581@fluffydetailingdb.rthdk4g.mongodb.net/Node-API?retryWrites=true&w=majority&appName=FluffyDetailingDB"
 * @returns {any}
 */
mongoose.connect("mongodb+srv://admin:Football8581@fluffydetailingdb.rthdk4g.mongodb.net/Node-API?retryWrites=true&w=majority&appName=FluffyDetailingDB")
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
    })
    .catch(() => {
        console.log("Connection failed!");
    });