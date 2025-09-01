import "../css/NavBar.css";
import logo from "../assets/logo.png"; // Importa el logo
import CartWidget from "./CartWidget.jsx";

const NavBar = () => {
    return (
        <nav className="nav-container">
            <img src={logo} alt="Logo" style={{ height: "40px", marginRight: "1rem" }} />
            <a className="anchor-nav" href="#home">Home</a>
            <a className="anchor-nav" href="#about">About</a>
            <a className="anchor-nav" href="#contact">Contact</a>
            <CartWidget />
        </nav>
    )
}

export default NavBar;