import React from "react";
import Navbar from "../src/components/Navbar";
import Mainbody from "./components/Mainbody";
import "../src/component styles/App.css"
import Footer from "./components/Footer";
import MemeData from "./memeData";


export default function App(){
    return(
        <>
            <Navbar />
            <Mainbody />
            <Footer />
        </>
    );
}