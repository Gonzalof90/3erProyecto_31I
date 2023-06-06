import { Layout } from "../Layouts/layout";
import { CarouselComponent } from "../components/Carousel.jsx";
import { SliderComponent } from "../components/Slider.jsx";
import { useEffect } from "react";
import { useState } from "react";
const HOST_SERVER = import.meta.env.VITE_HOST_SERVER;

export const Home = () => {
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
      <CarouselComponent />
      <h2 className="text-center">Nuestros productos destacados</h2>
      <SliderComponent products={products} />
    </Layout>
  );
};
