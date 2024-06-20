// BusinessWeb.jsx

import React from "react";
import "../../styles/business.css";

function BusinessWeb({ company }) {
    return (
        <div className="bcard-web">
            <center>
                <p>{company.companyName}</p>
                <button onClick={() => window.open(company.companyWebsite, '_blank')}>
                    Visit Website
                </button>
            </center>
        </div>
    );
}

export default BusinessWeb;
