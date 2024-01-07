import React from "react";
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div id='about' className='about-me'>
            <div className='divide-space'/>
            <p className='bio-text'>
                Hey there! I'm a student studying Computer Science at Stony Brook University. <br/> 
                I enjoy programming, solving problems, and learning about new ideas. <br/>
                Specifically, I'm interested in learning more about Machine Learning, Data Science, and Full-Stack Development, hoping to make a mark in the world of technology.
                <br/>
                <br/>
                Outside my student life, I enjoy Gaming, Swimming, and taking Pictures of Cats
            </p>
        <div className='divider'></div>
        </div>
    );
};

export default AboutMe;