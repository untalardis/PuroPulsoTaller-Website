import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>    
        <p>&copy; 2024 Puro Pulso. Todos los derechos reservados.</p>
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/contacto">Contacto</Link>
        </nav>
        </footer>
    );    
}
export default Footer;