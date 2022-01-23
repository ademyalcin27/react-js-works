const express = require('express');
const cors = require('cors');
const Razorpay = require('razorpay');
const app = express();
const { products } = require('./data');

// Razorpay initial
const instance = new Razorpay({
    key_id: 'rzp_test_c2GWjkX6GNrUCz',
    key_secret: 'suKMnSEVCU9h9Z4rUBaDQbQQ'
})

app.use(cors());
app.use(express.json());

app.get('/products', (req, res) => {
    res.status(200).json(products)
})
app.get('/order/:productId', (req, res) => {
    const {productId} = req.params;
    const product = products.find((product) => product.id == productId);
    const amount = product.price;
    const currency = 'INR';
    const receipt = 'receipt#123';
    const notes = {desc: product.description}; 
    console.log(amount, currency, receipt, notes)
    instance.orders.create({amount, currency, receipt, notes}, (error, order) => {
        if(error) {
            return res.status(500).json(error);
        }
        return res.status(200).json(order);
    })
})
app.listen('8000', () => {
    console.log('Server listening on port' + 80)
})