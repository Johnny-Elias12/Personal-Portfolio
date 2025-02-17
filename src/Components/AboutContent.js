import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im Johnny Elias, a Highly motivated and proactive Computer Science student at AUCE University with a keen interest in software development and problem-solving.
              I love the challenge of coding and enjoy building applications that solve real-world problems. 
              In my spare time, I love hiking and exploring new technologies. 
              I’m excited to pursue internship opportunities where I can grow my skills and make valuable contributions to your company's goals.</p>
            <Link to='/contact'>
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
        <div className="skills_section">
        <div className="skills_head">
            <h2>My <span>Skills</span></h2>
            <p>Here is my skills to represent my Expertise</p>
        </div>
        <div className="skills_main">
            <div className="skill_bar">
                <div className="info">
                    <p>HTML</p>
                    <p>90%</p>
                </div>
                <div className="bar">
                    <span className="html"></span>
                </div>
            </div>
            <div className="skill_bar">
                <div className="info">
                    <p>CSS</p>
                    <p>70%</p>
                </div>
                <div className="bar">
                    <span className="css"></span>
                </div>
            </div>
            <div className="skill_bar">
                <div className="info">
                    <p>MSQL</p>
                    <p>65%</p>
                </div>
                <div className="bar">
                    <span className="MSQL"></span>
                </div>
            </div>
            <div className="skill_bar">
                <div className="info">
                    <p>Java Script</p>
                    <p>65%</p>
                </div>
                <div className="bar">
                    <span className="js"></span>
                </div>
            </div>
            <div className="skill_bar">
                <div className="info">
                    <p>React js</p>
                    <p>70%</p>
                </div>
                <div className="bar">
                    <span className="react"></span>
                </div>
            </div>
            <div className="skill_bar">
                <div className="info">
                    <p>Node js</p>
                    <p>70%</p>
                </div>
                <div className="bar">
                    <span className="node"></span>
                </div>
            </div>
            <div className="skill_bar">
                <div className="info">
                    <p>Express js</p>
                    <p>65%</p>
                </div>
                <div className="bar">
                    <span className="express"></span>
                </div>
            </div>
            <div className="skill_bar">
                <div className="info">
                    <p>Mongo DB</p>
                    <p>60%</p>
                </div>
                <div className="bar">
                    <span className="mongo"></span>
                </div>
            </div>
          </div>
      </div>
    </div>
  </div>

  )
}

export default AboutContent