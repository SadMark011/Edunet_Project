const { MongoClient } = require('mongodb')
const express = require("express")
const cors = require("cors")
const app = express()

const port = 3000
const mongoclient = new MongoClient('mongodb+srv://pranavchopra2003:WLuvJUml0waO0KSV@clusterfirst.p38fi.mongodb.net/Edunet_Project' )

app.use(express.json());
app.use(cors())
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

//Home Route
app.get('/', (req,res) => {
    res.send("Home Route")
})

//Signin Route to authenticate users
app.post('/signin', async(req,res) => {
    try {
        const {userName,password} = req.body;
        console.log(userName)
        console.log(password)

        const coll = mongoclient.db('Edunet_Project').collection('signup');
        const cursor = await coll.find({userName:userName , password:password});
        const result = await cursor.toArray();
        // await client.close();

        console.log(result)

        if(result.length==1 && userName == result[0].userName && password == result[0].password) {
            res.send({ok:1,msg:"Valid User"})
        } else {
            res.send({ok:0,msg:"Invalid User"})
        }
    } catch(err) {
        console.log(err)
    }
})

//Signup Route to add users to database
app.post('/signup', async(req,res) => {

    try {
        console.log(req.body)
        const coll = mongoclient.db('Edunet_Project').collection('signup');
        const cursor = await coll.insertOne(req.body);
        // await mongoclient.close();
        console.log(req.body)
        res.send({ok:1,msg:"User Connected"})

    }catch(err){
        console.log(err)
        res.send({ok:0,msg:"Some Error has occured"})
    }

})

app.listen(port, () => {
    console.log("Server is Running")
})