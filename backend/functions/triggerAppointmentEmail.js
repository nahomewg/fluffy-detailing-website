const fetch = require('node-fetch');

// automatically generate snippet from the email preview
// sends a reques tto an email handler for an appointment
await fetch(`${process.env.URL}/.netlify/functions/appointmentEmail`, {
    headers: {
        "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET
    }
});