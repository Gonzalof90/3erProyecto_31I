import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Layout } from "../Layouts/layout";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";
const HOST_SERVER = import.meta.env.VITE_HOST_SERVER;
const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LinkComponent = styled(Link)`
  color: #ff601c;
  transition: 0.35s;
  &:hover {
    color: #ffb80b;
  }
`;

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser,setToken } = useContext(UserContext);
  const [error, setError] = useState("");
  const redirect = useNavigate();


  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Ingresar email y contraseña");
      return;
    }

    const res = await fetch(`${HOST_SERVER}/users/login`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const response = await res.json();
    if (!response.ok) {
      setError(response.message)
      return
    }

    error ? setError("") : null;
    setUser(response.data);
    setToken(response.token)
    window.localStorage.setItem('token',response.token)
    redirect("/user/profile");
  };

  return (
    <Layout>
      <Container className="my-4">
        <Row>
          <Col lg={{ span: 4, offset: 4 }} md={{ span: 6, offset: 3 }}>
            <h1 className="text-center">INICIO DE SESIÓN</h1>
          </Col>
          <Col lg={{ span: 4, offset: 4 }} md={{ span: 6, offset: 3 }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={handleChangeEmail}
                  placeholder="Colocar Correo electrónico"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={handleChangePassword}
                  placeholder="Colocar Contraseña"
                />
              </Form.Group>
              <p className="text-danger">{error}</p>
              <ContainerButton>
                <LinkComponent to="/register">
                  No estoy registrado
                </LinkComponent>

                <Button variant="warning" type="submit">
                  Iniciar Sesión
                </Button>
              </ContainerButton>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
