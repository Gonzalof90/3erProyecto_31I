import { useContext, useEffect, useState } from "react";
import { Button, Form, Tab, Table, Tabs } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "../Layouts/layout";
import { UserContext } from "../contexts/userContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { SearchContext } from "../contexts/searchContext";
const serverHost = import.meta.env.VITE_HOST_SERVER;

export const Admin = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const { token, logout } = useContext(UserContext);
  const mySwal = withReactContent(Swal);
  const redirect = useNavigate();
  const { keywordGlobal } = useContext(SearchContext);

  const getUsers = () => {
    fetch(`${serverHost}/users`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then(({ data, ok }) => {
        ok ? setUsers(data) : logout();
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const getProducts = (keyword) => {
    fetch(`${serverHost}/products?q=${keyword}`)
      .then((res) => res.json())
      .then(({ data }) => setProducts(data));
  };

  useEffect(() => {
    getProducts(keywordGlobal);
  }, [keywordGlobal]);

  const handleCheckActive = async (id, { target: { checked } }) => {
    try {
      const productsMap = products.map((product) => {
        if (product._id === id) {
          return {
            ...product,
            available: checked,
          };
        }
        return product;
      });
      setProducts(productsMap);

      const { ok } = await fetch(`${serverHost}/products/toggle/${id}`, {
        method: "PUT",
        headers: {
          Authorization: token,
        },
      });
      if (!ok) logout();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = ({ _id, name }) => {
    mySwal
      .fire({
        title: "Estas seguro de eliminar el producto:",
        text: name,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Eliminar",
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`${serverHost}/products/${_id}`, {
            method: "DELETE",
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then(({ ok, message }) => {
           getProducts(keywordGlobal)
              mySwal
                .fire({
                  title: message,
                  icon: ok ? "success" : "error",
                  timer: 2000,
                  showConfirmButton: false,
                })
                .then(() => {
                  ok ? redirect("/admin") : logout();
                });
            });
        }
      });
  };


  const handleDeleteUser = ({ _id, username }) => {
    mySwal
      .fire({
        title: "Estas seguro de eliminar el usuario:",
        text: username,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Eliminar",
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`${serverHost}/users/${_id}`, {
            method: "DELETE",
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then(({ ok, message }) => {
           getUsers()
              mySwal
                .fire({
                  title: message,
                  icon: ok ? "success" : "error",
                  timer: 2000,
                  showConfirmButton: false,
                })
                .then(() => {
                  ok ? redirect("/admin") : logout();
                });
            });
        }
      });
  };

  return (
    <Layout>
      <Tabs
        defaultActiveKey="menus"
        id="uncontrolled-tab-example"
        className="my-3"
      >
        <Tab eventKey="menus" title="Menus">
          <Button as={Link} to="/products/create">
            Nuevo Menu
          </Button>

          <Table striped bordered hover className="mt-5">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Descuento</th>
                <th>Imágenes</th>
                <th>Activo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.length &&
                products.map((product) => {
                  return (
                    <tr key={product._id}>
                      <td>{product.name}</td>
                      <td>{product.description}</td>
                      <td>{product.price}</td>
                      <td>{product.discount}</td>
                      <td>
                        <img
                          width={100}
                          height={100}
                          style={{ objectFit: "contain" }}
                          src={
                            product.images.find(({ primary }) => primary)?.url
                          }
                          alt={product.name}
                        />
                      </td>
                      <td>
                        <Form.Check
                          onChange={(event) =>
                            handleCheckActive(product._id, event)
                          }
                          checked={product.available}
                        />
                      </td>
                      <td className="d-flex flex-column">
                        <Button
                          as={Link}
                          to={`/products/update/${product._id}`}
                          variant="warning"
                        >
                          Editar
                        </Button>

                        <Button
                          style={{backgroundColor:"#FF601C", border:0, marginTop:"5px"}}
                          onClick={() => handleDelete(product)}
                        >
                          Eliminar
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="usuarios" title="Usuarios">
          <Table striped bordered hover className="mt-5">
            <thead>
              <tr>
                <th>Nombre Usuario</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Avatar </th>
                <th>Activo</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user._id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.rol}</td>
                    <td>
                      <img
                        width={50}
                        height={50}
                        style={{ objectFit: "contain" }}
                        src={user.avatar}
                        alt={user.name}
                      />
                    </td>
                    <td>
                      <Form.Check
                        onChange={() => handleCheckActive(user._id)}
                        checked={user.available}
                      />
                    </td>
                    <td className="d-flex flex-column">
                      <Button as={Link} to={`/users/update/${user._id}`} variant="warning">
                        Editar
                      </Button>

                      <Button
                        style={{backgroundColor:"#FF601C", border:0, marginTop:"5px"}}
                        onClick={() => handleDeleteUser(user)}
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="pedidos" title="Pedidos">
          Contenido de pedidos
        </Tab>
      </Tabs>
    </Layout>
  );
};
