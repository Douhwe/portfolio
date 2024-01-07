import React from "react";
import "./Misc.css";

const Misc = () => {

    const pictures = [
        {
            thumbnail1: "/thumbnails/cats1.jpg",
            thumbnail2: "/thumbnails/cats2.jpg"
        }
    ]

    const inlineStyle = {
        width: '50%',    
        height: '50%',   
    };

    return (
        <div id='misc'>
            {pictures.map((picture, index) => (
                <figure key={index}>
                    <div className="divide-space"></div>
                    <img src={picture.thumbnail1} style={inlineStyle} alt="Thumbnail" />
                    <img src={picture.thumbnail2} style={inlineStyle} alt="Thumbnail" />

                </figure>
            ))}
        </div>
    );
};
export default Misc;

