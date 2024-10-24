const express = require("express")
const app = express()

const port = 3000


app.get('/', (req,res) => {
    res.send("Home Route")
})

app.post('/signin', (req,res) => {
    res.send("Signin Route")
})

app.post('/signup', (req,res) => {
    res.send("Signup Route")
})

app.listen(port, () => {
    console.log("Server is Running")
})