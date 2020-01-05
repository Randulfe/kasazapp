const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 4000;

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/flats', require('./routes/flats'));

app.use('/api/flats/uploads',express.static('uploads'));

app.get('/',(req,res)=>{
res.send('Hello world');
});

var server = app.listen(PORT,()=>{
console.log(`server starting on PORT: ${PORT}`)
});