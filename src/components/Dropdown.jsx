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
          <Navbar.Brand as={Link} to="/Error" className="mx-2">
            <Facebook color="#803530" size={30} />
          </Navbar.Brand>
          Facebook
        </Dropdown.Item>
        <Dropdown.Item>
          <Navbar.Brand as={Link} to="/Error" className="mx-2">
            <Instagram color="#803530" size={30} />
          </Navbar.Brand>
          Instagram
        </Dropdown.Item>
        <Dropdown.Item>
          <Navbar.Brand as={Link} to="/Error" className="mx-2">
            <Tiktok color="#803530" size={30} />
          </Navbar.Brand>{" "}
          TikTok
        </Dropdown.Item>
        <Dropdown.Item>
          <Navbar.Brand as={Link} to="/Error" className="mx-2">
            <Linkedin color="#803530" size={30} />
          </Navbar.Brand>{" "}
          Linkedin
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
