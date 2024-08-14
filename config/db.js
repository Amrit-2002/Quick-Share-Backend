const mongoose = require('mongoose');

function connectDB() {
    // Connect to local MongoDB
    mongoose.connect('mongodb://localhost:27017/quick-share', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Database connected 🥳🥳🥳🥳');
    })
    .catch(err => {
        console.log('Connection failed ☹️☹️☹️☹️', err);
    });
}

module.exports = connectDB;
