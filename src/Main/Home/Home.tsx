import React from 'react';
import s from './Home.module.scss';
import sCommon from '../../common/Styles/Container.module.css';
import photoBlack from "../../common/Styles/images/avatars/photoBlack.jpg";

const letter = require('./../../common/Styles/images/letter.png');

const Home = () => {
    return (
        <div className={s.homeBlock}>
            <div className={sCommon.container}>
            <div className={s.intro}>
                <h1>
                    <span className={s.blast} >H</span>
                    <span className={s.blast} >i</span>
                    <span className={s.blast} >, </span>
                    <br></br>
                    <span className={s.blast} >I</span>
                    <span className={s.blast} >'</span>
                    <span className={s.blast} >m </span>
                    <img width="75" height="80"
                         src={letter} alt={"Name"} className={s.animationLogo}/>
                    <span className={s.blast} >a</span>
                    <span className={s.blast} >t</span>
                    <span className={s.blast} >e</span>
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
