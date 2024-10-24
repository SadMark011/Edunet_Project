const { MongoClient } = require('mongodb')
const express = require("express")
const app = express()

const port = 3000
const mongoclient = new MongoClient('mongodb+srv://pranavchopra2003:WLuvJUml0waO0KSV@clusterfirst.p38fi.mongodb.net/Edunet_Project' )

app.use(express.json());

//Connecting the database
const dbconnect = async() =>{
    try {
        const client = await mongoclient.connect()
        console.log("Server Connected with Database");
    } catch(err) {
        console.log(err);

    }
    
};
dbconnect()

app.get('/', (req,res) => {
    res.send("Home Route")
})

app.post('/signin', async(req,res) => {

    // const coll = client.db('Edunet_Project').collection('signup');
    // const cursor = coll.find(filter);
    // const result = await cursor.toArray();
    // await client.close();

    res.send(req.body)
    console.log(req.body)
})

app.post('/signup', async(req,res) => {

    try {
        console.log(req.body)
        const coll = mongoclient.db('Edunet_Project').collection('signup');
        const cursor = coll.insertOne(req.body);
        // await mongoclient.close();
        // console.log(`Data : ${req.body}`)
        res.send({ok:1,msg:"User Connected"})

    }catch(err){
        console.log(err)
        res.send({ok:0,msg:"Some Error has occured"})
    }

})

app.listen(port, () => {
    console.log("Server is Running")
})