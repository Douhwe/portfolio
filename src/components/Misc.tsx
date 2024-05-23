import "./Misc.css";
import { useState } from "react";

const Misc = () => {

    const pictures = [
        {
            thumbnail: "/thumbnails/cats1.jpg"
        },
        {
            thumbnail: "/thumbnails/cats2.jpg"
        }
    ]

const [currentThumbnail, setCurrentThumbnail] = useState(0); //Start off with first Miscellaneous Image
let totalImages = pictures.length;


const inlineStyle = {
        width: '50%',    
        height: '50%',  
        marginLeft: '15%', 
};

const buttonInlineStyle = {
    marginLeft: '17.5%',
}

const navigatePrevious = () => {
    if (currentThumbnail - 1 < 0) {
        setCurrentThumbnail(currentThumbnail => totalImages - 1) //Underflow to last project
    }
    else {
        setCurrentThumbnail(currentThumbnail => currentThumbnail - 1)
    }
};

const navigateNext = () => {
    setCurrentThumbnail(((currentThumbnail + 1) % totalImages));
    };

    return (
        <div id='misc'>
        <div className='sub-header' style={{
            color: "var(--light-coral)"
            }}> 
            <h1>
                Miscellaneous 
            </h1>
        </div>

        <div id='misc-images'>
            {pictures.map((picture, index) => (
                <div key={index}>
                    {currentThumbnail === index && (
                        <figure>
                            <div className="divide-space"></div>
                            <img src={process.env.PUBLIC_URL + picture.thumbnail} style={inlineStyle} alt="Thumbnail" />
                        </figure>
                    )}
                </div>
        ))}
            <div className='pagination-buttons' style={buttonInlineStyle}>
                <button className="prevButton" onClick={navigatePrevious}>Previous</button>
                <button className="nextButton" onClick={navigateNext}>Next</button>
            </div>
        </div>

        </div>
    );

};
export default Misc;
