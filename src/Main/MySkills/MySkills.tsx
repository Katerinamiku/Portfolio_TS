import React from 'react';
import s from './MySkills.module.scss'
import sCommon from '../../common/Styles/Container.module.scss'
import Skill from "./Skill/Skill";
import Title from "../../common/Components/Title/Title";

const MySkills = () => {
    return (
        <div className={s.mySkillsBlock}>
            <div className={` ${sCommon.container} ${s.mySkillsContainer}`}>
                <Title title={'My skills'}/>
                <div className={s.skills}>
                    <Skill skillName={'Web-development'} description={'To manage SPA development I use Javascript' +
                        ' and Typescript, always expand knowledge in variety of HTML and CSS/SCSS methods '}/>
                    <Skill skillName={'Web-design'} description={'Experience in using such web-design tools as' +
                        ' FIGMA, Bootstrap, MaterialUI, ReduxForm'}/>
                    <Skill skillName={'Testing'} description={'TDD approach: Unit Tests, Storybook, Snapshot'}/>
                    <Skill skillName={'React'} description={'Experience in creating SPA using React. Familiar with' +
                        ' React hookes, HOCs'}/>
                    <Skill skillName={'Redux'} description={'Active user of Redux library: Thunks, Toolkit'}/>
                    <Skill skillName={'Server API'} description={'RestAPI, Axios, Postman'}/>
                    <Skill skillName={'Social skills'} description={'Team-player, sense of humor, sociable,' +
                        ' proactive. I will fit well into any kind of team and will seek to maintain a positive atmosphere.'}/>
                    <Skill skillName={'Personal goals'} description={'Quick self-education in various fields:' +
                        ' technology, languages, software tools, development methods, marketing, legalisation and etc.'}/>
                </div>
            </div>
        </div>
    );
};

export default MySkills;
