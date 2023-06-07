import React from 'react'
import {Carousel} from "react-bootstrap"
import pizza from "../assets/imagenes/Carrusel/pizza.jpg";
import tabla from "../assets/imagenes/Carrusel/tabla.jpg";
import burguercode from "../assets/imagenes/Carrusel/burguercode.jpg";

export const CarouselComponent = () => {
  return  (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={pizza} alt="First slide" />
          <Carousel.Caption>
            <p className="text-light fs-4 fw-bold" style={{textShadow:'1px 1px 5px gray',userSelect:'none'}}>Las mejores Pizzas</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={tabla} alt="Second slide" />

          <Carousel.Caption>
            <p className="text-light fs-4 fw-bold" style={{textShadow:'1px 1px 5px gray',userSelect:'none'}}>Tablas únicas e indefinidas</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={burguercode} alt="Third slide" />

          <Carousel.Caption>
            <p className="text-light fs-4 fw-bold" style={{textShadow:'1px 1px 5px gray',userSelect:'none'}}>
              No te comas el verso
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

