import "./Banner.scss"


function Banner({text, imgUrl}){
    return<>
    
    <div className="banner">
        {text && <div className="textWrap"><h1>{text}</h1></div>}
        <img src={imgUrl} alt="" />
    </div>
    </>
}

export default Banner