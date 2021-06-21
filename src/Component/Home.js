import React from 'react';
import BlobSvg from './BlobSvg';
import '../Style/home.css';

const Home = () => {

    return (
        <section className="section home" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    {/* <div className="home__social">
                        <a target="_blank" href="https://pranav-57.github.io/Portfolio.github.io/" className="home__social__icon">
                            <i className="uil uil-linkedin-alt"></i>
                        </a>
                        <a target="_blank" href="https://pranav-57.github.io/Portfolio.github.io/" className="home__social__icon">
                            <i className="uil uil-github"></i>
                        </a>
                        <a target="_blank" href="https://pranav-57.github.io/Portfolio.github.io/" className="home__social__icon">
                            <i className="uil uil-instagram"></i>
                        </a>
                    </div> */}
                    <div className="home__img">
                        <BlobSvg />
                    </div>
                    <div className="home__data">
                        <h1 className="home__title">Hello, I'am  
                        <span className="special"> Pranav Aher.</span></h1>
                        <h3 className="home__subtitle">An Aspiring Full stack Web developer.</h3>
                        <p className="home__description">In a journey of improving myself and enhancing my skills and always ready to grab new opportunities.</p>
                        <a href="#contact" className="button button__flex">
                            Contact Me <i className="uil uil-message button__icon"></i>
                        </a>
                    </div>
                </div>
                <div className="home__scroll">
                    <a href="" className="home__scroll__button button__flex">
                        <i className="uil uil-mouse-alt home__scroll__mouse"></i>
                        <span className="home__scroll__name">Scroll Down</span>
                        <i className="uil uil-arrow-down home__scroll__arrow"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home