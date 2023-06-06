import { Layout } from "../Layouts/layout";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const HOST_SERVER = import.meta.env.VITE_HOST_SERVER;

export const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    try {
      const { ok, data } = await fetch(`${HOST_SERVER}/products`).then((res) =>
        res.json()
      );
      ok && setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <h1 className="text-center my-2">Productos</h1>

      <Container>
        <Row>
          {products.map(({ _id, images, name, description }) => {
            const imagePrimary =
              images.find(({ primary }) => primary)?.url || images[0].url;

            return (
              <Col lg={4} md={6} xs={12} key={_id}>
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
                      variant="primary"
                      className="btn-sm"
                    >
                      Ver mas
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Layout>
  );
};
