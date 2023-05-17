import {Header} from '../components/Header';


export const Layout = ({ children }) => {
  return (
    <>
    <Header />

    <div>{children}</div>

    <footer>
        <p>-----FOOTER____________Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam soluta consequatur natus, ea aliquam a ut accusamus delectus corporis id temporibus deserunt sed iure repudiandae blanditiis reprehenderit, architecto modi alias?</p>
    </footer>
    </>
  );
};
