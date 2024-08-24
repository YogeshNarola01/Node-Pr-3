const express = require('express')
const app = express()
const path = require('path')
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname, 'public')))
app.get('/',(req,res)=>{
    res.render('dashboard')
})
app.get('/chart',(req,res)=>{
    res.render('chart')
})
app.get('/widgets',(req,res)=>{
    res.render('widegts')
})
app.get('/tables',(req,res)=>{
    res.render('tables')
})
app.get('/grid',(req,res)=>{
    res.render('grid')
})
const port = 3000
app.listen(port,(err)=>{
    if(err) console.log(err)
        console.log(`Server Running ON The Port : -- ${port}`);
})