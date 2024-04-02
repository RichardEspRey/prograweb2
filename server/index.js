const express = require("express");
const app = express();
const mysql = require ("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"web2"
});

app.post("/create",(req,resp)=>{
    const nombre = req.body.nombre;
    const email = req.body.email;
    const password = req.body.password;
    const tipo = req.body.tipo;
    db.query('INSERT INTO users(nombre,email,password,tipo)values(?,?,?,?)',[nombre,email,password,tipo],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            resp.send("Empleado registrado con éxito");
        }
    }
    );
}); 

app.listen(3001,()=>{
    console.log("corriendo en el puerto 3001");
});