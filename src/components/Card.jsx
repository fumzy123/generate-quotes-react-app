import '../css/Card.css'
export default function Card({quote, author, ...props}){
    return(
        <div className='card' {...props}>
            <h2>"{quote}"</h2>
            <p className='author'>~ {author}</p>
        </div>
    )
}
