import react from "react";

export default function Cand(props){
    return(
        <div className="item">
            <img src={props.item.imageUrl}/>
            <div className="description">
                <span><p>{props.item.location}</p>
                <a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a></span>
                <h1>{props.item.title}</h1>
                <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}