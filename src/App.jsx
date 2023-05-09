import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./page/Home";
import { About } from "./page/About";
import { Error } from "./page/Error";
import { DetailProduct } from "./page/DetailProduct";
import { Login } from "./page/Login";
import { Register } from "./page/Register";
import { Contact } from "./page/Contact";
import  'bootstrap/dist/css/bootstrap.min.css' ;



function App() {


  return (
    <BrowserRouter>
      <Routes>
        {/* "index" es los mismo que hacer path="/" */}
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/products/detail/:idProduct" element={<DetailProduct />} />

        <Route path="/Error" element={<Error />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
