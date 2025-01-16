import { useState } from 'react'
import './carroussel.scss'

function Carroussel({imgURL}){
    const [number, setNumber]= useState(0)
    const max = imgURL.length-1
    return(
    <>
    <div className="carroussel">
        <div className='carrousselControl'>
            <button onClick={() => setNumber(number > 0 ? number -1 : max)}><i className="fa-solid fa-angle-left" ></i></button>
            <button onClick={() => setNumber(number < max  ? number +1 : 0)}><i className="fa-solid fa-angle-right"></i></button>
            <p>{number+1}/{max+1}</p>
        </div>        
        <img src={imgURL[number]} alt="" />
    </div>
    </>
    ) 
    
}
export default Carroussel