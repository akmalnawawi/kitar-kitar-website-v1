import React from "react";
import "../../styles/components.css";

function About() {
    return (
        <div className="about-container">
            <div className="about-image">
                <img src="./images/about-us.png" alt="About Us" className="" />
            </div>
            <div className="about-content">
                <h2>Who We Are?</h2>
                <p>At Kitar, we're champions of sustainability. Our mission? To revolutionize recycling and inspire eco-conscious living. With a focus on the 3R's – Reduce, Reuse, Recycle – we're reshaping waste management. Our user-friendly services make recycling easy for everyone, from homeowners to businesses. But we're more than just a service – we're educators, raising awareness and empowering individuals to make a difference. Join us in creating a greener, cleaner future.</p>
            </div>
        </div>
    );
}

export default About;