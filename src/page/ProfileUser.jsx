import React, { useContext } from "react";
import styled from "styled-components";
import { Layout } from "../Layouts/layout";
import { UserContext } from "../contexts/userContext";
import { Col, Row } from "react-bootstrap";
//import backgroundFooD from "../assets/imagenes/ModaImg/backgroundFooD";
import modalImg from "../assets/imagenes/ModaImg/modalImg.jpeg"



const ImgComponent = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: contain;
  transition:1s;
  ${(props) => props.active ? "box-shadow:3px 3px 5px red;" : null}

  &:hover {
    transform: scale(1.2);
  }
`;

const ComponentBackground = styled.div`
  background-img : ${modalImg} ;
  background-size: cover;
`;

const RowComponent = styled(Row)`
  border: #fbfbf5 solid;
  background-color: #fbfbf4 ;
  border-radius: 3%;
  height: 58vh;
 `;

export const ProfileUser = () => {


  const {user} = useContext(UserContext)
  return (
    <Layout>
      <ComponentBackground>
        <RowComponent className="m-5 d-flex justify-content-around" >
          <Col sm={12} md={6} className="d-flex flex-column align-items-center justify-content-center" >
            <h1 >USUARIO</h1>
              <ImgComponent
                src={user.avatar}
                alt={`${user.username}`}
                active={user.rol === "ADMIN"}
              />
          </Col>
          <Col sm={12} md={6} className="d-flex flex-column align-items-center justify-content-center">
            <h3>{user.usename}</h3>
            <p>Hola!</p>
            <p className="text-muted">{user.email}</p>
            <p>{user.rol}</p>
          </Col>
        </RowComponent>
      </ComponentBackground>
    </Layout>
  );
};
