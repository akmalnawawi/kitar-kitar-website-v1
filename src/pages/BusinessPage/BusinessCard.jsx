// BusinessCard.jsx

import React from "react";
import "../../styles/business.css";
import BusinessItem from "./BusinessItem";

function BusinessCard({ companies }) {
    return (
        <div className="bcard-container">
            {companies.map((company, index) => (
                <BusinessItem key={index} company={company} />
            ))}
        </div>
    );
}

export default BusinessCard;
