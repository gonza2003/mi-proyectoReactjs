import "../css/NavBar.css";
import logo from "../assets/logo 2.jpg";
import CartWidget from "./CartWidget.jsx";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="Logo" style={{ height: "40px", marginRight: "1rem", cursor: "pointer" }} />
                    Perfumes Importados
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-categorias">
                                Productos
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/productos/nuevos">Nuevos</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/productos/ofertas">Ofertas</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;