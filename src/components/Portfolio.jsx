import React from 'react';
import { IoEyeOutline } from 'react-icons/io5';

// Import project images directly from assets
import project1Img from '../assets/project-1.jpg';
import project2Img from '../assets/project-2.jpg';
import project3Img from '../assets/project-3.jpg';
import project5Img from '../assets/project-5.jpg';

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

const projects = [
    {
        title: "Real Estate",
        category: "Full-Stack Development",
        image: project1Img,
        link: "https://github.com/adityajadhav5905/real-estate-listings"
    },
    {
        title: "Personal Portfolio",
        category: "HTML & CSS",
        image: project5Img,
        link: "https://github.com/adityajadhav5905/Personal-Portfolio"
    },
    {
        title: "Portable Pollution Monitoring",
        category: "IoT & Data Visualization",
        image: project2Img,
        link: "https://github.com/adityajadhav5905/SE_PBL_Pollution_Monitoring"
    },
    {
        title: "Amazon Clone",
        category: "HTML & CSS",
        image: project3Img,
        link: "https://github.com/adityajadhav5905/Amazon-Clone"
    }
];

const Portfolio = () => {
    return (
        <article className="portfolio active" data-page="portfolio">
            <header>
                <h2 className="h2 article-title">Portfolio</h2>
            </header>
            <section className="projects">
                <ul className="project-list">
                    {projects.map((project, index) => (
                        <li className="project-item active" data-filter-item data-category="web development" key={index}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <IoEyeOutline />
                                    </div>
                                    <img src={project.image} alt={project.title} loading="lazy" />
                                </figure>
                                <h3 className="project-title">{project.title}</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <p className="project-category">{project.category}</p>
                                    <span className="social-link" title="GitHub">
                                        <GitHubIcon />
                                    </span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default Portfolio;