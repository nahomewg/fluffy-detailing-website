const mongoose = require("mongoose");

// Define a schema for the admin user
const AdminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    // Other admin-related fields can be added here
});

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;