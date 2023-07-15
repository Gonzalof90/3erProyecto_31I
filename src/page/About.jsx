import { Card, ListGroup } from "react-bootstrap";
import { Layout } from "../Layouts/layout"
import nosotros8 from "../assets/imagenes/nosotros/nosotros8.jpg"
import nosotros1 from "../assets/imagenes/nosotros/nosotros1.jpg"
import nosotros2 from "../assets/imagenes/nosotros/nosotros2.jpg"
import nosotros5 from "../assets/imagenes/nosotros/nosotros5.jpg"
import nosotros3 from "../assets/imagenes/nosotros/nosotros3.jpg"
import nosotros4 from "../assets/imagenes/nosotros/nosotros4.jpg"
import nosotros6 from "../assets/imagenes/nosotros/nosotros6.jpg"
import nosotros7 from "../assets/imagenes/nosotros/nosotros7.jpg"
import { Github, Whatsapp } from "react-bootstrap-icons";






export const About = () => {
  return (
    <Layout>
    <h1 className="m-4 p-2" >SOBRE NOSOTROS</h1>
    <div className="d-flex flex-column justify-content-center ">
    <div>

    <p className="m-4 p-2 " >Bienvenido a Dev Food, la plataforma líder en entrega de comidas rápidas. Nos enorgullece ofrecerte una experiencia gastronómica deliciosa y conveniente, brindándote acceso a una amplia variedad de platos preparados con ingredientes frescos y de alta calidad. <br/>

En Dev Food, nuestra misión es satisfacer tus antojos y ofrecerte un servicio rápido y eficiente para que disfrutes de tus comidas favoritas sin tener que salir de casa. Estamos aquí para simplificar tu vida ocupada y llevar la comida que más te gusta directamente a tu puerta. <br/>

¿Por qué elegir Dev Food? Aquí tienes algunas razones: <br/>

Variedad: Nuestra aplicación cuenta con una amplia selección de restaurantes y establecimientos de comida rápida asociados. Desde hamburguesas jugosas hasta sushi fresco, y desde tacos picantes hasta pizzas con los ingredientes más deliciosos, tenemos algo para satisfacer todos los antojos. <br/>

Rapidez y Conveniencia: Con Dev Food, puedes hacer tus pedidos de manera rápida y sencilla. Nuestra interfaz intuitiva te permite explorar los menús, personalizar tus platos y realizar pagos seguros en cuestión de minutos. Además, ofrecemos opciones de entrega rápida para que tus comidas lleguen caliente y en el momento preciso. <br/>

Calidad Garantizada: Trabajamos en estrecha colaboración con nuestros socios de restaurantes para asegurarnos de que cada plato que llegue a tu puerta cumpla con los más altos estándares de calidad. Nos preocupamos por tu satisfacción y nos esforzamos por ofrecerte una experiencia culinaria excepcional en cada entrega. <br/>

Opiniones y Calificaciones: Queremos que tomes decisiones informadas sobre tus pedidos. Nuestra aplicación te brinda acceso a reseñas y calificaciones detalladas de otros usuarios, lo que te permite conocer las opiniones de la comunidad y seleccionar los platos más populares y mejor valorados. <br/>

En Dev Food, estamos comprometidos con tu satisfacción y comodidad. Nos esforzamos por superar tus expectativas y asegurarnos de que cada experiencia culinaria sea excepcional. Únete a nuestra comunidad de amantes de la comida y descubre una forma más fácil y sabrosa de satisfacer tus antojos. <br/>

¡Descarga la aplicación Dev Food hoy mismo y comienza a disfrutar de una experiencia gastronómica rápida, deliciosa y sin complicaciones!</p>
    </div>
    <div className="d-flex justify-content-center flex-wrap gap-3 m-4 " >
    
    <div> 
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src={nosotros2} />
      <Card.Body>
        <Card.Title>Eze Corbalan</Card.Title>
        <Card.Text>
          Full-stack Developer
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>"No hay amor más sincero que el amor por la comida"</ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex justify-content-around">
        <Card.Link href="#"><Whatsapp color="#803530" size={30}/></Card.Link>
        <Card.Link href="#"><Github color="#803530" size={30}/></Card.Link>
      </Card.Body>
    </Card>
    </div>
    
    <div> 
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src={nosotros1} />
      <Card.Body>
        <Card.Title>Maria Huerta</Card.Title>
        <Card.Text>
          Full-stack Developer
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>"La comida bien hecha es la base de la verdadera felicidad"</ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex justify-content-around">
        <Card.Link href="#"><Whatsapp color="#803530" size={30}/></Card.Link>
        <Card.Link href="#"><Github color="#803530" size={30}/></Card.Link>
      </Card.Body>
    </Card>
    </div>
    
    <div> 
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src={nosotros3} />
      <Card.Body>
        <Card.Title>Walter Tallia</Card.Title>
        <Card.Text>
          Full-stack Developer
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>“Comer ajo y vino no es desatino”</ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex justify-content-around">
        <Card.Link href="#"><Whatsapp color="#803530" size={30}/></Card.Link>
        <Card.Link href="#"><Github color="#803530" size={30}/></Card.Link>
      </Card.Body>
    </Card>
    </div>
    
    <div> 
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src={nosotros4} />
      <Card.Body>
        <Card.Title>Claudio Galvan</Card.Title>
        <Card.Text>
          Full-stack Developer
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>“Come poco y cena temprano si quieres llegar a anciano”</ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex justify-content-around">
        <Card.Link href="#"><Whatsapp color="#803530" size={30}/></Card.Link>
        <Card.Link href="#"><Github color="#803530" size={30}/></Card.Link>
      </Card.Body>
    </Card>
    </div>
    
    <div> 
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src={nosotros6} />
      <Card.Body>
        <Card.Title>Juan Holgado</Card.Title>
        <Card.Text>
          Full-stack Developer
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>"La comida es nuestra manera de compartir y celebrar la vida"</ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex justify-content-around">
        <Card.Link href="#"><Whatsapp color="#803530" size={30}/></Card.Link>
        <Card.Link href="#"><Github color="#803530" size={30}/></Card.Link>
      </Card.Body>
    </Card>
    </div>
    <div> 
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src={nosotros5} />
      <Card.Body>
        <Card.Title>Gonzalo Flores</Card.Title>
        <Card.Text>
          Full-stack Developer
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>“Come a gusto y placentero y que ayune tu heredero”</ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex justify-content-around">
        <Card.Link href="#"><Whatsapp color="#803530" size={30}/></Card.Link>
        <Card.Link href="#"><Github color="#803530" size={30}/></Card.Link>
      </Card.Body>
    </Card>
    </div>
    <div> 
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src={nosotros7} />
      <Card.Body>
        <Card.Title>Rodrigo Singh</Card.Title>
        <Card.Text>
          Full-stack Developer
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>“A buen hambre, no hay pan duro”</ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex justify-content-around">
        <Card.Link href="#"><Whatsapp color="#803530" size={30}/></Card.Link>
        <Card.Link href="#"><Github color="#803530" size={30}/></Card.Link>
      </Card.Body>
    </Card>
    </div>
    
    <div> 
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src={nosotros8} />
      <Card.Body>
        <Card.Title>Fabricio Paz</Card.Title>
        <Card.Text>
          Full-stack Developer
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>"El secreto de la cocina está en el amor con el que se prepara"</ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex justify-content-around">
        <Card.Link href="#"><Whatsapp color="#803530" size={30}/></Card.Link>
        <Card.Link href="#"><Github color="#803530" size={30}/></Card.Link>
      </Card.Body>
    </Card>
    </div>
    
    </div>
    </div>
    </Layout>
   
  )
}
