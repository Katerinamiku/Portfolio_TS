import React from 'react';
import s from './Home.module.scss';
import sCommon from '../../common/Styles/Container.module.scss';
import photoBlack from "../../common/Styles/images/avatars/photoBlack.jpg";
import Button from "../../common/Components/Button/Button";

const letter2 = require('./../../common/Styles/images/logoLetter.png');
const cv = require('./KateKarpovichCV.pdf');

const Home = () => {
return (
        <div className={s.homeBlock} id={'home'}>
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
                        <img src={letter2} alt={"K"} className={s.animationLogo}/>
                        <span className={s.blast}>a</span>
                        <span className={s.blast}>t</span>
                        <span className={s.blast}>e</span>
                    </h1>
                    <p className={s.homeDescription}> Front-End Developer</p>
                    <div className={s.CvBtnContainer}>
                        <Button text={'Download CV'} btnHref={cv} download={'Kate Karpovich CV'}/>
                    </div>
                </div>
                <div className={s.photo}>
                    <img src={photoBlack} alt={'main photo'} className={s.mainPhoto}/>
                </div>
                <svg className={s.arrows}>
                    <path className={s.a1} d={"M0 0 L30 32 L60 0"}></path>
                    <path className={s.a2} d={"M0 20 L30 52 L60 20"}></path>
                    <path className={s.a3} d={"M0 40 L30 72 L60 40"}></path>
                </svg>
            </div>


        </div>
    );
};

export default Home;
