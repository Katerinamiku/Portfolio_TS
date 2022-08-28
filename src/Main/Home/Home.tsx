import React from 'react';
import s from './Home.module.scss';
import sCommon from '../../common/Styles/Container.module.css';
import photoBlack from "../../common/Styles/images/avatars/photoBlack.jpg";

const letter2 = require('./../../common/Styles/images/logoLetter.png');

const Home = () => {
    return (
        <div className={s.homeBlock}>
            <div className={` ${sCommon.container} ${s.homeContainer}`}>
                <div className={s.intro}>
                <span className={s.tagTop}>
                <br></br></span>
                    <h1>
                        <span className={s.blast}>H</span>
                        <span className={s.blast}>i</span>
                        <span className={s.blast}>, </span>
                        <br></br>
                        <span className={s.blast}>I</span>
                        <span className={s.blast}>'</span>
                        <span className={s.blast}>m </span>
                        <span><img width="80" height="95"
                                   src={letter2} alt={"Name"} className={s.animationLogo}/></span>
                        <span className={s.blast}>a</span>
                        <span className={s.blast}>t</span>
                        <span className={s.blast}>e</span>
                    </h1>
                    <p className={s.homeDescription}> Front-End Developer / React-Redux Developer</p>
                </div>
                <div className={s.photo}>
                    <img src={photoBlack} alt={'main photo'} className={s.mainPhoto}/>
                </div>
            </div>
        </div>
    );
};

export default Home;
