import Iframe from "react-iframe"
import { Layout } from "../Layouts/layout"
export const Contact = () => {
  return (
<Layout>
      <h1 className="m-4 p-2">CONTACTO</h1>
      <div>
      <p className="text-center">
      Nuestro restaurante y bar están ubicados en el corazón de San Miguel de Tucuman. <br/>
      Póngase cómodo en nuestro salón rústico, nuestro jardín de invierno, tome una copa en nuestro acogedor bar de cócteles o disfrute de su comida en nuestro gran jardín.<br/>
       Ofrecemos el lugar adecuado y el ambiente adecuado para dejar atrás la rutina diaria y disfrutar de la vida junto a sus amigos y familiares.<br/>

      Reserve una mesa para usted y sus seres queridos y permítanos llevarlo a un viaje culinario. <br/>
       Solo llámenos durante nuestro horario de atención. Nos encontrará en el siguiente número de teléfono:<br/>

      Puede comunicarse con nosotros en:<br/>
      <p className="fs-3 m-4">
      +54 9 3815698835
      </p>
      </p>
      <div className="d-flex justify-content-center mb-3">
      <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1178822198626!2d-65.20965262460658!3d-26.836202676692963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0e8d0271b7%3A0x7946062ac490db30!2sGral.%20Paz%20576%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1685113927102!5m2!1ses!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></Iframe>
      <div className="mx-5">
        <h2>Dirección</h2>
        <p> DEV fOOD <br/>
          General paz 576 <br/>
          San Miguel de Tucuman <br/>
          <br/>
          tel:3815698835 <br/>
          e-mail:devfood@gmail.com </p>
      </div>
      </div>
      </div>
      </Layout>
 
  )
}
