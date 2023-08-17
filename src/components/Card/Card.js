import React from 'react';
import './Card.css'

function Card(props) {
    return (
        <div className="square-space">
            <div className="square">
                <img src={props.characterData.image} className="card-imagine" alt="" />ù
            
                <div className="card-text">
                    <br></br>
                    <span className="script">{props.characterData.name}</span>
                    <div>
                        <span className="script"> {props.characterData.status}</span>
                    </div>
                    <br></br>
                    <span className="secondary-script">last known location:</span>
                    <span className="script">{props.characterData.location.name}</span>
                    <br></br>
                    <span className="secondary-script">first seen in:</span>
                    <span className="script">{props.characterData.status}</span>
                </div>
            </div>
        </div>
    );
}
export default Card;