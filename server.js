const express = require('express');
const app = express();

// handling CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin",  
    "http://localhost:4200");
    res.header("Access-Control-Allow-Headers",  
    "Origin, X-Requested-With, Content-Type, Accept"); 
next(); 
});

// route for handling requests from the Agnular client
app.get('/api/message', (req, res) => {
    res.json({ message: 
            'Hello from the Express server!'});
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
})


// mongodb+srv://nahome:Football8581@fluffy-detailing-databa.goe4r7i.mongodb.net/?retryWrites=true&w=majority&appName=Fluffy-Detailing-Database