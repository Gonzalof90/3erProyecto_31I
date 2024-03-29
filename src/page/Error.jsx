/* eslint-disable no-irregular-whitespace */
import { Button, Image } from "react-bootstrap";
import { Layout } from "../Layouts/layout";
import pizzaEr from "../assets/imagenes/err/pizzaEr.png";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <Layout>
      <main className="d flex align-items-center">
      <div id="error" className="d-flex justify-content-around" style={{backgroundColor:'#FFB80B' }} >
        <div className="d-flex flex-column justify-content-center align-items-center col-7 mx-3">
          <h1> 🇪​🇷​🇷​🇴​🇷​ ₄₀₄</h1>
          <p>
            {" "}
            ¡Oops! Parece que has llegado a nuestra cocina secreta.
            Lamentablemente, el plato que buscas no se encuentra en nuestro
            menú. <br />
            Nuestro chef se ha esforzado por crear experiencias culinarias
            únicas, pero a veces los ingredientes pueden desaparecer
            misteriosamente.
            <br /> No te preocupes, estamos trabajando diligentemente para
            encontrarlos y restaurar ese delicioso plato en nuestro menú lo
            antes posible.
            <br />
            Mientras tanto, te invitamos a explorar nuestras otras opciones
            gastronómicas. Tenemos una amplia variedad de sabores y creaciones
            que seguramente satisfarán tu apetito. Nuestro personal estará
            encantado de recomendarte otros platos que seguramente te
            encantarán.{" "}
          </p>
          <Button as={Link} to="/Home" variant="danger" className="btn-sm">
            Volver al inicio
          </Button>
        </div>
        <div className="d-flex justify-content-center align-items-center col-4" >
          <Image src={pizzaEr} />
        </div>
      </div>
      </main>
    </Layout>
  );
};
