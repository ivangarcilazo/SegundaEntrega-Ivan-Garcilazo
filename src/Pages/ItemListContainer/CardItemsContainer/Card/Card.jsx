import './Card.css'
export default function Card(props){
    const{ children }=props

    return(
        <div className="Card">{children}</div>
    )
    
}