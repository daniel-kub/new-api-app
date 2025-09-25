import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav>
            <Link to="/emoji">Losowe emoji</Link> <br />
            <Link to="/menu">Menu</Link> <br />
            <Link to="/about">About</Link> <br />
        </nav>
    )
}