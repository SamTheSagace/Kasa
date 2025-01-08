import "./Banner.scss"


function Banner({text, imgUrl}){
    return<>
    
    <div className="banner">
        {text && <div className="textWrap"><p>{text}</p></div>}
        <img src={imgUrl} alt="" />
    </div>
    </>
}

export default Banner