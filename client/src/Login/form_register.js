import "./form_login.css";
import {useState} from "react"
import bagImage from './icons/bag.png';
import Axios from "axios";
import { Link } from "react-router-dom";
function Form_register() {
  const [nombre,setNombre] = useState("");
  const [email,setCorreo] = useState("");
  const [password,setPassword] = useState("");
  const [tipo,setTipo] = useState("");

  const add = ()=>{
    Axios.post("http://localhost:3001/create",{
      nombre:nombre,
      email:email,
      password:password,
      tipo:tipo
      
    }).then(()=>{
      alert("Empleado Registrado");
      window.location.replace('http://localhost:3000/login');
    }).catch(error=>{
      alert("Error al registrar el usuario");
    });
  }
return (
    <div className="form_login">
      <div className="contenedor">
        <img src={bagImage} alt="Imagen de una bolsa" width="35%" />
          <div>
            <h1>Crear cuenta</h1>
          </div>
          <div>
            <label>Nombre</label>
          </div>
          <div>
            <input className="Elements" type="text" id="Nombre" onChange={(event)=>{
              setNombre(event.target.value);
              }}></input>
          </div>
          <div>
            <label>Numero de celular o Correo</label>
          </div>
          <div>
            <input className="Elements" type="text" id="Email" onChange={(event)=>{
              setCorreo(event.target.value);
              }}></input>
          </div>
          <div>
            <select name="Tipo" onChange={(event)=>{
              setTipo(event.target.value);
              }}>
              <option value="Comprador">Comprador</option>
              <option value="Vendedor">Vendedor</option>
            </select>
          </div>
          <div>
            <label>Contraseña</label>
          </div>
          <div>
            <input className="Elements" type="text" id="password" onChange={(event)=>{
              setPassword(event.target.value);
              }}></input>
          </div>
          <input className="button" type="submit" id="submit" value="Continuar" onClick={add}></input>
          <label>¿Eres nuevo en shopping express?</label>
            <div className="separator"></div>
            <Link to="/login">
              <button type="submit" >Login</button>
            </Link>
            
      </div>
    </div>
  );
}

export default Form_register;