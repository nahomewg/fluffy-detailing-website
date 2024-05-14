const mongoose = require("mongoose");

// Define a schema for client users
const ClientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
});

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;