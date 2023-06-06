
import {Header} from './../components/Header';
import {Footer} from '../components/Footer';




export const Layout = ({ children}) => {
  return (
    <>
    <Header />

    <div className=' gap-2   justify-content-xl-between '>{children}</div>
      <Footer />
  
    </>
  );
};
