import React from 'react';
import { IoBookOutline } from 'react-icons/io5';

// Vite's way of importing multiple images.
// This finds all matching files in ../assets and gets their public URL.
const skillImageModules = import.meta.glob('../assets/*.(png|svg|jpg|jpeg)', { eager: true, as: 'url' });

// Create a cleaner map of just the filename to the URL.
// e.g., { "React.svg": "/src/assets/React.svg" }
const skillImages = Object.fromEntries(
  Object.entries(skillImageModules).map(([path, url]) => [path.split('/').pop(), url])
);

const skills = [
    { name: 'React', img: 'React.svg' }, { name: 'Node.js', img: 'Node.js.svg' },
    { name: 'HTML5', img: 'HTML5.svg' }, { name: 'Python', img: 'Python.svg' },
    { name: 'Bootstrap', img: 'Bootstrap.svg' }, { name: 'CSS3', img: 'CSS3.svg' },
    { name: 'JavaScript', img: 'JavaScript.svg' }, { name: 'Next.js', img: 'Next.js.svg' },
    { name: 'MySQL', img: 'MySQL.svg' }, { name: 'Git', img: 'Git.svg' },
    { name: 'TypeScript', img: 'TypeScript.svg' }, { name: 'Jupyter', img: 'Jupyter.svg' },
    { name: 'VS Code', img: 'Visual Studio Code (VS Code).svg' }, { name: 'C', img: 'C.svg' },
    { name: 'C++', img: 'C++ (CPlusPlus).svg' }, { name: 'Arduino', img: 'Arduino.svg' },
    { name: 'Nodemon', img: 'Nodemon.svg' }, { name: 'MongoDB', img: 'MongoDB.svg' }
];

const Resume = () => {
    return (
        <article className="resume active" data-page="resume">
            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>

            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box"><IoBookOutline /></div>
                    <h3 className="h3">Education</h3>
                </div>
                <ol className="timeline-list">
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">SCTR's Pune Institute of Computer Technology (PICT) , Pune</h4>
                        <span>2023 — 2027</span>
                        <p className="timeline-text">CGPA : 8.815</p>
                    </li>
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Vidyamandir Junior College , Miraj</h4>
                        <span>2021 — 2023</span>
                        <p className="timeline-text">HSC Percentage : 72.83 %</p>
                        <p className="timeline-text">NTSE State Rank : 17 [Eligible for National Scolership]</p>
                    </li>
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Deshbhakt Nathaji Lad Highschool , Sangli</h4>
                        <span>2020 — 2021</span>
                        <p className="timeline-text">SSC Percentage : 98.40 %</p>
                    </li>
                </ol>
            </section>
            
            <section className="skill">
                <h3 className="h3 skills-title">My skills</h3>
                <div className="skills-list content-card skill-marquee">
                    <div className="marquee-outer">
                        <div className="marquee-grid">
                            {[...skills, ...skills, ...skills].map((skill, index) => (
                                <div className="tech-box" key={index} data-skill={skill.name}>
                                    {/* Now it correctly looks up the image URL from the map */}
                                    <img src={skillImages[skill.img]} alt={skill.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default Resume;