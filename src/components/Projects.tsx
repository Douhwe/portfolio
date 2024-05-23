import './Projects.css'
import GithubIcon from "../assets/icons/githublogo.png";
import  ICONS  from './data/icons';
import { useState } from "react";

const Projects = () => {


    const projects = [
    {
        title: 'Stock Options Visualizer',
        date: 'Fall 2023',
        description: 'Live Financial Stock & Options Pricing Modeler',
        repo: 'https://github.com/Douhwe/AI-Stock-Prediction-Bot',
        stack: ["React", "WebSocket", "Docker", "AWS"],
        thumbnail: "/thumbnails/optionsmodel.png"
    },
    {
        title: 'Fake Stack Overflow',
        date: 'Fall 2023',
        description: 'CRUD Application for asking and answering Coding related Questions',
        repo: 'https://github.com/Douhwe/AI-Stock-Prediction-Bot',
        stack: ["TypeScript", "React", "MongoDB", "Express", "Nodejs"],
        thumbnail: "/thumbnails/fakeso.png"
    },
    {
        title: 'Stock Price Predictor',
        date: 'Fall 2023',
        description: 'Web App designed to Predict Stock Prices using LSTM Neural Network',
        repo: 'https://github.com/Douhwe/AI-Stock-Prediction-Bot',
        stack: ["SQLite", "Flask", "React", "TensorFlow", "Keras"],
        thumbnail: "/thumbnails/stockpredict.png"
    },
    {
        title: 'Portfolio',
        date: 'Fall 2023',
        description: 'Portfolio Website to show who I am and what I\'ve accomplished!',
        repo: 'https://github.com/Douhwe/portfolio',
        stack: ["TypeScript", "React"],
        thumbnail: "/thumbnails/andydev.png"

    }
] 

const [currentProjectIndex, setCurrentProjectIndex] = useState(0) //Start with First Index/Project
let totalProjects = projects.length; //Max number of Projects to navigate

const navigatePrevious = () => {
    if (currentProjectIndex - 1 < 0) {
        setCurrentProjectIndex(currentProjectIndex => totalProjects - 1) //Underflow to last project
    }
    else {
        setCurrentProjectIndex(currentProjectIndex => currentProjectIndex - 1)
    }
};

const navigateNext = () => {
    setCurrentProjectIndex(((currentProjectIndex + 1) % totalProjects));
    };


    return (
        <div id='projects'
            className="flex-container">
            <div className='sub-header' style={{
                color: "var(--light-coral)"
                }}> 
            <h1>
                Pet Projects
            </h1>
            </div>
            <div className='project-counter'>Project {currentProjectIndex + 1}</div>
            <div className='pagination-buttons'>
                <button className="prevButton" onClick={navigatePrevious}>Previous</button>
                <button className="nextButton" onClick={navigateNext}>Next</button>
            </div>
            {projects.map((project, index) => (
                <div key={index}>
                    {currentProjectIndex === index && ( //Only Display the Currently Selected Project
                    <div className="project-card">
                    <div className="card">
                        <figure>
                            <img src={process.env.PUBLIC_URL + project.thumbnail} className="thumbnail" alt="Project Thumbnail" />
                        </figure>
                        <div className="card-body">
                        <div className="title-icon">
                                <h2 className="card-title">
                                    {project.title}
                                </h2>
                                <a href={project.repo} className="proj-icon">
                                    <img src={GithubIcon} alt="GitHub" width="35"/>
                                </a>
                            </div>
                            <div className="description">
                            <p>{project.description}</p>
                            </div>
                            <div className="tech-stack">
                                <div className="stack-divider">Tech Stack</div>
                                <div className="stack">
                                    {project.stack.map((iconKey, idx) => {
                                        const IconComponent = ICONS[iconKey];
                                        return IconComponent ? <div key={idx} title={iconKey}> {IconComponent}</div> : null;
                                })}
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    )}
                </div>
            ))}
        </div>
        );
    };

export default Projects;