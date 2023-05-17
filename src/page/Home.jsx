import { Layout } from "../Layouts/layout"
import { Carousel, CarouselItem} from "react-bootstrap"

export const Home = () => {
  return (
    <Layout>

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/500466008/es/foto/bistecs-de-carne-de-res.jpg?s=612x612&w=0&k=20&c=sVc8KhnTkebIWmwTeNYmXqGfXikut1iclMQ8K8NxZv8="
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://definicion.de/wp-content/uploads/2009/06/gastronomia.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/foto-gratis/chef-colocando-hierba-comida-gourmet_23-2148516908.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    </Layout>
  )
}
