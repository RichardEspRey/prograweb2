import React , { useState }from 'react';
import "./css/addProd.css";
import Cookies from 'js-cookie';
function Inventario(){
    
    return(
    <div className='producto'>
        <h2>Géstion de inventario</h2>
        <div class="users-table">
            <table>
                <tr class="Titulo">
                    <th># ID</th>
                    <th>Nombre</th>
                    <th>Fecha</th>
                    <th>Genero</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Acciones</th>
                </tr>
            </table>
        </div>
    </div>
    );
}

export default Inventario;