import Logements from "../../data/logements.json"
import Header from "../../components/Header/Header"
import Carroussel from "../../components/Carroussel/Carroussel";
import Footer from "../../components/Footer/Footer"
import Rating from "../../components/Rating/Rating";
import Tags from "../../components/Tags/Tags";
import Dropdown from "../../components/Dropdown/Dropdown";
import './Logement.scss'
import { useParams } from "react-router";
import Error404 from "../Error404/Error404";



function Logement() {
  const {id} = useParams()
  const logement = Logements.find((item) => item.id === id);
  if(!logement){
    return(
      <Error404 />
    )
  }
  // console.log(id)

  return(
  <>

  <div className="body">
  <Header />
    <Carroussel imgURL={logement.pictures}/>
    <div className="cardInfos">
      <div className="title-tag"> 
        <div className="title">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
        </div>
        <Tags Tags={logement.tags}/>
      </div>
      <div className="host-rates">
        <div className="host">
          <p dangerouslySetInnerHTML={{__html:logement.host.name.replace(" ", "<br/>")}}></p>
          <div className="imgHost">
          <img src={logement.host.picture} alt={logement.host.name} /></div>
        </div>
        <Rating rate={logement.rating} />
      </div>
    </div>
      <div className="dropdowns">  
        <Dropdown titre="Description" text={logement.description} />
        <Dropdown titre="Équipement" list={logement.equipments}/>    
      </div>
    
  </div>
  <Footer />
  </>  
  )
}

export default Logement;