
import {Header} from './../components/Header';
import {Footer} from '../components/Footer';




export const Layout = ({ children}) => {
  return (
    <div className=" d-flex flex-column justify-content-between vh-100">
    <Header/>
    <div className='gap-2 justify-content-xl-between' style={{flexGrow: 1}}>{children}</div>
      <Footer />
  
    </div>
  );
};
