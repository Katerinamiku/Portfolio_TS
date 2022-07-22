import React from 'react';
import s from './Contacts.module.css'
import sCommon from "../../common/Styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={s.contactMeBlock}>
            <div className={`${sCommon.container} ${s.contactMeContainer}`}>
                <div className={s.messageBlock}>
                    <h2 className={s.title}>Send Message</h2>
                    <form className={s.contactForm}>
                        <input type={'text'}/>
                        <input type={'text'}/>
                        <textarea></textarea>
                    </form>
                    <button className={s.sendBtn}>Send Message</button>
                </div>
                <div className={s.contactsBlock}>
                    <h2 className={s.title}>Get in Touch</h2>
                    <div className={s.contactData}>
                        <ul className={s.location}>
                            <li><span>Location</span></li>
                            <li><span>Tel</span></li>
                            <li><span>Gmail</span></li>
                        </ul>
                    </div>
                    <div className={s.socials}>
                        <a href=''><span>LinkedIn</span></a>
                        <a href=''><span>Facebook</span></a>
                        <a href=''><span>GitHub</span></a>
                        <a href=''><span>Instagram</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default Contacts;
