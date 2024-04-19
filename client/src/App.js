
import './App.css';
import React from 'react';
import Formlogin from './Login/form_login';/* Componente de Login */
import Formregister from './Login/form_register';/* Componente de Registro */
import Catalogo from './Vendedor/catalogo';/* Componente para buscar en el catalogo */
import AddProd from './Vendedor/addProd';/* Componente de añadir producto */
import Ejemplo from './Vendedor/ejemplo';
import Nav from './Vendedor/nav';/* Componente de NavBar */
import { BrowserRouter,Route,Routes } from 'react-router-dom'; 
function App() {
  return (
    <BrowserRouter>
  
      <Routes>
        {/* Rutas del vendedor */}
        <Route
          path="/inicio"element={
            <>
              <Nav />
              <Ejemplo />
            </>
          }
        />
        <Route
          path="/catalogo"element={
            <>
              <Nav />
              <Catalogo />

            </>
          }
        />
        <Route 
        path="/addProd"element={
            <>
              <Nav />
              <AddProd/>

            </>
          }
        />
        {/* Rutas sin Navbar */}
        <Route path="/register" element={<Formregister />} />
        <Route path="/login" element={<Formlogin />} />
      </Routes>
    
    </BrowserRouter>
      

  );
}

export default App;
