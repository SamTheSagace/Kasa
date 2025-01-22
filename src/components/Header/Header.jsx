import './header.scss'
import { NavLink } from "react-router";
import Logo from "../../assets/LOGO.png"


function Header(){
    return <div className='header'>
        <NavLink to="/" className='logo'><img src={Logo} alt="logo" />
        </NavLink>
        <div className='headerPages'>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                <h3>Accueil</h3>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                <h3>À propos</h3>
            </NavLink>
        </div>
        
    </div>
}
export default Header