import './header.scss'
import { NavLink } from "react-router";
import Logo from "../../assets/LOGO.png"


function Header(){
    return <div className='header'>
        <NavLink to="/" className='logo'><img src={Logo} alt="logo" />
        </NavLink>
        <div className='headerPages'>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                <p>Acceuil</p>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                <p>À propos</p>
            </NavLink>
        </div>
        
    </div>
}
export default Header