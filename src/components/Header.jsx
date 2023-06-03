import React from 'react'
import { Navbar, Button, Container, Form, Nav, NavDropdown, Image} from 'react-bootstrap'
import logo  from '../assets/imagenes/logo/logo.png';
import { CupStraw, EggFried } from "react-bootstrap-icons"
import { ModaLogin } from './ModaLogin';




export const Header = () => {
  


  return (
    <Navbar bg="warning" expand="lg" sticky='top'>
      <Container fluid>
        <Navbar.Brand href="#">
					
				<Image src={logo} style= {{width:"75px"}}
				/>
				</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Nosotros</Nav.Link>
            <NavDropdown title="Categoria" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"> <EggFried color="#803530" size={20}/> Comidas</NavDropdown.Item>
              <NavDropdown.Item href="#action4"> <CupStraw color="#803530" size={20} className="align-center"/>
                Bebidas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Ofertas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Buscar</Button>
          </Form>
					<Nav.Link href="#action3">
            <ModaLogin />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
