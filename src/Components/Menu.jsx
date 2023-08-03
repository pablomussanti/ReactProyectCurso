import {Link} from "react-router-dom"
import React from "react"
import {Navbar,Nav} from 'react-bootstrap'
import AuthContext from "../Context/AuthContext"


function Menu(props) {
  return (
    <>
    <AuthContext.Consumer>
    {
                    context=>
       <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Final ReactJS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Pagina Principal</Nav.Link>
            {
              !context.isLogin && 
                                <>
                                <Nav.Link as={Link} to="/login">Iniciar Sesion</Nav.Link>
                               <Nav.Link as={Link} to="/registro">Registrarse</Nav.Link>
                                </>
             }
             {
                                context.isLogin && 
                                <>
                                <Nav.Link onClick={context.logoutUser}>Salir</Nav.Link>
                                <Nav.Link as={Link} to="/compras">Ver Compras</Nav.Link>
                                </>
              }
        </Nav>
        </Navbar.Collapse>
        {
                            context.isLogin &&
                            <div>Sesion Actual: {context?.userInfo?.Nombre}   </div>
                        }
    </Navbar>
    }
    </AuthContext.Consumer>
    </>
  );
}

export default Menu
