const Product = require('../models/bookingModel');
const mongoose = require('mongoose');
// use the new name of the database
const url = 'mongodb://localhost:27017/RakaProtein';
beforeAll(async () => {
 await mongoose.connect(url, {
 useNewUrlParser: true,
 useCreateIndex: true
 });
});
afterAll(async () => {
 await mongoose.connection.close();
});


describe('Product Schema test anything', () => {
// the code below is for insert testing
 it('Add product testing anything', () => {
 const product = {
 'UserId': '607e41561aabae409c607f48',
 'ProductId': '607e41561aabae409c607f48',
 'Qty':'1',

 "Date":"5"
 };
 
 return Product.create(product)
 .then((pro_ret) => {
    
 expect(pro_ret.Date).toEqual('5');
 });
 });

//  it('to test the delete product is working or not', async () => {
//  const status = await Product.findByIdAndDelete({_id:"607dbf93cf18a56498e02b87"});
//  console.log(status)
//  expect(status.Date).toEqual("5");
//  })


    
   })