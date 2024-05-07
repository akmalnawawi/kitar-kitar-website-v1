import React, { useState } from "react";
//import { setUserInterest } from '../Cbf';

function LikeButton(props) {
    const [selectedInterests, setSelectedInterests] = useState([]);

    const handleButtonClick = (interest) => {
        // Toggle the selection of interest
        const updatedInterests = selectedInterests.includes(interest)
            ? selectedInterests.filter(item => item !== interest)
            : [...selectedInterests, interest];

        setSelectedInterests(updatedInterests);
        //setUserInterest(updatedInterests);
        console.log(updatedInterests);

        // Update passingInterests when selectedInterests changes
        alert("The interests is: "+selectedInterests);
    };

    return (
        <button onClick={() => handleButtonClick(props.interest)}>Love This!💚</button>
    );
}

export default LikeButton
