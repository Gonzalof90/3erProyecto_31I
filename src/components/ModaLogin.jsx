import React, { useState } from 'react'
import { Button, Col, Container, Form, Image, Modal, Row } from 'react-bootstrap';
import { PersonFill} from "react-bootstrap-icons";
import {NavLink} from "react-router-dom";
import logo  from '../assets/imagenes/logo/logo.png';
import styled from 'styled-components';
//import burguercode from "../assets/imagenes/ModaImg/modalImg2.jpeg"

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

export const ModaLogin = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //const { setUser } = useContext(UserContex);
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    //const [error, setError] = useState('');
   // const redirect = useNavigate();
  

    const handleEmailChange = (e) => {
        setInputEmail(e.target.value)
    };

    const handlePasswordChange = (e) => {
        setInputPassword(e.target.value)
    }

    

    const handleSubmit =(e) => {
        e.preventDefault();

    // const res =  fetch(`http://localhost:3001/users?username=${inputUsername}`);
    // const user =  res.json();
    // const userObjt = user[0];

    // if(!userObjt){
    //   setError("El usuario no esta registrado.");
    //   return
    // }

    // const isPasswordValid = bcrypt.compareSync(inputPassword, userObjt.password)
    // console.log(isPasswordValid);
    // if(!isPasswordValid){
    //   setError("La contraseña es incorrecta.");
    //   return;
    // }


    // error ? setError("") : null;
    // setUser(userObjt);
    // redirect('/ProfileUser');
    }
  
//      CHECK  DEL FORMULARIO   
//   <FormGroupComponent className="mb-3" controlId="formBasicCheckbox">
//   <Form.Check type="checkbox" label="Recordar mi usuario" />
//     </FormGroupComponent>
   

   
  return (
    <>
        <Button variant="transparent" onClick={handleShow}><PersonFill color="#803530" size={45} /></Button>
 
        <Modal show={show} onHide={handleClose} >
               
                    <ModalHeaderComponent closeButton>
                            <Modal.Title className='w-100'>
                                <h3 className='text-center ms-3'><img src={logo} style={{width:"50px"}}></img></h3>
                            </Modal.Title>
                    </ModalHeaderComponent>
                    <Modal.Body className='show-grid'>
                        <Container>
                            <Row>
                                <Col none md={6} className='overflow-hidden rounded'>
                                    <div className='w-100 d-flex justify-content-center' >
                                    <Image style={{objectFit: "cover"}}  src={imgRepartidos} />
                                    </div>
                                </Col>
                                <Col xs={12} md={6} className='d-flex flex-column justify-content-around'>
                                    <Form onSubmit={handleSubmit}>
                                        <FormGroupComponent className="mb-3" controlId="formBasicEmail">
                                            <FormLabelComponent className={inputEmail.length > 0 ? 'has-input' : ``}>
                                                Dirrección Correo
                                            </FormLabelComponent>
                                            <FormControlComponent 
                                                type="email" 
                                                value={inputEmail}
                                                onChange={handleEmailChange}
                                            />
                                        </FormGroupComponent>
                                        <FormGroupComponent className="mb-3" controlId="formBasicPassword">
                                            <FormLabelComponent className={inputPassword.length > 0 ? 'has-input' : ``}>
                                                Contraseña
                                            </FormLabelComponent>
                                            <FormControlComponent
                                                type="password" 
                                                value={inputPassword}
                                                onChange={handlePasswordChange} 
                                            />
                                        </FormGroupComponent>
                                      
                                        <div className='d-flex justify-content-center'>
                                            <Button type="submit" className='w-50 btn-outline-light' style={{backgroundColor:"#803530",}} onClick={handleClose}>
                                            Enviar
                                            </Button>
                                        </div>
                                    </Form>
                                    <div className='d-flex flex-column justify-content-between'>
                                        <NavLink className={"text-decoration-none"}>No puedo ingresar</NavLink>    
                                        <NavLink className={"text-decoration-none"} to={"/Login"}>Crear cuenta</NavLink>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                       
                    </Modal.Body>
                  
              
        </Modal>
    </>
  )
}