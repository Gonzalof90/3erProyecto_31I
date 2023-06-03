
import { Layout } from "../Layouts/layout"
import { Button, Container, Form, Image } from "react-bootstrap";
import Login1 from "../assets/imagenes/ModaImg/Login1.jpg"

export const Login = () => {
    return (
        <Layout>
          <Container style={{height:"80vh"}} className=" w-100">
           
            <div className="d-flex p-4 bg-info h-100">
              <div className="w-50 ">
                  <Image src={Login1} className="img-thumbnail" style={{height: "100%"}}/>
              </div>
              <div className="w-50 h-100 ps-4">
                <div >
                  <h4>Formulario</h4>
                </div>
                <div>
                  <Form >
                    <div className="d-flex">
                      <div className="d-grid gap-3 me-5 ">
                        <Form.Group>
                          <Form.Label>Nombres</Form.Label>
                          <Form.Control type="text" placeholder="Marquitos Angel" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Apellido/s</Form.Label>
                          <Form.Control type="text" placeholder="Navaja" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Dirrección de Correo</Form.Label>
                          <Form.Control type="email" placeholder="marcosnavaja@email.com" />
                        </Form.Group>
                      </div>
                      <div className="d-grid gap-3">
                        <Form.Group>
                          <Form.Label>Número de Telefono</Form.Label>
                          <Form.Control type="telefono" placeholder="0123-123456" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Dirrección</Form.Label>
                          <Form.Control type="text" placeholder="712 Red Bark Ln en Henderson, Nevada." />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Foto</Form.Label>
                          <Form.Control type="image"  />
                        </Form.Group>
                      </div>
                    </div>
                    
                    <div className="mt-5 text-center">
                      
                    <Button type="submit">Crear Usuario</Button>
                    </div>

                  </Form>
                </div>
              </div>
            </div>
          </Container>
        </Layout>
    );
  }
  