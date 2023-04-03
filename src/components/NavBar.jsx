import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <nav>
            <div className="nav-img">
                <img src="" alt="Logo" />
            </div>
            <div className="nav-menu">
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar