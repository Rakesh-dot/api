const mongoose=require('mongoose');
const express=require('express');
const bodyParser=require('body-parser');

const db=require('./database/db');
const register_route=require('./routes/register_route');
const proteinRoute=require('./routes/proteinRoute');

const app=express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(register_route);
app.use(proteinRoute);

app.listen(90);
