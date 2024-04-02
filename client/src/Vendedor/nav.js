import React from 'react';
import { Link } from "react-router-dom";
import "./nav.css";
function Nav(){
    return(
        <nav>
            <div className="Menu_botones">
                <Link to="/catalogo">Catalogo</Link>
            </div>
            <div className="Menu_botones">
              <a>Añadir producto</a>
            </div>
            <div className="Menu_botones">
              <a>Inventario</a>
            </div>
            <div className="Menu_botones">
                <a>Pedidos</a>  
            </div>
            <div className="Menu_botones">
              <a>Mensajes</a>
            </div>
            <div className="Menu_botones">
                <a>Mi perfil</a>
            </div>
            <div className="Menu_botones">
                <a>Ayuda</a>
            </div>
            <div className="Menu_botones">
                <a>Cerrar sesion</a>
            </div>
        </nav>
    );
}

export default Nav;