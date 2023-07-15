import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import defaultImage from "../assets/imagenes/Carrusel/pizza.jpg";

export const SliderComponent = ({ products }) => {
  return (
    <Slider
      dots={true}
      speed={500}
      slidesToShow={4}
      slidesToScroll={1}
      responsive={[
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
          },
        },

        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
          },
        },
      ]}
    >
      {products.map(({ _id, images, name, description, available }) => {
        const imagePrimary =
          images.find(({ primary }) => primary)?.url || defaultImage;

        return (
          <div key={_id}>
            <Card
              style={{ width: "15rem" }}
              className="my-4 mx-auto border-0 shadow"
            >
              <Card.Img
                variant="top"
                src={imagePrimary}
                style={{ height: "150px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="fs-6">{name}</Card.Title>
                <Card.Text
                  style={{ fontSize: ".7rem" }}
                  className="text-truncate"
                >
                  {description}
                </Card.Text>
                <Button
                  as={Link}
                  to={`/products/detail/${_id}`}
                  variant="danger"
                  className="btn-sm"
                >
                  Ver más
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </Slider>
  );
};
