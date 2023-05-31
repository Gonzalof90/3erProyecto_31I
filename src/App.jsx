import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CheckPermission } from "./helpers/CheckPermission";
import { Home } from "./page/Home";
import { About } from "./page/About";
import { Error } from "./page/Error";
import { DetailProduct } from "./page/DetailProduct";
import { CreateProduct } from "./page/CreateProduct";
import { Login } from "./page/Login";
import { Register } from "./page/Register";
import { Contact } from "./page/Contact";
import  'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css" ; 
import "slick-carousel/slick/slick-theme.css" ;
import { useContext } from "react";
import { UserContext } from "./contexts/userContext";
import { UpdateProduct } from "./page/UpdateProduct";









function App() {
  const { user } = useContext(UserContext);
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


        <Route
          path="/products/create"
          element={
            // <CheckPermission hasPermission={user._id && user.rol === "ADMIN"}>
              <CreateProduct />
            // </CheckPermission>
          }
        />
 <Route
          path="/products/update/:idProduct"
          element={
            // <CheckPermission hasPermission={user._id && user.rol === "ADMIN"}>
              <UpdateProduct />
            // </CheckPermission>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
