import React from 'react';
import s from './Contacts.module.scss'
import sCommon from "../../common/Styles/Container.module.scss";
import Title from "../../common/Components/Title/Title";
import faceBookIcon from "../../common/Styles/Icons/social/facebook-50.png"
import gitHubIcon from "../../common/Styles/Icons/social/github-50.png"
import LinkedinIcon from "../../common/Styles/Icons/social/linkedin-circled-50.png"
import telegramIcon from "../../common/Styles/Icons/social/telegram-50.png"
import {ImagesSelector} from "../../common/Components/svgSelector/ImagesSelector";
import Button from "../../common/Components/Button/Button";

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
                    <Button text={'Send Message'} />
                </div>
                <div className={s.contactsBlock}>
                    <Title title={'Get in touch'}/>
                    <div className={s.contactData}>
                        <div className={s.contactElement}>
                            <ImagesSelector iconName={'Email'}/>
                            <span>karpovichkate.dev@gmail.com</span></div>
                        <div className={s.contactElement}>
                            <ImagesSelector iconName={'Tel'}/>
                            <span>+420 607817651</span></div>
                        <div className={s.contactElement}>
                            <ImagesSelector iconName={'Location'}/>
                            <span>Prague, CzechRepublic</span></div>
                    </div>

                    <div className={s.socials}>
                        <a href="https://www.facebook.com/katerina.beregeiko">
                            <img src={faceBookIcon} alt="facebook"/>
                        </a>
                        <a href="https://github.com/Katerinamiku">
                            <img src={gitHubIcon} alt="github"/>
                        </a>
                        <a href="https://www.linkedin.com/in/kate-karpovich-49a57750/">
                            <img src={LinkedinIcon} alt="linkedin"/>
                        </a>
                        <a href="https://t.me/Kate_kar">
                            <img src={telegramIcon} alt="telegram"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default Contacts;
