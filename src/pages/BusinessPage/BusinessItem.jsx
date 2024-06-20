// BusinessItem.jsx

import React from "react";
import "../../styles/business.css";
import BusinessWeb from "./BusinessWeb";

function BusinessItem({ company }) {
    return (
        <div className="bcard-item-container">
            <div className="bcard-item-parent">
                <div className="bcard-item-child">
                    <div className="img-border">
                        <img src="./images/recycle.png" alt="accepted-recycle-waste-icon" />
                    </div>
                    <p>Accepted Waste</p>
                    <ul>
                        {company.itemAccepted.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="bcard-item-child">
                    <div className="img-border">
                        <img src="./images/generous.png" alt="price-rate-offering" />
                    </div>
                    <center><p>Price Rate</p></center>
                    <p>{company.priceRange}</p>
                </div>
            </div>
            <BusinessWeb company={company} />
        </div>
    );
}

export default BusinessItem;
