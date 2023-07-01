import { useContext, useEffect, useRef, useState } from "react";
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
  const [stateQuantity, setQuantity] = useState(1);
  const textareaRef = useRef();
  const { idProduct } = useParams();
  const { user, token } = useContext(UserContext);
  const swal = withReactContent(Swal);
  const [existInOrder, setExistInOrder] = useState(false);

  useEffect(() => {
    fetch(`${HOST_SERVER}/products/${idProduct}`)
      .then((res) => res.json())
      .then(({ data, ok }) => (ok ? setProduct(data) : null))
      .catch((err) => console.error(err));
  }, [idProduct]);

  const getQuantity = async () => {
    if (user._id) {
      const { ok, data } = await fetch(`${HOST_SERVER}/order/getQuantity`, {
        body: JSON.stringify({
          userId: user._id,
          productId: idProduct,
        }),
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      if (ok) {
        setQuantity(data);
        setExistInOrder(true);
      }
    }
  };

  useEffect(() => {
    console.log(textareaRef.current);
    getQuantity();
  }, [idProduct, token, user]);

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
          comment: textareaRef.value,
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
      ok && setExistInOrder(true);
      !ok && redirect("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleMoreQuantity = async (_id) => {
    try {
      const { ok, data } = await fetch(`${HOST_SERVER}/order/moreQuantity`, {
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
      ok && setQuantity(+data.quantity);
      ok && setExistInOrder(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLessQuantity = async (_id) => {
    try {
      if (stateQuantity > 1) {
        const { ok, data } = await fetch(`${HOST_SERVER}/order/lessQuantity`, {
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
        ok && setQuantity(+data.quantity);
        ok && setExistInOrder(true);
      }
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
                        className="m-auto"
                      />
                    </div>
                  );
                })
              : null}
          </Slider>

          <div className="col-md-6 d-inline-block">
            <h5 className="text-primary">{product.name}</h5>
            <p className="text-muted">{product.description}</p>
            <span className="text-success mx-2 display-6">
              {formatterPeso.format(
                product.price - (product.price * product.discount) / 100
              )}
            </span>
            <p className="">
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

            {existInOrder && (
              <span className="text-success">
                El producto esta en el carrito
              </span>
            )}

            {user._id && (
              <div className="btn-group mx-2">
                <button
                  className="btn btn-light"
                  onClick={() => handleLessQuantity(product._id)}
                >
                  -
                </button>
                <span className="p-2">{stateQuantity}</span>
                <button
                  className="btn btn-light"
                  onClick={() => handleMoreQuantity(product._id)}
                >
                  +
                </button>
              </div>
            )}
          </div>

          <div className="mt-3">
            {user._id && (
              <Col>
                <span className="col-lg-6 m-auto">
                  <textarea
                    ref={textareaRef}
                    rows="3"
                    className="form-control col-md-5 m-auto"
                    type="text"
                    placeholder="Escriba acá detalles de este pedido"
                  ></textarea>
                </span>
              </Col>
            )}
            <div className="col-lg-5 m-3">
              {user._id && (
                <Button
                  variant="secondary mx-1"
                  onClick={() => handleAddProductToOrder(product._id)}
                >
                  Agrega al Pedido
                </Button>
              )}
              <Button variant="outline-secondary" as={Link} to="/">
                {user._id ? "Cancelar" : "Volver"}
              </Button>
            </div>
          </div>
        </Row>
      </Container>
    </Layout>
  );
};
