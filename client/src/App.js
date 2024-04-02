
import './App.css';
import React from 'react';
import Formlogin from './Login/form_login';
import Formregister from './Login/form_register';
import Catalogo from './Vendedor/catalogo';
import Ejemplo from './Vendedor/ejemplo';
import Nav from './Vendedor/nav';
import { BrowserRouter,Route,Routes } from 'react-router-dom'; 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas con Navbar */}
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
        {/* Rutas sin Navbar */}
        <Route path="/register" element={<Formregister />} />
        <Route path="/login" element={<Formlogin />} />
      </Routes>
    
    </BrowserRouter>
      

  );
}

export default App;
