import './Dropdown.scss'
import { useState } from 'react';



function Dropdown({titre, text, list}){
    const [isRevealed, setIsRevealed] = useState(true);
    return(
        <>
        <div className='dropdown'>
            <div className='dropdownTitle' onClick={() => setIsRevealed((prev) => !prev)}>
                <h2>{titre}</h2>
                <i id={isRevealed ? "hidden" : "reveal" } className="fa-solid fa-angle-up "></i>
            </div>
            {text && <div className={isRevealed ?  "hidden" : "reveal"}><p>{text}</p></div>}
            {list && <div className={isRevealed ?  "hidden" : "reveal"}>{list.map((list)=>(
                <p {...(isRevealed && { className: "revealed" })}key={list}>{list}<br/></p>
                ))}</div>}  
        </div>
        </>
        
    )
}
export default Dropdown
