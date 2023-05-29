import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export const SliderComponent = ({product}) => {
  return (
    <Slider dots={true} speed={500} slidesToShow={3} slidesToScroll={1}>
      <div key={product.id}>
        <Card style={{ width: "15rem" }} className="my-4 mx-auto">
          <Card.Img
            variant="top"
            src={product.images[0].url}
            style={{ height: "150px", objectFit: "contain" }}
          />
          <Card.Body>
            <Card.Title className="fs-6">{product.name}</Card.Title>
            <Card.Text style={{ fontSize: ".7rem" }}>
              {product.description}
            </Card.Text>
            <Button
              as={Link}
              to={`/products/detail/${product.id}`}
              variant="primary"
              className="btn-sm"
            >
              Ver mas
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div key={product.id}>
        <Card style={{ width: "15rem" }} className="my-4 mx-auto">
          <Card.Img
            variant="top"
            src={product.images[0].url}
            style={{ height: "150px", objectFit: "contain" }}
          />
          <Card.Body>
            <Card.Title className="fs-6">{product.name}</Card.Title>
            <Card.Text style={{ fontSize: ".7rem" }}>
              {product.description}
            </Card.Text>
            <Button
              as={Link}
              to={`/products/detail/${product.id}`}
              variant="primary"
              className="btn-sm"
            >
              Ver mas
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div key={product.id}>
        <Card style={{ width: "15rem" }} className="my-4 mx-auto">
          <Card.Img
            variant="top"
            src={product.images[0].url}
            style={{ height: "150px", objectFit: "contain" }}
          />
          <Card.Body>
            <Card.Title className="fs-6">{product.name}</Card.Title>
            <Card.Text style={{ fontSize: ".7rem" }}>
              {product.description}
            </Card.Text>
            <Button
              as={Link}
              to={`/products/detail/${product.id}`}
              variant="primary"
              className="btn-sm"
            >
              Ver mas
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div key={product.id}>
        <Card style={{ width: "15rem" }} className="my-4 mx-auto">
          <Card.Img
            variant="top"
            src={product.images[0].url}
            style={{ height: "150px", objectFit: "contain" }}
          />
          <Card.Body>
            <Card.Title className="fs-6">{product.name}</Card.Title>
            <Card.Text style={{ fontSize: ".7rem" }}>
              {product.description}
            </Card.Text>
            <Button
              as={Link}
              to={`/products/detail/${product.id}`}
              variant="primary"
              className="btn-sm"
            >
              Ver mas
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div key={product.id}>
        <Card style={{ width: "15rem" }} className="my-4 mx-auto">
          <Card.Img
            variant="top"
            src={product.images[0].url}
            style={{ height: "150px", objectFit: "contain" }}
          />
          <Card.Body>
            <Card.Title className="fs-6">{product.name}</Card.Title>
            <Card.Text style={{ fontSize: ".7rem" }}>
              {product.description}
            </Card.Text>
            <Button
              as={Link}
              to={`/products/detail/${product.id}`}
              variant="primary"
              className="btn-sm"
            >
              Ver mas
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div key={product.id}>
        <Card style={{ width: "15rem" }} className="my-4 mx-auto">
          <Card.Img
            variant="top"
            src={product.images[0].url}
            style={{ height: "150px", objectFit: "contain" }}
          />
          <Card.Body>
            <Card.Title className="fs-6">{product.name}</Card.Title>
            <Card.Text style={{ fontSize: ".7rem" }}>
              {product.description}
            </Card.Text>
            <Button
              as={Link}
              to={`/products/detail/${product.id}`}
              variant="primary"
              className="btn-sm"
            >
              Ver mas
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div key={product.id}>
        <Card style={{ width: "15rem" }} className="my-4 mx-auto">
          <Card.Img
            variant="top"
            src={product.images[0].url}
            style={{ height: "150px", objectFit: "contain" }}
          />
          <Card.Body>
            <Card.Title className="fs-6">{product.name}</Card.Title>
            <Card.Text style={{ fontSize: ".7rem" }}>
              {product.description}
            </Card.Text>
            <Button
              as={Link}
              to={`/products/detail/${product.id}`}
              variant="primary"
              className="btn-sm"
            >
              Ver mas
            </Button>
          </Card.Body>
        </Card>
      </div>
        <div key={product.id}>
        <Card style={{ width: "15rem" }} className="my-4 mx-auto">
          <Card.Img
            variant="top"
            src={product.images[0].url}
            style={{ height: "150px", objectFit: "contain" }}
          />
          <Card.Body>
            <Card.Title className="fs-6">{product.name}</Card.Title>
            <Card.Text style={{ fontSize: ".7rem" }}>
              {product.description}
            </Card.Text>
            <Button
              as={Link}
              to={`/products/detail/${product.id}`}
              variant="primary"
              className="btn-sm"
            >
              Ver mas
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Slider>
  );
};
