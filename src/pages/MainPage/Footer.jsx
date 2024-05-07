import React from "react";
import "../../styles/components.css";

const date = new Date();
let year = date.getFullYear();

function Footer(){
    return (
        <footer className="footer-container">
            <hr></hr>
            <b><p>Contact Info: +03-57772555 | Customer Services: 9am-6pm</p></b>
            <p>Copyright by KitarKitar@{year}</p>
        </footer>
    );
}

export default Footer;