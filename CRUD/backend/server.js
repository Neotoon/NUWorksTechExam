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

app.put("/update/:id",(req,res)=>{
    const sql="UPDATE todo set Todo=? WHERE ID = ?";
    const values = [
        req.body.todo
    ]
    const id=req.params.id;
    db.query(sql,[...values,id],(err,data)=>{
        if(err) return res.json("post");
        return res.json(data);
    })
})

app.delete('/todo/:id',(req,res)=>{
    const sql="DELETE FROM todo WHERE ID = ?";
    const id=req.params.id;
    db.query(sql,[id],(err,data)=>{
        if(err) return res.json("post");
        return res.json(data);
    })
})

app.listen(8081,()=>{
    console.log("listening");
})