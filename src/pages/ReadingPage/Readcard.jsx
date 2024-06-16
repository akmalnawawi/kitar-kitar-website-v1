import React from "react";
import "../../styles/reading.css";

function Readcard(props) {
    const { title, description, uniqueId, score } = props.item; // Destructure uniqueId
    const imgURL = `https://picsum.photos/400/300?random=${uniqueId}`; // Use uniqueId

    return (
        <div className="rcard-container">
            <img src={imgURL} alt="random-img" className="rcard-img" />
            <h2 className="rcard-title-">{title}</h2>
            <p className="rcard-desc">{description}</p>
            <p className="rcard-desc">{score}</p>
            <a href="http://google.com" className="rcard-btn">Learn More</a>
        </div>
    );
}

export default Readcard;
