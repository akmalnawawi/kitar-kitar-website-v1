// BusinessPage.jsx

import React from "react";
import "../../styles/business.css";
import BusinessCard from "./BusinessCard";
import Footer from "../MainPage/Footer";

const companyData = [
    {
        companyName: "Company A",
        companyWebsite: "https://websiteA.com",
        itemAccepted: ["E-waste", "Papers", "Bottles"],
        priceRange: "RM0.80-RM1.00"
    },
    {
        companyName: "Company B",
        companyWebsite: "https://websiteB.com",
        itemAccepted: ["Plastics", "Metals", "Cardboards"],
        priceRange: "RM0.50-RM0.90"
    },
    {
        companyName: "Company C",
        companyWebsite: "https://websiteB.com",
        itemAccepted: ["Metals Only"],
        priceRange: "RM1.50-RM2.00"
    },
    {
        companyName: "Company D",
        companyWebsite: "https://websiteB.com",
        itemAccepted: ["Bottles", "Metals", "Papers"],
        priceRange: "RM0.50-RM0.90"
    },
    {
        companyName: "Company E",
        companyWebsite: "https://websiteB.com",
        itemAccepted: ["Metals", "E-waste"],
        priceRange: "RM0.50-RM010.00"
    },
    {
        companyName: "Company F",
        companyWebsite: "https://websiteB.com",
        itemAccepted: ["Metals", "E-waste"],
        priceRange: "RM0.50-RM5.00"
    },
];

function BusinessPage() {
    return (
        <div className="business-container">
            <center><h1>Green Wealth Hub: Convert Recycling into Cash and Sell Your Recyclables Now!</h1></center>
            <BusinessCard companies={companyData} />
            <Footer />
        </div>
    );
}

export default BusinessPage;
