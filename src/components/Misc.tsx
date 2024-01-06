import React from "react";

const Misc = () => {

    const pictures = [
        {
            thumbnail: "/thumbnails/cats.jpg"
        }
    ]

    const inlineStyle = {
        width: '50%',    
        height: '50%',   
    };

    return (
        <div>
            {pictures.map((picture, index) => (
                <figure key={index}>
                    <img src={picture.thumbnail} style={inlineStyle} alt="Thumbnail" />
                </figure>
            ))}
        </div>
    );
};
export default Misc;

