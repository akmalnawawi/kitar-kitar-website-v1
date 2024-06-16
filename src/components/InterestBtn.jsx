import React, { useState } from "react";
import "./../styles/form.css";

function InterestBtn({ onSearch }) {
    const [interest, setInterest] = useState("");

    const handleChange = (e) => {
        setInterest(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(interest); // Call the onSearch prop with the current interest
    };

    return (
        <div className="form-container">
            <h2>Tell us what do you like to hear?</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="interest-input"
                    name="interest"
                    placeholder="Example: e-Waste, recycling"
                    onChange={handleChange}
                    value={interest}
                    required
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default InterestBtn;
