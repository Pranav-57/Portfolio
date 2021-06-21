import React from 'react';
import '../Style/footer.css';

const Footer = () => {
    return (
        <div className="section footer">
            <div className="container grid footer__container">
                <div className="footer__left">
                    <a href="#home"><h1 className="footer__title">Pranav</h1></a>
                    <h3 className="footer__subtitle">An Aspiring Full stack Web developer.</h3>
                </div>
                <div className="footer__right">
                    <div className="footer__social">
                        <a target="_blank" href="https://www.linkedin.com/in/pranav-a-2a02b3169/" className="footer__social__icon">
                            <i className="uil uil-linkedin"></i>
                        </a>
                        <a target="_blank" href="https://pranav-57.github.io/Portfolio.github.io/" className="footer__social__icon">
                            <i className="uil uil-github"></i>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/pranav.aher_04/" className="footer__social__icon">
                            <i className="uil uil-instagram"></i>
                        </a>
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100008674267522" className="footer__social__icon">
                            <i className="uil uil-facebook"></i>
                        </a>
                    </div>
                    <h3 className="footer__subtitle">Connect with me through social account.</h3>
                </div>
            </div>
            <h3 className="footer_bottom_title">Copyright © 2021 All rights reserved.</h3>
        </div>
    )
}

export default Footer;