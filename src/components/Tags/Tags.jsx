import './Tags.scss'

function Tags({Tags}){
    return(
        <div className="tags">
            {Tags.map((name) => (
                <div className='tag' key={name}>{name}</div>
            ))}
        </div>  
    )
}
export default Tags