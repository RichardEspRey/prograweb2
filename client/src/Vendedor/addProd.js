import React , { useState }from 'react';
import "./addProd.css";
import Cookies from 'js-cookie';
function AddProd(){
    const [selectedImage, setSelectedImage] = useState(null);
    const sessionId = Cookies.get('session_UserID');
    console.log(sessionId);
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
    return(

        <div className='producto'>
            <div className='contenedor-producto'>
                <h2>Añadir producto</h2>
            {selectedImage && (
                <img src={selectedImage} alt="Selected" style={{ maxWidth: '200px', maxHeight:'200px'}} />
            )}
                <div className='group-labels'>
                    <label for="img">Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*" onChange={handleImageChange}/>
                </div>
                
                <div className='group-labels'>
                    <label>Titulo del producto</label>
                    <input type="text"></input>
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