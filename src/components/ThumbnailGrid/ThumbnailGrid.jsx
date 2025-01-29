import './ThumbnailGrid.scss'
import Thumbnail from '../Thumbnail/Thumbnail'
import logements from "../../data/logements.json" 

function ThumbnailGrid(){
    
    return <>
        <div className='thumbnailGrid'>
            {logements.map((images) => (
                <Thumbnail key={images.id} imgUrl={images.cover} title={images.title} logementId={images.id}/>
            ))}
        </div>
    </>

}

export default ThumbnailGrid