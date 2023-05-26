import React from 'react'
import { Navbar, Button, Container, Form, Nav, NavDropdown, Image} from 'react-bootstrap'
import logo  from '../assets/imagenes/logo/logo.png';
import { CupStraw, CurrencyDollar, Egg, EggFried, PersonFill } from "react-bootstrap-icons"
import { Link } from 'react-router-dom';



export const Header = () => {
  return (
    <Navbar bg="warning" expand="lg" sticky='top'>
      <Container fluid>
        <Navbar.Brand as={Link} to="/home">
					
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
            <Nav.Link as={Link} to="/home" > Home </Nav.Link>
            <Nav.Link as={Link} to="/About">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contacto</Nav.Link>
            <NavDropdown title="Categoria" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"><EggFried color="#803530" size={20}/> Comidas</NavDropdown.Item>
              <NavDropdown.Item href="#action4"><CupStraw color="#803530" size={20} className="align-center"/>
                Bebidas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5"><CurrencyDollar color="#803530" size={20}/>
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
					<Nav.Link href="#action3"><PersonFill color="#803530" size={50} /></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
