import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <div><img src="src\assets\Logo_audaz_verde_bendito__circular.png" alt="Logo" /></div>
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