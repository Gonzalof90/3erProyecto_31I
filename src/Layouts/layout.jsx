import {Link} from "react-router-dom";

export const Layout = ({children}) => {
  return (
    <>
    <header>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>

            <li><Link to="/contact">Contact</Link></li>

        </ul>
    </header>

    <div>{children}</div>

    <footer>
        <p>-----FOOTER____________Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam soluta consequatur natus, ea aliquam a ut accusamus delectus corporis id temporibus deserunt sed iure repudiandae blanditiis reprehenderit, architecto modi alias?</p>
    </footer>
    </>
  );
};
