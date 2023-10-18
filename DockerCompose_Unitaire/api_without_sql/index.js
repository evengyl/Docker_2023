const express = require("express")
const app = express()
const cors = require("cors")
const axios = require('axios');
require("dotenv").config()


app.use(cors())


app.get("/", (req, res, next) => {
    res.json({
        posts : `localhost:${process.env.PORT}/posts`,
        images : `localhost:${process.env.PORT}/images`
    })
})



app.get("/posts", (req, res, next) => {
    
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        res.send(response.data)
    })
    .catch(error => {
        res.send(error)
    })
})


app.get("/images", (req, res, next) => {
    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then(response => {
        res.send(response.data)
    })
    .catch(error => {
        res.send(error)
    })
    
})


app.listen(process.env.PORT, console.log(`server start on port : ${process.env.PORT}`))