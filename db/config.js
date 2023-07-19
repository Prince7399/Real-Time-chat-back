const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/e-commerce').then(() => {
    mongoose.connect('mongodb://127.0.0.1:27017/e-commerce').then(() => {
    console.log("Database Connection Done..........");
}).catch(() => {
    console.log("Database Connection Failed Something Went Wrong..........");
})
