import { NavLink } from 'react-router'
import './Thumbnail.scss'

function Thumbnail({imgUrl, title, logementId}){
    return (
    <NavLink to={`/logements/${logementId}`}> 
        <div className='imgThumbnail'>
            <img src={imgUrl} alt="" />
            <div className='gradient'></div>
            <p>{title}</p>
        </div>
    </NavLink>
    )
    
    
}

export default Thumbnail
