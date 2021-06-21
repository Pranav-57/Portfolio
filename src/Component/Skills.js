import React, { useEffect } from 'react';
import '../Style/skills.css';

const Skills = () => {

    useEffect(() => {
        const skillsContent = document.getElementsByClassName('skills__content');
        const skillsHeader = document.querySelectorAll('.skills__header');

        function toggleSkills(){
            let itemClass = this.parentNode.className;

            for (let i = 0; i < skillsContent.length; i++) {
                skillsContent[i].className = 'skills__content skills__close';
            }

            if (itemClass === 'skills__content skills__close') {
                this.parentNode.className = 'skills__content skills__open';
            }
        };

        skillsHeader.forEach(item => {
            item.addEventListener('click', toggleSkills);
        });
    }, [])

    return (
        <section className="skills section" id="skills" >
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical Skills</span>
            <div className="skills__container container grid">
                <div>
                    <div className="skills__content skills__open">
                        <div className="skills__header">
                            <i className="uil uil-programming-language skills__icon"></i>
                            <div>
                                <h1 className="skills__title">Programming Languages</h1>
                            </div>
                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div className="skills__list grid">
                            <div className="skills_data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Python</h3>
                                    <div className="skills__number">Intermediate</div>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Java Script</h3>
                                    <div className="skills__number">Intermediate</div>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">C++</h3>
                                    <div className="skills__number">Intermediate</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="skills__content skills__close">
                        <div className="skills__header">
                            <i className="uil uil-web-grid skills__icon"></i>
                            <div>
                                <h1 className="skills__title">Frontend Technology</h1>
                            </div>
                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div className="skills__list grid">
                            <div className="skills_data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">HTML</h3>
                                    <div className="skills__number">Intermediate</div>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">CSS</h3>
                                    <div className="skills__number">Intermediate</div>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Bootstrap</h3>
                                    <div className="skills__number">Intermediate</div>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">React JS</h3>
                                    <div className="skills__number">Intermediate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="skills__content skills__close">
                        <div className="skills__header">
                            <i className="uil uil-server-network skills__icon"></i>
                            <div>
                                <h1 className="skills__title">Backend Technology</h1>
                            </div>
                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div className="skills__list grid">
                            <div className="skills_data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Django</h3>
                                    <div className="skills__number">Intermediate</div>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Node JS</h3>
                                    <div className="skills__number">Basic</div>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Express JS</h3>
                                    <div className="skills__number">Basic</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skills__content skills__close">
                        <div className="skills__header">
                            <i className="uil uil-database skills__icon"></i>
                            <div>
                                <h1 className="skills__title">Database</h1>
                            </div>
                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div className="skills__list grid">
                            <div className="skills_data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">SQL</h3>
                                    <div className="skills__number">Intermediate</div>
                                </div>
                            </div>
                            <div className="skills_data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Mongo DB</h3>
                                    <div className="skills__number">Basic</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;