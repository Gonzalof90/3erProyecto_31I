import Dropdown from "react-bootstrap/Dropdown";
import { Facebook, Instagram, Linkedin, Tiktok } from "react-bootstrap-icons";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const DropdownComponent = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="danger" id="dropdown-basic">
        Redes sociales
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>
          <Navbar.Brand as={Link} to="/Error" className="mx-2 d-flex">
            <Facebook color="#803530" size={30} />
            <p className="ms-2">Facebook</p>
          </Navbar.Brand>
        </Dropdown.Item>
        <Dropdown.Item>
          <Navbar.Brand as={Link} to="/Error" className="mx-2 d-flex">
            <Instagram color="#803530" size={30} />
            <p className="ms-2">Instagram</p>
          </Navbar.Brand>
        </Dropdown.Item>
        <Dropdown.Item>
          <Navbar.Brand as={Link} to="/Error" className="mx-2 d-flex">
            <Tiktok color="#803530" size={30} />
            <p className="ms-2">Tik Tok</p>
          </Navbar.Brand>{" "}
        </Dropdown.Item>
        <Dropdown.Item>
          <Navbar.Brand as={Link} to="/Error" className="mx-2 d-flex">
            <Linkedin color="#803530" size={30} />
            <p className="ms-2">Linkedin</p>
          </Navbar.Brand>{" "}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
