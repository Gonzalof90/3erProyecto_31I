import { Image, Container, Navbar } from "react-bootstrap";
import logo from "../assets/imagenes/logo/logo.png";

import { Link } from "react-router-dom";
import { DropdownComponent } from "./Dropdown";

export const Footer = () => {
  return (
    <div className="bg-warning">
      <Container className="d-flex justify-content-between align-items-center ">
        <Navbar.Brand as={Link} to="/home">
          <Image src={logo} style={{ width: "75px" }} />
        </Navbar.Brand>
        <div className="d-flex justify-content-center">
          <p className="text-center">© Todos los derechos reservados</p>
        </div>
        <div>
          <DropdownComponent />
        </div>
      </Container>
    </div>
  );
};
