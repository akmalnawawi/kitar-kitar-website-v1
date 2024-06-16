import React from "react";
import HeroSection from "./HeroSection"
import About from "./About";
import Features from "./Features";
import Quotes from "./Quotes";
import Service1 from "./Service1";
import Service2 from "./Service2";
import Footer from "./Footer";

function MainPage(){
    return (
        <>
            <HeroSection />
            <About />
            <Features />
            <Quotes />
            <Service1 
                image="./images/buy-sell.png"
                heading="Medium for Selling Recycling Waste"
                description="Have recyclable materials lying around? Turn them into cash with KitarKitar. Our platform provides a seamless medium for sellers to list their recycling waste and connect with interested buyers. Whether you have aluminum cans, plastic bottles, or cardboard boxes, there's a buyer waiting to give them a new life. Join us and unlock the hidden value in your recycling waste."
            />
            <Service2 
                image="./images/partnership.png"
                heading="Partnership with Recycler Centers"
                description="Through our partnerships, we provide a wide variety of choices for sellers and ensure competitive pricing for their recycling waste. By joining forces with KitarKitar, recycler centers gain access to a steady supply of high-quality materials while contributing to a cleaner, greener planet. Together, we're building a sustainable future one partnership at a time."
            />
            <Footer />
        </>
    );
}

export default MainPage;