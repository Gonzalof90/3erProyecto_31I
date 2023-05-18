
import {Header} from './../components/Header';



export const Layout = ({ children}) => {
  return (
    <>
    <Header />

    <div>{children}</div>
      <footer>
        este es el footer
      </footer>
    </>
  );
};
