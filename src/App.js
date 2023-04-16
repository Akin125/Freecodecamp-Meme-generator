import React from "react";
import Navbar from "../src/components/Navbar";
import Mainbody from "./components/Mainbody";
import "../src/component styles/App.css"
import Footer from "./components/Footer";



export default function App(){

    return(
        <>
            <Navbar />
            <Mainbody />
            <Footer />
        </>
    );
}

        {/*<main>*/}
        {/*    <h1>Do you feel like going out?</h1>*/}
        {/*    <div className={"gg"} onClick={changeMind}>*/}

        {/*        <h1>{text}</h1>*/}
        {/*    </div>*/}

        {/*</main>*/}

// const [isGoing, setIsGoing] = React.useState(true)
//
// function changeMind(){
//     setIsGoing(
//         function (prevState){
//         return prevState === false;
//     }
//     );
// }
//
// let text = "No";
// if (isGoing) {
//     text = "Yes";
// }
