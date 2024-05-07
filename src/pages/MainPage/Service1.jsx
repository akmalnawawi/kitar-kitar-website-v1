import React from 'react';
import "../../styles/components.css";

function Service1(props) {
    return (
        <>
            <h2 className="header">Services Provided</h2>
            <div className="container">
                <div className="image-container">
                    <img src={props.image} alt="Description" className="image" />
                </div>
                <div className="description-container">
                    <h3>{props.heading}</h3>
                    <p className="description">
                    {props.description}
                    </p>
                </div>
            </div> 
        </>
        
    );

}

export default Service1;