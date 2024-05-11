import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate, useLocation } from "react-router-dom";
import GithubIcon from "../assets/icons/githublogo.png";
import LinkedinIcon from "../assets/icons/linkedinlogo.png";
import EmailIcon from "../assets/icons/emaillogo.png";
import "./NavBar.css";

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (section: any) => {
        // If already on the home page, just scroll to the section
        if (location.pathname === '/') {
          const sectionElement = document.querySelector(section);
          if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          // Navigate to the home page and then scroll to the section
          navigate('/');
    
          setTimeout(() => {
            const sectionElement = document.querySelector(section);
            if (sectionElement) {
              sectionElement.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      };

return (
    <Navbar fixed="top" className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto">
                <Link to="/" className="nav-link">Andy Chen</Link>
                <div onClick={() => handleNavigation('#about')} className="nav-link">About</div>
                <div onClick={() => handleNavigation('#experience')} className="nav-link">Experience</div>
                <div onClick={() => handleNavigation('#projects')} className="nav-link">Projects</div>
                <div onClick={() => handleNavigation('#misc')} className="nav-link">Misc</div>
                <Link to="/future-goals" className="nav-link">Future Goals</Link>
            </Nav>

            <Nav className="ms-auto">
                <Nav.Link>
                    <img className='icon' onClick={() => openLink('https://drive.google.com/file/d/1sh2EyVdrzNhEMcs2ciFTsMuFd0rMoTWq/view?usp=sharing')} src={EmailIcon} alt='resume' width={40}/>
                </Nav.Link>
            <Nav.Link>
                <img className='icon' onClick={() => openLink('https://github.com/douhwe')} src={GithubIcon} alt='github' width={40}/>
            </Nav.Link>
            <Nav.Link>
                <img className='icon' onClick={() => openLink('https://www.linkedin.com/in/andychen1024/')} src={LinkedinIcon} alt='linked-in' width={40} />
            </Nav.Link>
            </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
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

export default NavBar;
