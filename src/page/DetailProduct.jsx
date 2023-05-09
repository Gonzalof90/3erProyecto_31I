import React, { useEffect, useState } from "react";
import { Layout } from "../Layouts/layout";
import Slider from "react-slick";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const DetailProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  console.log(params.idProduct); // 1

  useEffect(() => {
    fetch(`http://localhost:5173/products?id=${params.idProduct}`)
      .then((res) => res.json())
      .then((product) => {
        console.log("el producto encontrado es", product[0]);
        setProduct(product[0]);
      });
  }, []);

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  return (
    <Layout>
      <h1>detalle de producto</h1>
      <Container className="my-5">
        <Row>
          <Slider
            dots={true}
            speed={500}
            slidesToShow={1}
            className="card card-body mb-3 col-md-4"
          >
            {product.images
              ? product.images.map((image, index) => {
                  return (
                    <div key={index}>
                      <Image
                        style={{ height: "200px" }}
                        src={image.url}
                        alt=""
                        className="m-auto"
                      />
                    </div>
                  );
                })
              : null}
          </Slider>

          <div className="col-md-6">
            <h5 className="text-primary">{product.name}</h5>
            <p className="text-muted">{product.description}</p>
            <span className="text-success mx-2 display-6">
              {formatterPeso.format(
                product.price - (product.price * product.discount) / 100
              )}
            </span>
            <p>
              <span className="text-primary text-decoration-line-through mx-3">
                {formatterPeso.format(product.price)}
              </span>
              <span
                className="text-danger fw-bold"
                style={{ fontSize: ".7rem" }}
              >
                {product.discount}% OFF
              </span>
            </p>
          </div>
          <div>
            <Col>
              <span className="col-lg-6 m-auto">
                <input 
                rows="3"
                className="col-md-5 m-auto"
                  type="text"
                  placeholder="escriba aca detalles de este Pedido"
                />
              </span>
            </Col>
            <div className="col-lg-5 m-3" >
              <Button variant="secondary">Agrega al Pedido</Button>
              <Button variant="outline-secondary">Cancelar</Button>
            </div>
          </div>
        </Row>
      </Container>
    </Layout>
  );
};
