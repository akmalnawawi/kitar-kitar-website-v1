import React, { useState } from "react";
import ReadingCard from "./ReadingCard";
import Footer from "../MainPage/Footer";
import InterestBtn from "../../components/InterestBtn";
import { recommendContent } from "./Cbf";

function ReadingPage() {
    const [recommendedContent, setRecommendedContent] = useState([]);

    const handleSearch = (interest) => {
        const recommendations = recommendContent([interest]);
        const timestamp = new Date().getTime(); // Unique identifier
        const updatedRecommendations = recommendations.map(item => ({
            ...item,
            uniqueId: timestamp + Math.random().toString(36).substr(2, 9) // Combine timestamp and random string
        }));
        setRecommendedContent(updatedRecommendations);
    };

    return (
        <div className="read-parent">
            <center>
                <h1>Explore the path to a sustainable world, one step at a time</h1>
            </center>
            <InterestBtn onSearch={handleSearch} />
            <ReadingCard recommendedContent={recommendedContent} />
            <Footer />
        </div>
    );
}

export default ReadingPage;
