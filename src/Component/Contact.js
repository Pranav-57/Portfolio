import React from 'react';
import '../Style/contact.css';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const notify = message => toast(message);

    function sendEmail(e){
        e.preventDefault();
        if (e.target.name.value && e.target.email.value && e.target.message.value && e.target.project_title.value) {
            emailjs.sendForm('service_g6szy8f', 'template_v2u9855', e.target, 'user_SZb3ZzOF5ztMfmcDm2zBE')
            .then((result) => {
                notify("Email has been send.");
            }, (error) => {
                notify("Something went wrong.");
                console.log(error.text);
            });   
        }
        else{
            notify("All fields are required.");
        }
        e.target.reset();
    }

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>
            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <i class="uil uil-phone contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Call Me</h3>
                            <span className="contact__subtitle">+91 7420877575</span>
                        </div>
                    </div>
                    <div className="contact__information">
                        <i class="uil uil-envelope contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Email</h3>
                            <span className="contact__subtitle">pranav.aher04@gmail.com</span>
                        </div>
                    </div>
                    <div className="contact__information">
                        <i class="uil uil-map-marker contact__icon"></i>
                        <div>
                            <h3 className="contact__title">City</h3>
                            <span className="contact__subtitle">Ambernath, Maharashtra.</span>
                        </div>
                    </div>
                </div>
                <form onSubmit={sendEmail} className="contact__from grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label htmlFor="name" className="contact__label">Name</label>
                            <input type="text" id="name" name="name" className="contact__input" />
                        </div>
                        <div className="contact__content">
                            <label htmlFor="email" className="contact__label">Email</label>
                            <input type="email" id="email" name="email" className="contact__input" />
                        </div>
                    </div>
                    <div className="contact__content">
                        <label htmlFor="project_desc" className="contact__label">Project Title / Email Subject</label>
                        <input type="text" id="project_desc" name="project_title" className="contact__input" />
                    </div>
                    <div className="contact__content">
                        <label htmlFor="message" className="contact__label">Message</label>
                        <textarea name="message" id="message" cols="0" rows="7" className="contact__input"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="button button__flex footer__button">
                            Send Message <i class="uil uil-message button__icon"></i>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;