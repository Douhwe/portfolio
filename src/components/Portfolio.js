
import './Portfolio.css';

import  AboutMe  from './AboutMe';
import  Sidebar  from './Sidebar';
import  Experiences from './Experiences';
import  Projects from './Projects';
import  Misc from './Misc';


export const Portfolio = () => {


    return (
        <div className='home' id='top'>
            <Sidebar></Sidebar>
        <div className='content'>
            <AboutMe/>
            <Experiences/>
            <Projects/>
            <Misc/>
        </div>
        </div>
    )
}

export default Portfolio;