import  express from "express";
import cors from 'cors';
import bodyParser from "body-parser";

//component
import connection from "./database/db.js";
import router from "./routes/route.js";

const app =express();

app.use(cors());  //jooin two diffrent and send data to another 
app.use(bodyParser.json({extended : true}));  
app.use(bodyParser.urlencoded({extended:true}));  //to give the number to url 
app.use('/',router);  //if our route is empty so match it with our api 

const port=8000;

app.listen(port,()=>{
    console.log(`server is running on Port ${port} `)
})

connection();