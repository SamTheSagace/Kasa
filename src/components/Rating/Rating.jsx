import './Rating.scss'

function Rating({rate}){
    const range = [1, 2, 3, 4 ,5]
    console.log(rate)
    return(
        <div className="rates">          
            {range.map((rangeStar) => rate >= rangeStar ? <span key={rangeStar.toString()}><i className="fa-solid fa-star" id='rate'></i></span> :  <span key={rangeStar.toString()}><i className="fa-solid fa-star" id='base'></i></span>
            )}
        </div>
    )
}
export default Rating
