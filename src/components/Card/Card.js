import React from 'react';
import './card.css'

function Card(props) {
    return (
        <div className="square-space">
            <div className="square">
                <img src={props.characterData.image} className="card-imagine" alt="" />
                <div className="card-text">
                    <br />
                    <span className="script">{props.characterData.name}</span>
                    <div className="little-dot-script">
                        <i className="fa-solid fa-circle little-dot" style={{ color: 'green' }}></i>
                        <span className="script"> {props.characterData.status}</span>
                    </div>
                    <br />
                    <span className="secondary-script">last known location:</span>
                    <span className="script">{props.characterData.location.name}</span>
                    <br />
                    <span className="secondary-script">first seen in:</span>
                    <span className="script">{props.characterData.status}</span>
                </div>
            </div>
        </div>
    );
}
export default Card;