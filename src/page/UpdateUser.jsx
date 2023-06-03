import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../Layouts/layout";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
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
    id: null,
    username: "",
    password: "",
    email: "",
    rol: "",
    available: "",
    avatar: ""
  };
  const [user, setUser] = useState(initialStateUser);
  const { token } = useContext(UserContext);
  const handleUsername = ({ target }) => {
    setUsername({
      ...user,
      username: target.value,
    });
  };

  const handlePassword = ({ target }) => {
    setUser({
      ...user,
      password: parseInt(target.value),
    });
  };

  const handleEmail = ({ target }) => {
    setUser({
      ...user,
      email: parseInt(target.value),
    });
  };

  const handleRol = ({ target }) => {
    setUser({
      ...user,
      rol: target.value,
    });
  };

  const handleAvailable = ({ target }) => {
    setUser({
      ...user,
      available: target.value,
    });
  };

  const handleAvatar = ({ target }) => {
    setUser({
      ...product,
      avatar: target.value,
    });
  };



  useEffect(() => {
    fetch(`${HOST_SERVER}/users/${idUser}`)
      .then((res) => res.json())
      .then(({ data, ok }) => (ok ? setUser(data) : null));
  }, []);

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
            ok ? redirect(`/users/admin`) : redirect("/login");
          });
      });
  };

  return (
    <Layout>
      <h1 className="text-center my-2">EDITAR USUARIO</h1>
      <Form onSubmit={handleSubmit}>
        <Container className="mb-4">
          <Row>
            <Col md={12} lg={4}>
              <Form.Group className="mb-3">
                {/* NOMBRE */}
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar nombre"
                  value={user.username}
                  onChange={handleUsername}
                />
                <Form.Text className="text-danger"></Form.Text>
              </Form.Group>
            </Col>
            <Col md={12} lg={4}>
              {/* PRECIO */}
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar precio"
                  value={user.password}
                  onChange={handlePassword}
                />
                <Form.Text className="text-danger"></Form.Text>
              </Form.Group>
            </Col>
            {/* DESCUENTO */}
            <Col md={12} lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresar descuento"
                  value={user.email}
                  onChange={handleEmail}
                />
                <Form.Text className="text-danger"></Form.Text>
              </Form.Group>
            </Col>

             {/* avatar */}
             <Col md={12} lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>avatar</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar descuento"
                  value={user.avatar}
                  onChange={handleAvatar}
                />
                <Form.Text className="text-danger"></Form.Text>
              </Form.Group>
            </Col>

            {/* IMÁGENES */}
            {/* <Col md={12} lg={4}>
              <Form.Group className="mb-3">
                <Container className="d-flex justify-content-center position-relative">
                  <Image
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                      margin: "auto",
                    }}
                    src={product.images[0].url}
                    alt=""
                  />
                  {product.images[0].primary ? (
                    <span className="position-absolute top-50 start-50 translate-middle rotate-3 fw-bold text-info">
                      PRIMARIA
                    </span>
                  ) : null}
                </Container>
                <Form.Label>Imagen 1</Form.Label>

                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Ingresar imagen 1"
                    value={product.images[0].url}
                    id="1"
                    onChange={handleImages}
                  />
                  <InputGroup.Text className="bg-white">
                    <Form.Check
                      type="radio"
                      name="activePrimary"
                      id="1"
                      onChange={handleCheckPrimary}
                      checked={product.images[0].primary}
                    />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={12} lg={4}>
              <Form.Group className="mb-3">
                <Container className="d-flex justify-content-center position-relative">
                  <Image
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                      margin: "auto",
                      position: "relative",
                    }}
                    src={
                      product.images[1].url
                        ? product.images[1].url
                        : imageDefault
                    }
                    alt=""
                  />
                  {product.images[1].primary ? (
                    <span className="position-absolute top-50 start-50 translate-middle rotate-3 fw-bold text-info">
                      PRIMARIA
                    </span>
                  ) : null}
                </Container>
                <Form.Label>Imagen 2</Form.Label>

                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Ingresar imagen 2"
                    value={product.images[1].url}
                    id="2"
                    onChange={handleImages}
                  />
                  <InputGroup.Text className="bg-white">
                    <Form.Check
                      type="radio"
                      name="activePrimary"
                      id="2"
                      onChange={handleCheckPrimary}
                      checked={product.images[1].primary}
                    />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={12} lg={4}>
              <Form.Group className="mb-3">
                <Container className="d-flex justify-content-center position-relative">
                  <Image
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                      margin: "auto",
                    }}
                    src={
                      product.images[2].url
                        ? product.images[2].url
                        : imageDefault
                    }
                    alt=""
                  />
                  {product.images[2].primary ? (
                    <span className="position-absolute top-50 start-50 translate-middle rotate-3 fw-bold text-info">
                      PRIMARIA
                    </span>
                  ) : null}
                </Container>
                <Form.Label>Imagen 3</Form.Label>

                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Ingresar imagen 3"
                    id="3"
                    value={product.images[2].url}
                    onChange={handleImages}
                  />
                  <InputGroup.Text className="bg-white">
                    <Form.Check
                      type="radio"
                      name="activePrimary"
                      id="3"
                      onChange={handleCheckPrimary}
                      checked={product.images[2].primary}
                    />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col> */}

            {/* Rol */}
            <Col md={12} lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>rol</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresar descuento"
                  value={user.rol}
                  onChange={handleRol}
                />
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
