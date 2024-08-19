import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.png"; 

const NavBar = () => {
    return (
        <nav>
            <div><img src={logo} alt="Logo" /></div>
            <div>
                <button>Servicios para empresas</button>
                <button>Servicios para particulares</button>
                <button>Otros servicios</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;