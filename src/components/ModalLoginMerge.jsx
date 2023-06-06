import { Button, Col, Container, Form, Image, Modal, Row } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { PersonFill} from "react-bootstrap-icons";
import styled from "styled-components";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";
import logo  from '../assets/imagenes/logo/logo.png';
const HOST_SERVER = import.meta.env.VITE_HOST_SERVER;

const LinkComponent = styled(Link)`
  color: #ff601c;
  text-decorartion: none;
  transition: 0.35s;
  &:hover {
    color: #ffb80b;
  }
`;

const FormGroupComponent = styled(Form.Group)`
  position: relative;
  margin-bottom: 1.25em;
  font-size: 1em;
  
`;

const FormControlComponent = styled(Form.Control)`
  border: 0;
  border-radius: 0;
  border-bottom: 3px solid #dfdfdf;
  padding-top: 20px;
  background: transparent;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  &:focus {
    border-color: #dfdfdf;
  }
`;

const FormLabelComponent = styled(Form.Label)`
  position: absolute;
  top: 50%;
  left: 11.2px;
  pointer-events: none;
  font-size: 1em;
  color: grey;
  transform: translateY(-30%);
  transition: 0.2s ease-in-out;

  &.has-input {
    top: 5px;
    font-size: 0.75em;
    color: grey;
    transform: translateY(-30%);
  }
`;
const ModalHeaderComponent = styled(Modal.Header)`
background-color: #ffc107;
border: none;

`;


const imgRepartidos = "https://elcomercio.pe/resizer/D4MbctPzmLNMtkxfL9WowHmOg4Q=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LKK54KMX6ZDGBPF4XBQM46SR6U.jpg"



export const ModalLoginMerge = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
    <>
      <Button variant="transparent" onClick={handleShow}><PersonFill color="#803530" size={45} /></Button>
 
        <Modal show={show} onHide={handleClose} >

          
            <ModalHeaderComponent>
                <Modal.Title className='w-100 text-center ms-3 bg-warning'>
                  <img src={logo} style={{width:"50px"}}></img>
                </Modal.Title>  
            </ModalHeaderComponent>  
            <Modal.Body className='show-grid'>
                <Container>
                  <Row>
                    <Col md={6} className='overflow-hidden rounded'>
                      <div className='w-100 d-flex  justify-content-center'>
                        <Image style={{objectFit: "cover"}} src={imgRepartidos}/>
                      </div>
                    </Col>
                    <Col xs={12} md={6} className='d-flex flex-column justify-content-between'>
                      <Form onSubmit={handleSubmit} className=''>
                          <FormGroupComponent className="mb-3" controlId="formBasicEmail">
                            <FormLabelComponent  className={email.length > 0 ? 'has-input' : ``}>
                              Correo electrónico
                            </FormLabelComponent>
                            <FormControlComponent
                              type="email"
                              value={email}
                              onChange={handleChangeEmail}
                             
                            />
                          </FormGroupComponent>

                          <FormGroupComponent className="mb-3" controlId="formBasicPassword">
                              <FormLabelComponent className={password.length > 0 ? 'has-input' : ``}>
                                Contraseña
                              </FormLabelComponent>
                              <FormControlComponent
                                type="password"
                                value={password}
                                onChange={handleChangePassword}
                                
                              />
                          </FormGroupComponent>
                            <p className="text-danger">{error}</p>
                          <div className='d-flex justify-content-center'>
                              <Button  type="submit" className='w-75 btn-outline-light' style={{backgroundColor:"#803530",}} onClick={handleClose}>
                                Iniciar Sesión
                              </Button>
                          </div>
                      </Form>
                      <div className='d-flex flex-column justify-content-between'>
                          <LinkComponent >No puedo ingresar</LinkComponent>    
                          <LinkComponent to={"/registers"}>Crear cuenta</LinkComponent>
                      </div>
                    </Col> 
                  </Row>   
                </Container>                 
            </Modal.Body>
          



        </Modal>
      </>
    
  );
};
