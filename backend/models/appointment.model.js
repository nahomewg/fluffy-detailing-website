const mongoose = require("mongoose");

// Define a schema for appointments
const AppointmentSchema = new mongoose.Schema({
    admin: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin', required: true },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    appointmentDate: { type: Date, required: true },
    appointmentTime: { type: String, required: true }, // Assuming time is stored as string,
    appointmentType: { type: String, enum: ['basic', 'extra', 'gold', 'fluffy'], default: 'extra'}, // appointment type field
    status: { type: String, enum: ['scheduled', 'canceled'], default: 'scheduled' }, // Status field
    // Other fields related to the appointment
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;