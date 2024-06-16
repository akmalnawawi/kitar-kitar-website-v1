import React from "react";
import "../../styles/business.css";

function BusinessWeb () {

    return (
        <div className="bcard-web">
            <center>
                <p>Company A</p>
                <button onClick={() => {
                    window.open('https:ufuture.uitm.edu.my', '_blank')
                }}>Visit Website</button>
            </center>
        </div>
    );
}

export default BusinessWeb;
