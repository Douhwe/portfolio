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
                    <img src={process.env.PUBLIC_URL + picture.thumbnail1} style={inlineStyle} alt="Thumbnail1" />
                    <img src={process.env.PUBLIC_URL + picture.thumbnail2} style={inlineStyle} alt="Thumbnail2" />

                </figure>
            ))}
        </div>
    );
};
export default Misc;

