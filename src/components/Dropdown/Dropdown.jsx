import './Dropdown.scss'
import { useState } from 'react';



function Dropdown({titre, texte}){
    const [isRevealed, setIsRevealed] = useState(false);
    return(
        <>
        <div className='dropdown'>
            <div className='dropdownTitle' onClick={() => setIsRevealed((prev) => !prev)}>
                <h1>{titre}</h1>
                <i className="fa-solid fa-angle-up"></i>
            </div>
            <p {...(isRevealed && { className: "revealed" })}>{texte}</p>   
        </div>
        </>
        
    )
}
export default Dropdown
