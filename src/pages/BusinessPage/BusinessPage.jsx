import React from "react";
import "../../styles/business.css";
import BusinessCard from "./BusinessCard";
import Footer from "../MainPage/Footer";

function BusinessPage() {
    return (
        <div className="business-container">
            <center><h1>Green Wealth Hub: Convert Recycling into Cash and Sell Your Recyclables Now!</h1></center>
            <BusinessCard />
            <Footer />
        </div>
    );
}

export default BusinessPage;