const express = require("express");
const cors =require("cors");
const mysql=require("mysql");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud_nuworks"
})

app.get("/",(req,res)=>{
    const sql="SELECT * FROM todo";
    db.query(sql,(err,data)=>{
        if(err) return res.json("select");
        return res.json(data);
    })
})

app.post("/create",(req,res)=>{
    const sql="INSERT INTO todo (Todo) VALUES (?)";
    const values = [
        req.body.todo
    ]
    db.query(sql,[values],(err,data)=>{
        if(err) return res.json("post");
        return res.json(data);
    })
})

app.listen(8081,()=>{
    console.log("listening");
})