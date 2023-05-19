import CartWidget from "../CartWidget/CartWidget"
import { Link, useParams } from "react-router-dom"

import './NavBar.css'

const NavBar = () => {
    return(
        <nav>
            <div className="nav-container">
                <div className="nav-brand">
                    <Link className="nav-brand-title" to='/'><h1>Elite Clothing</h1></Link>
                </div>
                <div className="nav-menu">
                    <ul>
                        <li><Link to="categorias/tops">Tops</Link></li>
                        <li><Link to="categorias/corsets">Corsets</Link></li>
                        <li><Link to="categorias/sets">Conjuntos</Link></li>
                        <li><Link to="/cart"><CartWidget /></Link></li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default NavBar