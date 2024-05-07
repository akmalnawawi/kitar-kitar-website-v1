import React from 'react';
import "../../styles/components.css";

function Service2(props) {
    return (
        <div className="container">
            <div className="description-container">
                <h3>{props.heading}</h3>
                <p className="description">
                {props.description}
                </p>
            </div>
            <div className="image-container">
                <img src={props.image} alt="Description" className="image" />
            </div>
        </div>
    );

}

export default Service2;