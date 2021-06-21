import React from 'react';
import '../Style/about.css';
import Pranav from '../Image/pranav.png';
import Resume from '../Resume/resume.pdf';

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>
            <div className="about__container container grid-container grid">
                <img src={Pranav} alt="" className="about__img" />
                <div className="about__data">
                    <p className="about__description">Hello I am Pranav Aher, an aspiring full-stack web developer. I am very passionate about learning new technology and working on real-time projects. I learned different languages and always admire working on different projects. I want to obtain a position in a company where I can use my skills and contribution towards individual and organizational growth, and be in the learning and improvement process throughout.</p>
                    <div className="about__info">
                        <div>
                            <div className="about__info-title">20</div>
                            <div className="about__info-name">Age</div>
                        </div>
                        <div>
                            <div className="about__info-title">19</div>
                            <div className="about__info-name">Project <br /> on Github</div>
                        </div>
                        <div>
                            <div className="about__info-title">7.73</div>
                            <div className="about__info-name">CGPI</div>
                        </div>
                    </div>
                    <div className="about__button">
                        <a download href={Resume} className="button about__flex">
                            Download CV <i className="uil uil-file-download button__icon"></i> 
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;