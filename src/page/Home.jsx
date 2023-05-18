import { Layout } from "../Layouts/layout";
import { Carousel } from "react-bootstrap";
import { SliderComponent } from "../components/Slider.jsx";
import pizza from "../assets/imagenes/Carrusel/pizza.jpg";
import tabla from "../assets/imagenes/Carrusel/tabla.jpg";
import burguercode from "../assets/imagenes/Carrusel/burguercode.jpg";

const product = {
  id: 1,
  description:
    "asdiohbasbiodoadbisasdibasdbijasdbioasdbiojdasbiojdasiobjasdiobjdsadjiaosbasdjiobdasboji",
  name: "Titulo producto",
  images: [{ url: pizza }],
};

export const Home = () => {
  return (
    <Layout>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={pizza} alt="First slide" />
          <Carousel.Caption>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={tabla} alt="Second slide" />

          <Carousel.Caption>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={burguercode} alt="Third slide" />

          <Carousel.Caption>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <SliderComponent  product={product}/>
    </Layout>
  );
};
