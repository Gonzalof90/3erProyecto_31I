import { Layout } from "../Layouts/layout";
import { CarouselComponent } from "../components/Carousel.jsx";
import { SliderComponent } from "../components/Slider.jsx";
import pizza from "../assets/imagenes/Carrusel/pizza.jpg";



const product = 
  {
  id: 1,
  description:
    "Pizza",
  name: "Pizza Node",
  images: [{ url: pizza }],
};




export const Home = () => {
  return (
    <Layout>
      <CarouselComponent />
      <h2 className="text-center">Nuestros productos destacados</h2>
      <SliderComponent  product={product}/>
    </Layout>
  );
};
