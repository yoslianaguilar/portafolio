import React from 'react';
import { Nav,Navbar} from 'react-bootstrap';
import '../styles/main.css';

export const Layout = ({children}) => {
    return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Yosliana Aguilar</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav"> 
          <Nav className="navbar-nav ml-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/about">Perfil</Nav.Link>
            <Nav.Link href="/contacts">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='content' >
        {children}
      </div>
    </div>
  )
} 