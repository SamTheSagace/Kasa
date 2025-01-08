import Logements from "../../data/logements.json"
import Header from "../../components/Header/Header"
import Carroussel from "../../components/Carroussel/Carroussel";
import Footer from "../../components/Footer/Footer"
import Rating from "../../components/Rating/Rating";
import Tags from "../../components/Tags/Tags";
import './Logement.scss'
import { useParams } from "react-router";


function Logement() {
  const {id} = useParams()
  const logement = Logements.find((item) => item.id === id);
  console.log(id)

  return(
  <>
  <Header />
  <div className="body">
    <Carroussel imgURL={logement.pictures}/>
    <div className="title-host"> 
      <div className="title">
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
      </div>
      <div className="host">
        <p>{logement.host.name}</p>
        <div className="imgHost">
        <img src={logement.host.picture} alt={logement.host.name} /></div>
      </div>
    </div>
    <div className="tags-rates">
      <Tags Tags={logement.tags}/>
      <Rating rate={logement.rating} />
    </div>
    <div className="details"></div>
  </div>
  <Footer />
  </>  
  )
}

export default Logement;