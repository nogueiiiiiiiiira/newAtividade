import style from "./Card.module.css"

export default function Card(props){
    return(
        <div className={style.card}>
            <img src={props.imgSrc} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
    )
}