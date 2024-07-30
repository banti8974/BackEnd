// create a folder 
//move into that folder 
// npm init -y
//open folder in vs code
//open terminal write "npm i express"
// create server.js



//Server Instantiate

const express=require('express');
const app=express();

//use to pass parse req.body in express -> PUT or POST
const bodyParser=require('body-parser');


//sPECIALLY PARSE JSON data & add it to the request. body object
app.use(bodyParser.json());


// activate the server 0n 3000 port
app.listen(3000,() =>{
 console.log("Server Started at port no. 3000");
 
});

//get request
app.get('/',(reqquest,response) =>{
    response.send(" hellow jee,kaise ho saare");
});

//post request
app.post('/api/cars', (request,response)  =>{
    const {name , brand} =request.body;
    console.log(name);
    console.log(brand);
    response.send("car submitted successfully.");

})

const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

.then  ( ()=> {console.log("connection Successfully")})
.catch( (error) => {console.log("Recieved an error")});