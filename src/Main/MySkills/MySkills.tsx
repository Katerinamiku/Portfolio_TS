import React from 'react';
import s from './MySkills.module.scss'
import sCommon from '../../common/Styles/Container.module.scss'
import Skill from "./Skill/Skill";
import Title from "../../common/Components/Title/Title";
import { Fade } from 'react-awesome-reveal';

const MySkills = () => {
    return (
        <div className={s.mySkillsBlock} id={'skills'}>
            <Fade cascade={true} damping={0.5}>
                <div className={` ${sCommon.container} ${s.mySkillsContainer}`}>
                    <Title title={'My skills'}/>
                    <div className={s.skills}>
                        <Skill iconName={'Web-development'} description={'Javascript' +
                            ' and Typescript. Always expand knowledge in variety of HTML and CSS/SCSS methods'}/>
                        <Skill iconName={'Web-design'} description={'Experience in using such web-design tools as' +
                            ' FIGMA, MaterialUI, Formik, Bootstrap'}/>
                        <Skill iconName={'React'} description={'Creating SPA using React. Familiar with' +
                            ' React hookes, HOCs, react-router-dom'}/>
                        <Skill iconName={'Redux'} description={'User of Redux library: react-redux, thunks,' +
                            ' redux-form'}/>
                        <Skill iconName={'Server API'} description={'Understanding of the client-server ' +
                            'architecture: RestAPI, Axios. Used Postman and MocAPI'}/>
                        <Skill iconName={'Testing'} description={'Acquainted with TDD approach: Jest, UI\n' +
                            'functionality control with Storybook'}/>
                        <Skill iconName={'Social skills'} description={'Team-player, sense of humor, sociable. I will fit well into any kind of team and will seek to maintain a positive atmosphere'}/>
                        <Skill iconName={'Personal goals'} description={'Quick self-education in various fields:' +
                            ' technologies, tools, development methods and etc'}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default MySkills;
