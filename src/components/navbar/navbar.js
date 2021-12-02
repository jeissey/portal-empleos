import React from 'react';
import { Container, Navbar, Nav, Dropdown, DropdownButton, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import './navbar.css';
import Cookies from 'universal-cookie/es6';
import helper, { getSession } from '../helper/helper';

const cookies = new Cookies();

export default class menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    logout() {
        cookies.remove('_s');
        window.location.reload();
    }

    render() { 
        const sesion = getSession();
        let boton;

        if (sesion) {
            boton = (<DropdownButton variant="dark" id="dropdown-basic-button" title="usuario">
                        <Dropdown.Header id="dropdown-header">
                            <Row>
                                <FontAwesomeIcon icon={faUserCircle} />
                            </Row>
                            <Row>
                                #USUARIO#
                            </Row>
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={() => this.logout()}>Cerrar Sesión</Dropdown.Item>
                        {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
                    </DropdownButton>); 
        } else {
            boton = <Button variant="dark" href="/login">Iniciar Sesión</Button>
        }

        return ( 
            <Navbar fixed="top" id="navbar" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="/Logo-Emple-Arte.jpg" className="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/*<Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>*/}
                    </Nav>
                    
                    {boton}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
