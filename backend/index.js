const express = require("express");
const mongoose = require("mongoose");
const Client = require("./models/client.model");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from Node API Server");
});

app.get("/api/clients", async (req, res) => {
    try {
        const clients = await Client.find({});
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.get("/api/clients/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const client = await Client.findById(id);
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})


app.post("/api/clients", async (req, res) => {
    try {
        const client = await Client.create(req.body);
        res.status(200).json(client);
    } catch(error) {
        res.status(500).json({message: error.message})
    }
});

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