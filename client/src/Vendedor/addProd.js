import React from 'react';
import "./addProd.css";
function AddProd(){
    return(

        <div className='producto'>
            <div className='contenedor-producto'>
                <h2>Imagen del producto</h2>
                <div className='group-labels'>
                    <label for="img">Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*"/>
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
                    <input type="text"></input>
                </div>
               
            </div>
            <button type="submit" >Cancelar</button>
            <button type="submit" >Guardar</button>
        </div>

        
    );
}

export default AddProd;