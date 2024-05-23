import { useState } from 'react';

import './Sidebar.css';


import { Link } from 'react-scroll';

import GithubIcon from "../assets/icons/githublogo.png";
import LinkedinIcon from "../assets/icons/linkedinlogo.png";
import EmailIcon from "../assets/icons/emaillogo.png";

const Sidebar = () => {

    const [activeSection, setActiveSection] = useState('About Me');

    const handleSetActive = (sectionName: string) => {
        setActiveSection(sectionName);
    };

    const isSectionActive = (sectionName: string) => { 
        return activeSection === sectionName ? "#B399FF" : "#F2FCFC"; // Active color is purple
    };

    const openLink = (link: string): void => {
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
            <h2 id='intro' className='text'>hi, i'm andy </h2> 
            {/* <div className='name'> Andy</div></h2> */}
            
            <figure>
                <img src={process.env.PUBLIC_URL + "/thumbnails/flyingpikachu.png"} className="thumbnail" alt="flying pikachu!" 
                style={{width: "150px", height: "100px"}}/>
            </figure>

            <p id='pitch' className='text' style={{marginTop: "10%", marginBottom: "15%"}}>I like creating things</p>
            <br/>
            <nav className='menu'>
                <Link
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={350}
                    className={'aboutSelect'}
                    onSetActive={() => handleSetActive('About Me')}
                    style={{ color: isSectionActive('About Me') }}
                >
                    <div className='link-label' style={{ color: isSectionActive('About Me') }}>About Me</div>
                </Link>
                <br/>
                <Link
                    to="experience"
                    spy={true}
                    smooth={true}
                    duration={350}
                    className={'experienceSelect'}
                    onSetActive={() => handleSetActive('Experience')}
                    style={{ color: isSectionActive('Experience') }}
                    >
                    <div className='link-label' style={{ color: isSectionActive('Experience') }}>Experience</div>
                </Link>
                <br/>
                <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={350}
                    className={'projectSelect'}
                    onSetActive={() => handleSetActive('Projects')}
                    style={{ color: isSectionActive('Projects') }}
                    >
                    <div className='link-label' style={{ color: isSectionActive('Projects') }}>Projects</div>
                </Link>
                <br/>
                <Link
                    to="misc"
                    spy={true}
                    smooth={true}
                    duration={350}
                    className={'miscSelect'}
                    onSetActive={() => handleSetActive('Misc')}
                    style={{ color: isSectionActive('Misc') }}
                    >
                    <div className='link-label' style={{ color: isSectionActive('Misc') }}>Misc</div>
                </Link>

            </nav>
        </div>
        <div className='container'>
            <div className='connect'>
                <img className='icon' onClick={() => openLink('https://github.com/douhwe')} src={GithubIcon} alt='github' width={40}/>
                <img className='icon' onClick={() => openLink('https://www.linkedin.com/in/andychen1024/')} src={LinkedinIcon} alt='linked-in' width={40} />
                <img className='icon' onClick={() => openLink('https://drive.google.com/file/d/1sh2EyVdrzNhEMcs2ciFTsMuFd0rMoTWq/view?usp=sharing')} src={EmailIcon} alt='resume' width={40}/>
            </div>
        </div>
    </div>
    </div>
    );
}

export default Sidebar;