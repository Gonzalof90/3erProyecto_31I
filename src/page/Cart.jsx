import { useContext, useEffect, useState } from "react";
import { Button, Form, Tab, Table, Tabs } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "../Layouts/layout";
import { UserContext } from "../contexts/userContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { SearchContext } from "../contexts/searchContext";
const serverHost = import.meta.env.VITE_HOST_SERVER;

export const Cart = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
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
    getOrders();
  }, []);

  const getProducts = (keyword) => {
    fetch(`${serverHost}/products?q=${keyword}`)
      .then((res) => res.json())
      .then(({ data }) => setProducts(data));
  };

  useEffect(() => {
    getProducts(keywordGlobal);
  }, [keywordGlobal]);

  const getOrders = () => {
    fetch(`${serverHost}/orders`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then(({ data, ok }) => {
        console.log(data);
        ok ? setOrders(data) : logout();
      });
  };

 
  
  

  return (
    <Layout>
      <Tabs
        defaultActiveKey="menus"
        id="uncontrolled-tab-example"
        className="my-3"
      >
        
       
        <Tab eventKey="pedidos" title="Pedidos" >
          Contenido de pedidos
          {orders.length &&
            orders.map(({ products, userId, status }) => {
                
              return (
            //    if(userId === userId._Id){}
                <div key={userId._id}>
                  <Table striped bordered hover className="mt-5">
                    <thead>
                      <tr>
                        <th>Imágenes</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Descuento</th>
                        <th>Estado</th>
                        {/*  <th>Acciones</th> */}
                      </tr>

                      <th>
                        Nombre Usuario:{" "}
                        <span className="text-primary">{userId.username}</span>
                      </th>
                    </thead>
                    <tbody>
                      {products.length &&
                        products.map(({ product, quantity }) => {
                          return (
                            <tr key={product._id}>
                              <td>
                                <img
                                  width={100}
                                  height={100}
                                  style={{ objectFit: "contain" }}
                                  src={
                                    product.images.find(
                                      ({ primary }) => primary
                                    )?.url
                                  }
                                  alt={product.name}
                                />
                              </td>
                              <td>{product.name}</td>
                              <th>{quantity}</th>
                              <td>{product.price}</td>
                              <td>{product.discount}</td>
                              <td>{status}</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </Table>
                </div>
              );
            })}
        </Tab>
      </Tabs>
    </Layout>
  );
};
