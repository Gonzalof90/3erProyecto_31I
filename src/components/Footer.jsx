import React from 'react'
import { Image, Container, Navbar } from 'react-bootstrap'
import logo from "../assets/imagenes/logo/logo.png"
import { Facebook, Instagram, Linkedin, Tiktok } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'




export const Footer = () => {
  return (
    <div className="bg-warning ">
      <Container className='d-flex justify-content-between align-items-center  '>
        <Navbar.Brand as={Link} to="/home">
      <Image src={logo} style= {{width:"75px"}}/>
        
        </Navbar.Brand>
      <div>
        <p>© Todos los derechos reservados</p>
      </div>
      <div>
        <Navbar.Brand href="#" className="mx-2" >
          <Facebook color="#803530" size={30}/>
        </Navbar.Brand>
        <Navbar.Brand href="#" className="mx-2" >

          <Instagram color="#803530" size={30}/>

        </Navbar.Brand>
          <Navbar.Brand href="#" className="mx-2" >
          <Tiktok color="#803530" size={30}/>

          </Navbar.Brand>
          <Navbar.Brand href="#" className="mx-2" > 
          <Linkedin color="#803530" size={30}/>
          </Navbar.Brand>
      </div>

      </Container>
      

      
    </div>
  )
}


