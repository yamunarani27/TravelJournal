import React from 'react';
import '../component.css';


export default function TravelComponent(props){
    console.log(props)
return(
    <div className="Main">
        <div className="card mb-3" style={{ width: 1100 }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.item.imageUrl} className="img-fluid rounded-start" alt="nature" style={{ width:320,height:200 }}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5>{props.item.location}</h5>
                        <a href={props.item.googleMapUrl}>View on google maps</a>
                        <h4 className="card-title">{props.item.title}</h4>
                        <p className="card-text">{props.item.description}</p>
                        <p className="card-text"><small className="text-muted">{props.item.startDate}-{props.item.endDate}</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}
//src={require(`../assests/${props.item.imageUrl}`)