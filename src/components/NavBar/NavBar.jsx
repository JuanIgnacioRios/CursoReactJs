import CartWidget from "../CartWidget/CartWidget"
import { Link, useParams } from "react-router-dom"

import './NavBar.css'

const NavBar = () => {
    return(
        <nav>
            <div className="nav-container">
                <div className="nav-brand">
                    <Link to='/'><h1>Elite Clothing</h1></Link>
                </div>
                <div className="nav-menu">
                    <ul>
                        <li><a href="#">Nosotros</a></li>
                        <li><Link to="categorias/tops" className={ ({isActive})=> isActive ? 'ActiveNavCat': 'NotActiveNavCat'}>Tops</Link></li>
                        <li><Link to="categorias/corsets" className={ ({isActive})=> isActive ? 'ActiveNavCat': 'NotActiveNavCat'}>Corsets</Link></li>
                        <li><Link to="categorias/sets" className={ ({isActive})=> isActive ? 'ActiveNavCat': 'NotActiveNavCat'}>Conjuntos</Link></li>
                        <li><a href="#">Locales</a></li>
                        <li><CartWidget /></li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default NavBar