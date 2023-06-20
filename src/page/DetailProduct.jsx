import { useContext, useEffect, useState } from "react";
import { Layout } from "../Layouts/layout";
import Slider from "react-slick";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const HOST_SERVER = import.meta.env.VITE_HOST_SERVER;

export const DetailProduct = () => {
  const redirect = useNavigate();
  const [product, setProduct] = useState({});
  const { idProduct } = useParams();
  const { user, token } = useContext(UserContext);
  const swal = withReactContent(Swal);

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

  const handleAddProductToOrder = async (_id) => {
    try {
      const { ok } = await fetch(`${HOST_SERVER}/order/add`, {
        body: JSON.stringify({
          userId: user._id,
          productId: _id,
        }),
        method: "PUT",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());

      await swal.fire({
        title: ok ? "Producto Agregado" : "Debes iniciar sesión",
        icon: ok ? "success" : "error",
        showConfirmButton: false,
        timer: 1500,
      });
      !ok && redirect("/login");
    } catch (error) {
      console.log(error);
    }
  };

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
                        className=""
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
            <Col >
              <span className="col-lg-6 m-auto">
                <input
                  rows="3"
                  className="col-md-5 mx-2"
                  type="text"
                  placeholder="escriba acá detalles de este Pedido"
                />
                <input
                  type="number"
                  placeholder="Cantidad"
                  min={0}
                  max={10}
                  className="col-md-1 mx-2"
                />
              </span>
            </Col>
            <div className="col-lg-5 m-3">
              <Button
                variant="secondary mx-1"
                onClick={() => handleAddProductToOrder(product._id)}
              >
                Agrega al Pedido
              </Button>
              <Button variant="outline-secondary" as={Link} to="/">
                Cancelar
              </Button>
            </div>
          </div>
        </Row>
      </Container>
    </Layout>
  );
};
