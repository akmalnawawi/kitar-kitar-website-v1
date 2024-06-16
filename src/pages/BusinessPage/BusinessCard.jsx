import React from "react";
import "../../styles/business.css";
import BusinessItem from "./BusinessItem";

function BusinessCard () {

    return (
        <div className="bcard-container">
            <BusinessItem />
            <BusinessItem />
            <BusinessItem />
            <BusinessItem />
            <BusinessItem />
            <BusinessItem />
            <BusinessItem />
            <BusinessItem />

        </div>
    );
}

export default BusinessCard;