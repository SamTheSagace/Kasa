import './carroussel.scss'

function Carroussel({imgURL}){
    return(
    <>
    <div className="carroussel">
        <img src={imgURL[0]} alt="" />
        {/* {imgURl.map((images) => (
            <img key={images} src={images} alt="" />
        ))} */}
    </div>
    </>
    ) 
    
}
export default Carroussel