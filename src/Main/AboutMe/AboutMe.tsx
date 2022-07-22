import React from 'react';
import s from './AboutMe.module.css'
import sCommon from '../../common/Styles/Container.module.css'

const AboutMe = () => {
    return (
        <div className={s.aboutMeBlock}>
            <div className={`${sCommon.container} ${s.aboutMeContainer}`}>
                <h2 className={s.title}>About Me</h2>
                <div className={s.card}>
                    <div className={s.info}>
                        <div className={s.avatar}>
                            <img src={''} alt={'avatar'}/>
                        </div>
                        <span>Brief CV info</span>
                    </div>
                    <div className={s.description}>
                        <span>Some text about myself</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
