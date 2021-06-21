import React from 'react';
import '../Style/project.css';
import Instagram from '../Image/instagram.PNG';
import Udemy from '../Image/udemy.PNG';
import Covid from '../Image/covid.PNG';
import Weather from '../Image/weather.PNG';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Navigation,Pagination,Mousewheel,Keyboard } from 'swiper/core';
SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

const Project = () => {
    return (
        <section className="project section" id="project">
            <h2 className="section__title">Project</h2>
            <span className="section__subtitle">My recent project.</span>
            <div className="project__container container">
                <div>
                    <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">
                        <SwiperSlide className="project__content grid">
                            <img src={Instagram} alt="Instagram Clone Project" className="project__img" />
                            <div className="project__data">
                                <h3 className="project__title">Instagram clone using MERN</h3>
                                <p className="project__description">Instagram is one of the most famous Social Media applications and I tried to create an <span className="special__color">Instagram Clone</span> Using React JS at frontend and Node JS at backend. This website has all basic features of instagram such as creating new posts, like others post and follow others.</p>
                                <a href="https://instagram-clone-04.herokuapp.com/" target="_blank" className="button button__flex button__small project__button">
                                    Demo <i className="uil uil-arrow-right button__icon"></i>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project__content grid">
                            <img src={Udemy} alt="Udemy Porject" className="project__img" />
                            <div className="project__data">
                                <h3 className="project__title">Online Course Website using Django</h3>
                                <p className="project__description">This website is similar to <span className="special__color">Udemy</span> where students can buy courses for learning and give ratings to enroll courses, they can ask their questions to instructor and students. Instructor have different admin panel where they can launch courses for students, statistics of each course and can edit any course or video.</p>
                                <a href="https://harshaher.pythonanywhere.com/" target="_blank" className="button button__flex button__small project__button">
                                    Demo <i class="uil uil-arrow-right button__icon"></i>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project__content grid">
                            <img src="https://pranav-57.github.io/Portfolio.github.io/images/django.PNG" alt="" className="project__img" />
                            <div className="project__data">
                                <h3 className="project__title">Ecommerce Website Using Django</h3>
                                <p className="project__description">This is my second django project where I tried to create an <span className="special__color">ecommerce</span> project. This webiste has Customer registration, Login registration, Password reset, Password change, Add to cart, Quantity update, Paypal payment gateway feature and much more.</p>
                                <a href="" className="button button__flex button__small project__button">
                                    Demo <i class="uil uil-arrow-right button__icon"></i>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project__content grid">
                            <img src={Covid} alt="Covid Project" className="project__img" />
                            <div className="project__data">
                                <h3 className="project__title">Covid Tracker Using React JS</h3>
                                <p className="project__description">Get <span className="special__color">Covid Cases Information</span> using this website. This is a React JS project where I used disease.sh api to get covid patient information. This website shows country wise covid affected, recovered and death patients.</p>
                                <a href="https://covid-tracker-d6334.web.app/" target="_blank" className="button button__flex button__small project__button">
                                    Demo <i class="uil uil-arrow-right button__icon"></i>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="project__content grid">
                            <img src={Weather} alt="Covid Project" className="project__img"/>
                            <div className="project__data">
                                <h3 className="project__title">Weather Information Project Using Node JS</h3>
                                <p className="project__description">This is my First Node JS project which gives <span className="special__color">Current Weather Information.</span> This website gives current weather information of city. I used openweathermap API to get current weather information.</p>
                                <a href="https://mynodejsweatherapp.herokuapp.com/" target="_blank" className="button button__flex button__small project__button">
                                    Demo <i class="uil uil-arrow-right button__icon"></i>
                                </a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Project;