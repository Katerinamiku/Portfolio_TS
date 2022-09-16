import React from 'react';
import s from './MySkills.module.scss'
import sCommon from '../../common/Styles/Container.module.scss'
import Skill from "./Skill/Skill";
import Title from "../../common/Components/Title/Title";

const MySkills = () => {
    return (
        <div className={s.mySkillsBlock} id={'skills'}>
            <div className={` ${sCommon.container} ${s.mySkillsContainer}`}>
                <Title title={'My skills'}/>
                <div className={s.skills}>
                    <Skill iconName={'Web-development'} description={'To manage SPA development I use Javascript' +
                        ' and Typescript, always expand knowledge in variety of HTML and CSS/SCSS methods '}/>
                    <Skill iconName={'Web-design'} description={'Experience in using such web-design tools as' +
                        ' FIGMA, Bootstrap, MaterialUI, ReduxForm'}/>
                    <Skill iconName={'Testing'} description={'TDD approach: Unit Tests, Storybook, Snapshot'}/>
                    <Skill iconName={'React'} description={'Experience in creating SPA using React. Familiar with' +
                        ' React hookes, HOCs'}/>
                    <Skill iconName={'Redux'} description={'Active user of Redux library: Thunks, Toolkit'}/>
                    <Skill iconName={'Server API'} description={'RestAPI, Axios, Postman'}/>
                    <Skill iconName={'Social skills'} description={'Team-player, sense of humor, sociable,' +
                        ' proactive. I will fit well into any kind of team and will seek to maintain a positive atmosphere.'}/>
                    <Skill iconName={'Personal goals'} description={'Quick self-education in various fields:' +
                        ' technology, languages, software tools, development methods, marketing, legalisation and etc.'}/>
                </div>
            </div>
        </div>
    );
};

export default MySkills;
