import React from "react";
import MemeData from "../memeData";
import "../component styles/Mainbody.css";

export default function Mainbody(){
    function getMemeImages(){
        const memeArray = MemeData.data.memes;
        const randomIndex = Math.floor(Math.random() * memeArray.length);
        const url = memeArray[randomIndex].url;
    }

    return(
        <main>

            <div className={"mainbody--container"}>

                <input type="text"
                       placeholder={"Top text"}
                       className={'form--input'}
                />

                <input type="text"
                       placeholder={"Bottom text"}
                       className={'form--input'}
                />

                <button
                    onClick={getMemeImages}
                    className={'form--button'}>
                    Get a new meme Image🖼️

                </button>
            </div>

        </main>
    );
}