const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect("mongodb://127.0.0.1:27017/todolist", {
    useUnifiedTopology : true,
    UseNewUrlParser : true,
}, (err)=>{
    if(err) console.log(`Error in db connection ${err}`);
    else
    console.log(`MongoDB Connection Suceeded...`);
})

module.exports = mongoose;