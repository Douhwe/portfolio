import { useState } from 'react';

import './Sidebar.css';


import { Link } from 'react-scroll';

import GithubIcon from "../assets/icons/githublogo.png";
import LinkedinIcon from "../assets/icons/linkedinlogo.png";
import EmailIcon from "../assets/icons/emaillogo.png";

const Sidebar = () => {
    type URL = string;

    const [activeSection, setActiveSection] = useState([
        { name: 'About Me', active: true },
        { name: 'Experience', active: false },
        { name: 'Projects', active: false },
        { name: 'Misc', active: false }
    ]);

    const setActive = (name: string) => { //Sets active section on page, and changes others to inactive
        setActiveSection(activeSection.map(section => {
            if (section.name === name) {
                return { ...section, active: true };
            }
            return { ...section, active: false };
        }));
    }

    const openLink = (link: URL): void => {
        try {
            const newWindow = window.open(link, '_blank');
            if (newWindow) {
                newWindow.focus();
            }
        }
        catch (error) {
            console.error('Error Opening Link: ', error);
        }
      };


    return ( 
    <div className='nav'>
    <div className='sub-nav'>
        <div className='header'>
            <h2 id='intro' className='text'>Hello, I'm <br/> 
            <div className='name'> Andy</div></h2>
            <p id='pitch' className='text'>Programmer, Student, <br/> Cat Enthusiast</p>
            <nav className='menu'>
                <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={350}
                    className={'aboutSelect'}
                    onSetActive={() => setActive('About Me')}
                    style={{ color: activeSection.find(section => section.name === 'About Me' && section.active) ? "#72d4d6" : "#d3d6e6" }}
                    >

                </Link>

                <Link
                    to="experience"
                    spy={true}
                    smooth={true}
                    duration={350}
                    className={'experienceSelect'}
                    onSetActive={() => setActive('Experience')}
                    style={{ color: activeSection.find(section => section.name === 'Experience' && section.active) ? "#72d4d6" : "#d3d6e6" }}
                    >

                </Link>

            </nav>
        </div>
        <div className='container'>
            <div className='connect'>
                <img className='icon' onClick={() => openLink('https://github.com/douhwe')} src={GithubIcon} alt='github' width={40}/>
                <img className='icon' onClick={() => openLink('https://www.linkedin.com/in/andychen1024/')} src={LinkedinIcon} alt='linked-in' width={40} />
                <img className='icon' onClick={() => openLink('https://github.com/douhwe')} src={EmailIcon} alt='email' width={40}/>
            </div>
        </div>
    </div>
    </div>
    );
}

export default Sidebar;