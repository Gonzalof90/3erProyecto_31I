import { useEffect, useState } from "react";
import { Layout } from "../Layouts/layout";
import Slider from "react-slick";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import {  Link, useParams } from "react-router-dom";
const HOST_SERVER = import.meta.env.VITE_HOST_SERVER;


export const DetailProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const {  idProduct } = useParams();
  console.log(params.idProduct); // 1
  
  useEffect(() => {
    fetch(`${HOST_SERVER}/products/${idProduct}`)
      .then((res) => res.json())
      .then(({ data, ok }) => (ok ? setProduct(data) : null))
      .catch((err) => console.error(err));
  }, [idProduct]);

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  return (
    <Layout>
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
          <div className="mt-3">
            <Col>
              <span className="col-lg-6 m-auto">
                <input 
                rows="3"
                className="col-md-5 m-auto"
                  type="text"
                  placeholder="escriba acá detalles de este Pedido"
                />
                <input type="number"  placeholder="Cantidad" min={0} max={10} className="col-md-1 m-auto"/>
              </span>
            </Col>
            <div className="col-lg-5 m-3" >
              <Button variant="secondary mx-1" as={Link} to="/Error">Agrega al Pedido</Button>
              <Button variant="outline-secondary" as={Link} to="/">Cancelar</Button>
            </div>
          </div>
        </Row>
      </Container>
    </Layout>
  );
};
