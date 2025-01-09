import './Dropdown.scss'
import { useState } from 'react';



function Dropdown({titre, text, list}){
    const [isRevealed, setIsRevealed] = useState(true);
    return(
        <>
        <div className='dropdown'>
            <div className='dropdownTitle' onClick={() => setIsRevealed((prev) => !prev)}>
                <h1>{titre}</h1>
                <i className={isRevealed ?  "fa-solid fa-angle-down" : "fa-solid fa-angle-up"}></i>
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
