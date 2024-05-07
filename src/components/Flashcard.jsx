// Flashcard.jsx
import React from "react";
import FlashcardItem from "./FlashcardItem";

function Flashcard() {
    
    const flashcards = [
        { id: 1, imageSrc: "", altText: "eWaste_pollution_image", title: "Do you like to read about e-Waste pollution", interest: "ewaste" },
        { id: 2, imageSrc: "", altText: "plastics_waste_effects", title: "Do you like to read about plastics waste", interest: "plastics" },
        { id: 3, imageSrc: "", altText: "improper_paper_management", title: "Do you like to read about papers waste", interest: "papers" },
        { id: 4, imageSrc: "", altText: "beneftis_of_recycling", title: "Do you like to know about recycling awareness", interest: "plastics" },
    ];

    return (
        <>
            <center><h2>Let's Try Our Recommendation System</h2></center>
            <div className="flashcard-container">
                {flashcards.map(card => (
                    <FlashcardItem 
                        key={card.id}
                        imageSrc={card.imageSrc}
                        altText={card.altText}
                        title={card.title}
                        interest={card.interest}
                    />
                ))}
            </div>
        </>
        
    );
}

export default Flashcard;
