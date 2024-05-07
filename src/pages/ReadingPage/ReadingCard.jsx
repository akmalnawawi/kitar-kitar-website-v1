import React from "react";
import RcardItem from "./RcardItem";
import { recommendedContent } from "../../Cbf";

function ReadingCard() {
  return (
    <>
      <div className="flashcard-row">
        {recommendedContent.map((item, index) => (
          <RcardItem key={index} item={item} />
        ))}
      </div>
    </>
  );
}

export default ReadingCard;