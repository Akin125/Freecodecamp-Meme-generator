import React from "react";
import memeData from "../memeData";
import "../component styles/Mainbody.css";

export default function Mainbody(){
    // state
    const [memes, setMemes] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "https://i.imgflip.com/30b1gx.jpg"
        }
    );
    const [allMemeImages, setAllMemeImages] = React.useState(memeData);

    // for getting the random url
    function getMemeImages(){
        const memeArray = allMemeImages.data.memes;
        const randomIndex = Math.floor(Math.random() * memeArray.length);
       // using the state instance to update the previous state
        const url = memeArray[randomIndex].url;
        setMemes(
            function (prevState){
                return (
                    {
                        ...prevState,
                        randomImage: url
                    }
                );
            }
        );
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

                <img src={memes.randomImage}
                     alt="meme-images"
                     className="meme--image"
                />
            </div>

        </main>
    );
}