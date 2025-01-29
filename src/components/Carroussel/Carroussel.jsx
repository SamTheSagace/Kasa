import { useState } from 'react'
import './carroussel.scss'

function Carroussel({imgURL}){
    const [number, setNumber]= useState(0)
    const max = imgURL.length-1
    return(
    <>
    
    <div className="carroussel">
        {imgURL.length > 1 ? <div className='carrousselControl'>
            <button onClick={() => setNumber(number > 0 ? number -1 : max)}><i className="fa-solid fa-angle-left" ></i></button>
            <div className='numbers'>
                <p>{number+1}/{max+1}</p>   
            </div>
            <button onClick={() => setNumber(number < max  ? number +1 : 0)}><i className="fa-solid fa-angle-right"></i></button>
            
        </div>  : ''}              
        <img src={imgURL[number]} alt="" />
    </div>
    </>
    ) 
    
}
export default Carroussel