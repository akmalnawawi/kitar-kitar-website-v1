import React from "react";

function RcardItem(props) {
  const { title, description, score } = props.item;

  return (
    <div className="flashcard">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Score: {score.toFixed(2)}</p>
    </div>
  );
}

export default RcardItem;