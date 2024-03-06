import "./form_login.css";
import {useState} from "react"
import axios from "axios";
import bagImage from './icons/bag.png';
function Form_login() {
  const [correo,setCorreo] = useState("");
  const [password,setPassword] = useState("");

  

return (
    <div className="form_login">
        <div className="conteiner">
        <img src={bagImage} alt="Imagen de una bolsa" width="35%" />
          <div>
            <h1>Iniciar sesión</h1>
          </div>
          <div>
            <label>Email o telefono</label>
          </div>
          <div>
            <input class="Elements" type="text" id="Email" onChange={(event)=>{
              setCorreo(event.target.value);
              }}></input>
          </div>
          <div>
            <label>Contraseña</label>
          </div>
          <div>
            <input class="Elements" type="text" id="password" onChange={(event)=>{
              setPassword(event.target.value);
              }}></input>
          </div>
          <input class="button" type="submit" id="password" value="Continuar"></input>
          <label>¿Eres nuevo en shopping express?</label>
      <div class="separator"></div>
      <button type="submit">Crear tu cuenta</button>
        </div>
      
    
    </div>
    

);
}

export default Form_login;
