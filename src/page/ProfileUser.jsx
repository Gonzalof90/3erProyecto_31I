import React, { useContext } from "react";
import styled from "styled-components";
import { Layout } from "../Layouts/layout";
import { UserContext } from "../contexts/userContext";
import { Button, Col, Row } from "react-bootstrap";
import backgrounFooD from "../assets/imagenes/ModaImg/backgrounFooD.jpg";
import { Send } from "react-bootstrap-icons";






const ImgComponent = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: contain;
  transition:1s;
  ${(props) => props.active ? "box-shadow:3px 3px 5px red;" : null}

  &:hover {
    transform: scale(1.2);
  }
`;

const ComponentBackground = styled.div`
  background-image: url('${backgrounFooD}');
  background-size: cover;
  background-position: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RowComponent = styled(Row)`
  border: 2px solid rgba(0, 0, 0, 0.9) ;
  background-color: rgba(0, 0, 0, 0.5) ;
  border-radius: 3%;
  height: 55vh;
  width: 50vw;
  padding: 1vh;
  box-shadow: 3px 3px 6px black
  
 `;

const SendButton = styled(Button)`
  background-color: #803530;  
  color: #fff;
  border: none;
  &:hover{
    transform: 2s;
    background-color: #ffc107;
    
  }

`;


export const ProfileUser = () => {


  const {user} = useContext(UserContext)
  return (
    <Layout>
      <ComponentBackground>
        <RowComponent className="" >
          <Col sm={12} md={6} className="d-flex flex-column align-items-center justify-content-center" >
            <h1 className="fw-bold pb-2 text-warning">USUARIO</h1>
              <ImgComponent
                src={user.avatar}
                alt={`${user.username}`}
                active={user.rol === "ADMIN"}
              />
          </Col>
          <Col sm={12} md={6} className="d-flex flex-column align-items-center justify-content-center">
            <h3>{user.usename}</h3>
            <p className="display-6 text-white">Hola!</p>
            <p className="text-light">{user.email}</p>
            <p className="text-light">{user.rol}</p>
            <SendButton>Invitar <span><Send /></span></SendButton>
          </Col>
        </RowComponent>
      </ComponentBackground>
    </Layout>
  );
};
