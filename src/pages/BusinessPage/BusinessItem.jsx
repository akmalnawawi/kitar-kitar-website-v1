import React from "react";
import "../../styles/business.css";
import BusinessWeb from "./BusinessWeb";

function BusinessItem () {

    return (
        <div className="bcard-item-container">
            <div className="bcard-item-parent">
                <div className="bcard-item-child">
                    <div className="img-border">
                        <img src="./images/recycle.png" alt="accepted-recyc;e-waste-icon" />
                    </div>
                    <p>Accepted Waste</p>
                    <ul>
                        <li>E-waste</li>
                        <li>E-waste</li>
                        <li>E-waste</li>
                    </ul>
                </div>
                <div className="bcard-item-child">
                    <div className="img-border">
                        <img src="./images/generous.png" alt="price-rate-offering" />
                    </div>
                    <center><p>Price Rate</p></center>
                </div>
            </div>
            <BusinessWeb />
        </div>
        
    );
}

export default BusinessItem;
