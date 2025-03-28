import Header from "../../components/Header/Header"
import { NavLink } from "react-router";
import Footer from "../../components/Footer/Footer"
import './Error404.scss'

function Error404(){
    return (
        <>    
        <div className="body">
            <Header />
                <div className="errorBody"><h1 className="errorTitle">404</h1>
                <h2 className="errorSubTitle">Oups! La page que vous demandez n'existe pas.</h2>
                
                
                <NavLink to="/" className="active">
                        <p>Retourner sur la page d’accueil</p>
                </NavLink>
            </div>
            <Footer />
        </div>
    </>
    )
}

export default Error404