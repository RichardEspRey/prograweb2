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
    const op = "I"; // Operación a realizar (I para inserción)
    const id = null; // ID del usuario (solo se usa para la opción S de selección)
    const nombre = req.body.nombre;
    const email = req.body.email;
    const password = req.body.password;
    const tipo = req.body.tipo;
    db.query('CALL pUser(?, ?, ?, ?, ?, ?)', [op, id, nombre, email, password, tipo], (err, result) =>{
        if(result[0][0].resp === 1){
            console.log(result[0][0].resp);
            resp.send({message:"Empleado registrado con éxito",id:1});// Envio de respuesta del servidor a mi componente
        }else{
            console.log(result[0][0].resp);
            resp.send({message:"Error en el registro, correo ya registrado",id:0});

        }
    });
}); 
app.post("/login",(req,resp)=>{
    const op = "S"; // Operación a realizar (I para inserción)
    const id = null; // ID del usuario (solo se usa para la opción S de selección)
    const nombre = null;
    const email = req.body.correo;
    const password = req.body.password;
    const tipo = null;
    db.query('CALL pUser(?, ?, ?, ?, ?, ?)', [op, id, nombre, email, password, tipo], (err, result) =>{
        if(result[0][0].user_exist ==1){
            let sUserID = result[1][0].userID;
            let sNombre = result[1][0].nombre;
            let sEmail = result[1][0].email;
            let sPassword = result[1][0].password;
            let sTipo = result[1][0].tipo;
            resp.send({message:"Login exitoso",exist:1,userID:sUserID,nombre:sNombre,email:sEmail,password:sPassword,tipo:sTipo});//mando a mi back las credenciales del usuario
        }else{
            resp.send({message:"Credenciales invalidas",exist:0});
        }
       
         
    });
}); 

app.listen(3001,()=>{
    console.log("corriendo en el puerto 3001");
});