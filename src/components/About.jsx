import React from 'react';

// Import service icons directly from assets
import devIcon from '../assets/icon-dev.svg';
import designIcon from '../assets/icon-design.svg';
import appIcon from '../assets/icon-app.svg';
import photoIcon from '../assets/icon-photo.svg';

const About = () => {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
          I am <strong>Aditya Jadhav</strong>, an <strong>Electronics and Telecommunication</strong> engineering
          student at <strong>Pune Institute of Computer Technology, Pune</strong> with a strong passion for full-stack
          development. My projects showcase my expertise in the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS), as
          well as my skills in data analysis and visualization using Python libraries like Pandas and Folium. I am a
          problem-solver who enjoys building interactive and innovative applications, from a real estate platform to a
          pollution monitoring device with a heatmap visualization. As an NTSE Scholar, I am driven to excel and apply
          my technical abilities to create impactful solutions.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>
        <ul className="service-list">
           <li className="service-item">
              <div className="service-icon-box">
                <img src={devIcon} alt="Web development icon" width="40" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Frontend Development</h4>
                <p className="service-item-text">
                  Crafting modern, interactive, and fully responsive user interfaces with ReactJS and Tailwind CSS to
                  ensure a seamless user experience on all devices.
                </p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <img src={designIcon} alt="design icon" width="40" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Backend Development</h4>
                <p className="service-item-text">
                  Building robust, secure, and scalable server-side applications using Node.js, Express.js, and MongoDB.
                  I create efficient RESTful APIs to power your web application's core logic.
                </p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <img src={appIcon} alt="mobile app icon" width="40" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Data Structures & Algorithms</h4>
                <p className="service-item-text">
                  Applying a strong foundation in data structures and algorithms to solve complex problems and write
                  clean, efficient, and scalable code.
                </p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <img src={photoIcon} alt="camera icon" width="40" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Machine Learning</h4>
                <p className="service-item-text">
                  Leveraging machine learning algorithms to transform complex datasets into actionable insights.
                  Experienced in building and evaluating models for prediction, classification, and data analysis.
                </p>
              </div>
            </li>
        </ul>
      </section>
    </article>
  );
};

export default About;