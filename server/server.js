const express = require('express');
const router = require('./routes/routes')
const cors = require('cors')
require('./models/db')


const app = express();
app.use(express.json())
app.use(cors());
app.use('/api/tasks', router);



app.listen('8000' , err =>{
    if(err) 
    console.log(err);
    else
    console.log('Server started successfully at PORT number : 8000');
})