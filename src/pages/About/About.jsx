import Header from "../../components/Header/Header"
import Banner from "../../components/Banner/Banner"
import Footer from "../../components/Footer/Footer"
import Dropdown from "../../components/Dropdown/Dropdown"
import './About.scss'

function About(){
    return (
        <>    
        <Header />
        <div className="body">
            <Banner text="" imgUrl="https://s3-alpha-sig.figma.com/img/56fa/e17e/b9995860bb6384a77ca7dc9bf52da3be?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZY7xW7k3PJ749bALxdNAsLCMnxkA~KY58tdIJekhxRGCwpzt9CD01UQ6i3ybn6tsJqWJ~O2bSht40bAinmoueM2pprKkO56lb3ykP2lSVrnuEEOxceiioIGReTgy96~6T61-B1aWlLvi9ryZDvvO42Q8U42GCMYJQemB0zXZ76Ow06t-RRNQR2mIcO6QjVFCIeS~AkaHr7qqqKVHqZwi7~Pb480v9Yfu-Rzsz-uF1mEoilfqLTdpJQsGjsQGDJ6Qw700eyFFtVQ4HC2r9eWeOFfs4xTID3wm-ok5lzXjbu1WcR~gnw1bY9K42UTbpgr-XF5W-zggI88WAfIYoyHzrw__"/>
            <Dropdown titre="Fiabilité" texte="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
            <Dropdown titre="Respect" texte="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
            <Dropdown titre="Service" texte="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."/>
            <Dropdown titre="Sécurité" texte="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
        </div>          
        <Footer />
    </>
    )
}

export default About