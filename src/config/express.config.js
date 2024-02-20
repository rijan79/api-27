const express = require( 'express')
const app = express();

app.use('/aboutus',(req,res) => {
    res.json({
        result: "Data",
        message: "success or fail",
        meta: null 
    })
})

app.use('/',(req,res)=>{
    res.send("hello")

})

// everything needs to mount to app

module.exports = app; 