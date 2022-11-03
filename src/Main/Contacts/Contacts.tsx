import React from 'react';
import s from './Contacts.module.scss'
import sCommon from "../../common/Styles/Container.module.scss";
import Title from "../../common/Components/Title/Title";
import faceBookIcon from "../../common/Styles/Icons/social/facebook-50.png"
import gitHubIcon from "../../common/Styles/Icons/social/github-50.png"
import LinkedinIcon from "../../common/Styles/Icons/social/linkedin-circled-50.png"
import telegramIcon from "../../common/Styles/Icons/social/telegram-50.png"
import {ImagesSelector} from "../../common/Components/svgSelector/ImagesSelector";
import {SendMessageForm} from "./SendMessageForm";
import {Fade} from 'react-awesome-reveal';


const Contacts = () => {
    return (
        <div className={s.contactMeBlock} id={'contacts'}>
            <Fade cascade={true} damping={0.5}>
                <div className={`${sCommon.container} ${s.contactMeContainer}`}>
                    {/*<div className={s.contactsCard}>*/}
                    <div className={s.messageBlock}>
                        <Title title={'Send message'}/>
                        <SendMessageForm/>
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
                            <a href="https://www.facebook.com/katerina.beregeiko" target="_blank">
                                <img src={faceBookIcon} alt="facebook"/>
                            </a>
                            <a href="https://github.com/Katerinamiku" target="_blank">
                                <img src={gitHubIcon} alt="github"/>
                            </a>
                            <a href="https://www.linkedin.com/in/kate-karpovich-49a57750/" target="_blank">
                                <img src={LinkedinIcon} alt="linkedin"/>
                            </a>
                            <a href="https://t.me/Kate_kar" target="_blank">
                                <img src={telegramIcon} alt="telegram"/>
                            </a>
                        </div>
                    </div>
                </div>
                {/*</div>*/}
            </Fade>
        </div>
    )
        ;
};

export default Contacts;
