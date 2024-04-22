import React , { useState }from 'react';
import "./css/addProd.css";
import Cookies from 'js-cookie';
function AddProd(){
    const [selectedImage, setSelectedImage] = useState(null);
    const sessionId = Cookies.get('session_UserID');
    const [nombre,setNombre] = useState("");
    const [email,setCorreo] = useState("");
    const [password,setPassword] = useState("");
    const [tipo,setTipo] = useState("");
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setSelectedImage(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    };
    const add = ()=>{
        Axios.post("http://localhost:3001/create",{
          nombre:nombre,
          email:email,
          password:password,
          tipo:tipo
          
        }).then(response => {
          
          if(response.data.id==1){
            //en dado caso de que si se haya hecho con exito el registro
            console.log(response.data.id)
            alert(response.data.message);
            window.location.replace('http://localhost:3000/login');//provicional, cambiar a history para uso completo de las funciones de ract
          }else{
            console.log(response.data.id)
            alert(response.data.message);
          }
           // Muestra el mensaje enviado desde el servidor
        }).catch(error=>{
          alert("Error con la comuniacion con el servidor");
        });
      }
    return(

        <div className='producto'>
            <div className='contenedor-producto'>
                <h2>Añadir producto</h2>
                {selectedImage && (
                <img src={selectedImage} alt="Selected" style={{ maxWidth: '200px', maxHeight:'200px'}} />
            )}
                <div className='group-labels'>
                    <label htmlFor="img">Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*" onChange={handleImageChange}/>
                </div>
                
                <div className='group-labels'>
                    <label>Titulo del producto</label>
                    <input type="text"></input>
                </div>
                <div className='group-labels'>
                    <label>Categoria</label>
                    <select className ="option" name="Tipo" >
                        <option value="Electronica">Electronica</option>
                        <option value="Ferreteria">Ferreteria</option>
                    </select>
                </div>

                <div className='group-labels'>  
                    <label>Precio $</label>
                    <input type="text"></input>
                </div>

                <div className='group-labels'>
                    <label>Cantidad</label>
                    <input type="text"></input>
                </div>

                <div className='group-labels'>
                    <label>No. piezas</label>
                    <input type="text"></input>
                </div>
                
                <div className='group-labels'>
                    <label>Marca</label>
                    <input type="text"></input>
                </div>
                
                <div className='group-labels'>
                    <label>Acerca de:</label>
                    <textarea name="postContent" rows={4} cols={40} />
                </div>
               
            </div>
            <div className='buttons-down'>
                <div className='botones'>
                    <button type="submit" >Cancelar</button>
                    <button type="submit" >Guardar</button>
                </div>
            </div>
            
            
        </div>

        
    );
}

export default AddProd;