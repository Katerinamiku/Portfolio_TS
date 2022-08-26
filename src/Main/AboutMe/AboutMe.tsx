import React from 'react';
import s from './AboutMe.module.scss'
import sCommon from '../../common/Styles/Container.module.css'
import Title from "../../common/Components/Title/Title";

const AboutMe = () => {
    return (
        <div className={s.aboutMeBlock}>
            <div className={`${sCommon.container} ${s.aboutMeContainer}`}>
                <Title title={'About Me'}/>
                <div className={s.card}>
                    <div className={s.info}>
                        <div className={s.avatar}>
                            <img src={''} alt={'main Photo'}/>
                        </div>
                        <span>Brief CV info</span>
                    </div>
                    <div className={s.description}>
                        <span>Some text about myself</span>
                        <button>Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
