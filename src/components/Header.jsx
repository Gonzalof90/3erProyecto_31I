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
  PersonFillDash,
  
} from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/userContext";
import { SearchContext } from "../contexts/searchContext";
import { ModalLogin } from "./ModalLogin";
import styled from "styled-components";

const ButtonSearch = styled(Button)`
  background-color: #803530;
  color: #ffc107;
`;

export const Header = () => {
  const { user, logout } = useContext(UserContext);

  const handleLogout = () => logout();

  const {
    handleSearchValue,
    inputValueHeader,
    handleChangeValueHeader,
    setKeywordGlobal,
  } = useContext(SearchContext);
  const redirect = useNavigate();

  useEffect(() => {
    if (inputValueHeader === "") {
      setKeywordGlobal("");
    }
  }, [inputValueHeader]);


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
            <Nav.Link as={Link} to="/ProfileUser">
              Perfil Usuario
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

          {/* BUSCADOR */}
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              onChange={handleChangeValueHeader}
              aria-label="Search"
              value={inputValueHeader}
            />
            <ButtonSearch 
            variant="outline-danger"
            className="border-0 me-1"
            onClick={() => handleSearchValue(redirect)}
            >
            
              Buscar
            </ButtonSearch>
          </Form>
          
            {!user?._id ? (
              <ModalLogin />
            ) : (
              
              <Button variant="transparent" onClick={logout}><PersonFillDash color="#000" size={45} /></Button>
              
            )}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
