import React from "react";
import "../../styles/components.css";

function Features(){
    return (
        <div className="features-section">
            <h2>Features</h2>
            <div className="features-container">
                <div>
                    <h3>Recycle Waste Pickup Services</h3>
                    <p>Whether you're a homeowner looking to responsibly dispose of recyclables or a business seeking sustainable waste management solutions, our efficient pickup services make recycling hassle-free. With just a few clicks, schedule a pickup, and let us handle the rest, ensuring your waste is recycled responsibly.</p>
                </div>
                <div>
                    <h3>Expand Environmental Awareness</h3>
                    <p>Our commitment to environmental stewardship goes beyond just providing a service. Through our platform, we aim to expand knowledge and raise awareness about recycling and sustainable practices. Access a wealth of resources, articles, and tips designed to inform and inspire eco-conscious living. From the latest innovations in recycling technology to practical tips for reducing waste, empower yourself with the knowledge to make a positive impact on the planet.</p>
                </div>
                <div>
                    <h3>Recommendation Algorithm</h3>
                    <p>Discover personalized content tailored to your interests with our recommendation algorithm. Leveraging content-based filtering, our algorithm analyzes your interactions with our platform to curate a customized reading experience. Whether you're passionate about recycling innovations, environmental advocacy, or sustainable living tips, find content that resonates with you. Engage with articles, videos, and resources that align with your interests, and deepen your understanding of the importance of recycling and environmental conservation.</p>
                </div>
            </div>
        </div>
    );
}

export default Features;