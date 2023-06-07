import {
  Navbar,
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Image,
} from "react-bootstrap";
import logo from "../assets/imagenes/logo/logo.png";
import {
  CupStraw,
  CurrencyDollar,
  EggFried,
  
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { ModalLogin } from "./ModalLogin";

export const Header = () => {
  const { user, logout } = useContext(UserContext);

  const handleLogout = () => logout();

  return (
    <Navbar bg="warning" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/home">
          <Image src={logo} style={{ width: "75px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home">
              {" "}
              Home{" "}
            </Nav.Link>
            <Nav.Link as={Link} to="/About">
              Nosotros
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact">
              Contacto
            </Nav.Link>
            <Nav.Link as={Link} to="/Products">
              Productos
            </Nav.Link>
            <NavDropdown title="Categoria" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                <EggFried color="#803530" size={20} /> Comidas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                <CupStraw color="#803530" size={20} className="align-center" />
                Bebidas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                <CurrencyDollar color="#803530" size={20} />
                Ofertas
              </NavDropdown.Item>
            </NavDropdown>

            {user._id && user.rol === "ADMIN" && (
              <Nav.Link as={Link} to="/admin">
                Administrar
              </Nav.Link>
            )}
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
          <Nav.Link>
            {!user?._id ? (
              <ModalLogin />
            ) : (
              <Button onClick={handleLogout}>Cerrar Sesión</Button>
            )}
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
