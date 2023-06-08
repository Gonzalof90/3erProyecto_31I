import { useContext, useEffect, useState } from "react";
import { Layout } from "../Layouts/layout";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { UserContext } from "../contexts/userContext";
const HOST_SERVER = import.meta.env.VITE_HOST_SERVER;
const imageDefault =
  "https://farmateambg.com/wp-content/plugins/ecommerce-product-catalog/img/no-default-thumbnail.png";

export const UpdateUser = () => {
  const mySwal = withReactContent(Swal);

  const { idUser } = useParams();
  const redirect = useNavigate();
  const initialStateUser = {
    _id: '',
    username: "",
    password: "",
    email: "",
    rol: "",
    available: "",
    avatar: "",
  };
  const [user, setUser] = useState(initialStateUser);
  const { token, logout } = useContext(UserContext);

  const handleChangeInput = ({ target: { value, name } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  useEffect(() => {
    fetch(`${HOST_SERVER}/users/${idUser}`)
      .then((res) => res.json())
      .then(({ data, ok }) => (ok ? setUser(data) : null));
  }, [idUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${HOST_SERVER}/users/${idUser}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then(({ ok, message }) => {
        mySwal
          .fire({
            title: message,
            icon: ok ? "success" : "error",
            showConfirmButton: false,
            timer: 2000,
          })
          .then(() => {
            ok ? redirect(`/admin`) : logout();
          });
      });
  };

  return (
    <Layout>
      <h1 className="text-center my-2">EDITAR USUARIO</h1>
      <Form onSubmit={handleSubmit}>
        <Container className="mb-4">
          <Row>
            {/* avatar */}
            <Col md={12} lg={4}>
              <Form.Group className="mb-3 d-flex gap-1 align-items-end">
                <Image
                  alt="avatar"
                  src={user.avatar || imageDefault}
                  style={{ width: "100px" }}
                />
                <Form.Control
                  type="text"
                  placeholder="Ingresar Avatar"
                  name="avatar"
                  value={user.avatar}
                  maxLength={100}
                  onChange={handleChangeInput}
                />
                <Form.Text className="text-danger"></Form.Text>
              </Form.Group>
            </Col>
            <Col md={12} lg={4}>
              <Form.Group className="mb-3">
                {/* NOMBRE */}
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar nombre"
                  name="username"
                  value={user.username}
                  maxLength={50}
                  onChange={handleChangeInput}
                />
                <Form.Text className="text-danger"></Form.Text>
              </Form.Group>
            </Col>
            <Col md={12} lg={4}>
              {/* Password */}
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar password"
                  value={user.password}
                  name="password"
                  maxLength={100}
                  onChange={handleChangeInput}
                />
                <Form.Text className="text-danger"></Form.Text>
              </Form.Group>
            </Col>
            {/* email */}
            <Col md={12} lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Ingresar Email"
                  value={user.email}
                  maxLength={50}
                  onChange={handleChangeInput}
                />
                <Form.Text className="text-danger"></Form.Text>
              </Form.Group>
            </Col>

            {/* Rol */}
            <Col md={12} lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Rol</Form.Label>
                <Form.Select
                  name="rol"
                  aria-label="Rol"
                  onChange={handleChangeInput}
                >
                  <option value="ADMIN" selected={user.rol === "ADMIN"}>
                    Admin
                  </option>
                  <option value="REGULAR" selected={user.rol === "REGULAR"}>
                    Regular
                  </option>
                </Form.Select>
                <Form.Text className="text-danger"></Form.Text>
              </Form.Group>
            </Col>

            {/* Available */}
            <Col md={12} lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Disponibilidad</Form.Label>
                <Form.Select
                  name="available"
                  aria-label="Available"
                  onChange={handleChangeInput}
                >
                  <option value="true" selected={user.available === true}>
                  Habilitado
                  </option>
                  <option value="false" selected={user.available === false}>
                    Desabilitado
                  </option>
                </Form.Select>
                <Form.Text className="text-danger"></Form.Text>
              </Form.Group>
            </Col>


            <Col md={6} lg={3}>
              <Form.Group className="my-3">
                <Button variant="warning" type="submit" className="w-100 mt-3">
                  Actualizar
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </Form>
    </Layout>
  );
};
