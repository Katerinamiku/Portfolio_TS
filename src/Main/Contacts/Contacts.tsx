import React from 'react';
import s from './Contacts.module.scss'
import sCommon from "../../common/Styles/Container.module.css";
import Title from "../../common/Components/Title/Title";

const Contacts = () => {
    return (
        <div className={s.contactMeBlock}>
            <div className={`${sCommon.container} ${s.contactMeContainer}`}>
                <div className={s.messageBlock}>
                    <Title title={'Send message'}/>
                    <form className={s.contactForm}>
                        <input type={'text'} placeholder={'Name'}/>
                        <input type={'text'} placeholder={'Email'}/>
                        <input type={'text'} placeholder={'Subject'}/>
                        <textarea placeholder={'Message'}></textarea>
                    </form>
                    <button className={s.sendBtn} type={'submit'}>Send Message</button>
                </div>
                <div className={s.contactsBlock}>
                    <Title title={'Get in touch'}/>
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
