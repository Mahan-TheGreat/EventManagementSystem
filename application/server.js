const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const eventRoutes = require("../routes/eventRoutes");


//configuring app
const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

//connect Database
mongoose.connect('mongodb://localhost:27017/event_management',{}).then(()=>{
    console.log('Connected to MongoDB')
});



//Configuring Routes
app.use('/api/events',eventRoutes);

//Start Server
app.listen(PORT, (err) => {
    if (err) {
        console.error('Error starting server:', err);
        return;
    }
    console.log(`Server is running on port ${PORT}`);
})
