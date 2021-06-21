import React, { useEffect, useState } from 'react'
import '../Style/header.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {

    useEffect(() => {
        const themeColor = document.getElementById('theme-color');
        const header = document.getElementById('header');
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        const navClose = document.getElementById('nav-close');
        const themeIcon = document.getElementById('theme-icon');
        const navLink = document.querySelectorAll(".nav__link");
        const root = document.querySelector(':root');

        const setTheme = () => {
            if(localStorage.getItem('theme') == 'bright'){
                root.style.setProperty('--body-color', 'black');
                // root.style.setProperty('--text-color', 'white');
                root.style.setProperty('--title-color', 'white');
                themeIcon.setAttribute('class', 'uil uil-sun');
                localStorage.setItem('theme', 'dark');
            }
            else{
                root.style.setProperty('--body-color','hsl(var(--hue-color), 60%, 99%)');
            // root.style.setProperty('--text-color','hsl(var(--hue-color), 8%, 45%)');
                root.style.setProperty('--title-color','hsl(var(--hue-color), 8%, 15%)');
                themeIcon.setAttribute('class', 'uil uil-moon');
                localStorage.setItem('theme', 'bright');
            }
        }

        if (!localStorage.getItem('theme')) {
            localStorage.setItem('theme','bright');
        }
        
        if(navToggle){
            navToggle.addEventListener('click', () => {
                navMenu.classList.add('show__menu');
            });
        }
        
        if(navClose){
            navClose.addEventListener('click', () => {
                navMenu.classList.remove('show__menu');
            });
        }

        if (themeColor) {
            themeColor.addEventListener('click', setTheme);
        }
        
        const linkAction = () => {
            navMenu.classList.remove('show__menu');
        }

        navLink.forEach(item => {
            item.addEventListener('click', linkAction);
        });

        window.addEventListener('scroll', function (){
            if (header) {
                if(this.scrollY == 0){
                    header.classList.remove("box__shadow")
                }
                else{
                    header.classList.add("box__shadow")
                }   
            }
        });
        
    }, []);

    return (
        <header id="header" className="header">
            <ToastContainer />
            <nav className="nav container">
                <a href="#home" className="nav__logo">Pranav</a>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="uil uil-home nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user-circle nav__icon"></i> About Me
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                            <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#project" className="nav__link">
                            <i className="uil uil-briefcase-alt nav__icon"></i> Project
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                            <i className="uil uil-message nav__icon"></i> Contact Me
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" id="nav-close" ></i>
                </div>
                <div className="nav__btns">
                    <div className="theme__button" id="theme-color">
                        <i className="uil uil-moon" id="theme-icon"></i>
                    </div>
                    <div className="nav__toggle" id="nav-toggle">
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
