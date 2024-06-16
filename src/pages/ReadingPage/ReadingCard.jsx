import React from "react";
import Readcard from "./Readcard";

function ReadingCard({ recommendedContent }) {
    return (
        <div className="read-sub">
            {recommendedContent.map((item, index) => (
                <Readcard key={index} item={item} />
            ))}
        </div>
    );
}

export default ReadingCard;
