const express = require('express')
const cors = require('cors')
const path = require('path')
const assert = require('assert')
const taskRoute = require('./route/taskRoute')
const port = 5000

const app =express()

//body parser middlware

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors())

//view engine
app.set('view engine','ejs')
app.set('views','./views')

//default route

app.use(`/`,taskRoute)

//pnf route

app.all(`*`,(req,res)=>{
    res.render('pnf')
})

//server call

app.listen(port,()=>{
    console.log(`server is running @ http://localhost:${port}`)
})

