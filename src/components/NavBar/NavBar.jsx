import CartWidget from "../CartWidget/CartWidget"

import './NavBar.css'

const NavBar = () => {
    return(
        <nav>
            <div className="nav-container">
                <div className="nav-brand">
                    <h1>Tech Market Place</h1>
                </div>
                <div className="nav-menu">
                    <ul>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Categorias</a></li>
                        <li><a href="#">Locales</a></li>
                        <li><CartWidget /></li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default NavBar