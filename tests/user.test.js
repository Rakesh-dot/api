const User = require('../models/register_model');
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
 'username': '555',
 'password': '21',
 'email':'asdasdasd@gmail.com',
 "userType":"Customer"
 };
 
 return User.create(product)
 .then((pro_ret) => {
 expect(pro_ret.username).toEqual('555');
 });
 });

//  it('to test the delete product is working or not', async () => {
//  const status = await Product.findByIdAndDelete({_id:"607dbca464b91a4698c08c01"});
//  console.log(status)
//  expect(status.Name).toEqual("Burg");
//  })


it('to test the update', async () => {
    return User.findOneAndUpdate({_id :Object('60163340a79e4330180799f0')}, 
   {$set : {username:'ss'}})
    .then((pp)=>{
    console.log(pp)
    expect(pp.username).toBe('ss')
    })
    
   });
    
   })