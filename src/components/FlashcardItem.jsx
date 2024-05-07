// FlashcardItem.jsx
import React from "react";
import LikeButton from "./LikeButton";

function FlashcardItem({ imageSrc, altText, title, interest }) {
    return (
        <div className="flashcard">
            <img src={imageSrc} alt={altText} />
            <h3>{title}</h3>
            <p></p>
            <LikeButton interest={interest} />
        </div>
    );
}

export default FlashcardItem;
