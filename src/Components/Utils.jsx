import { NavLink } from "react-router-dom";
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';

const Navbar = () => {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom border-warning border-3  ">

            <div className="container-fluid">

                <NavLink className="navbar-brand fs-2 text-warning ms-3" to="/">Navbar</NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarNav">

                    <ul className="navbar-nav ms-auto me-5 fs-4 ">

                        <li className="nav-item mx-4">
                            <NavLink exact activeClassName='text-warning ' className="nav-link " to="/">Home</NavLink>
                        </li>

                        <li className="nav-item mx-4">
                            <NavLink exact activeClassName='text-warning ' className="nav-link" to="/services">Servcices</NavLink>
                        </li>

                        <li className="nav-item mx-4">
                            <NavLink exact activeClassName='text-warning ' className="nav-link" to="/about">About</NavLink>
                        </li>

                        <li className="nav-item mx-4">
                            <NavLink exact activeClassName='text-warning ' className="nav-link" to="/contact">Contact</NavLink>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>

    );
}


const Footer = () => {

    return (
        
        <footer className='text-center border-top border-muted border-2  mx-auto py-3 mt-5 bg-dark text-warning' >

            <span className=''> CopyRight 2021 © Created By Mian Muhammad Ishaq | <NavLink to='/terms'>Terms & Conditions</NavLink>  </span>        

        </footer>
    
    );
}


export { Navbar, Footer };