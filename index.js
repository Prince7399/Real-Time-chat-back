const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
require('./db/config');
const User = require('./db/User');
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.post('/signup', async (req, res) => {
    // let user = new User(req.body);
    const { name, email, password } = req.body;
    let user = new User({ name, email, password });
    console.log('user :>> ', user);
    let result = await user.save();
    res.send({ _id: result?._id, name: result?.name, email: result?.email });
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

