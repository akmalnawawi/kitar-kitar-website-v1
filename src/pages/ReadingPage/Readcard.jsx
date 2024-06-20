import React from "react";
import "../../styles/reading.css";

function Readcard(props) {
    const { title, description, uniqueId} = props.item; // Destructure uniqueId
    const imgURL = `https://picsum.photos/400/300?random=${uniqueId}`; // Use uniqueId

    return (
        <div className="rcard-container">
            <img src={imgURL} alt="random-img" className="rcard-img" />
            <h2 className="rcard-title-">{title}</h2>
            <p className="rcard-desc">{description}</p>
        </div>
    );
}

export default Readcard;
