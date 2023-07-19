const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose');
require('./db/config');
const User = require('./db/User');
const app = express();

// app.use(express.json());

app.use(cors());
app.post('/signup', async (req, res) => {
    let user = new User(req.body);
    console.log('user :>> ', user);
    let result = await user.save();
    res.send(result);
    // let user = await (new User(req.body)).save();
    // res.send(user);
});

// const connectDB = async () => {
//     mongoose.connect('mongodb://localhost:27017');
//     const productSchema = new mongoose.Schema({});
//     const product = mongoose.model('product', productSchema);
//     const data = await product.find();
//     console.warn(data);
// }

// connectDB();

// app.get("/signup", (req, res) => {
//     res.send("App is Working... ")
// });

app.listen(5000);

