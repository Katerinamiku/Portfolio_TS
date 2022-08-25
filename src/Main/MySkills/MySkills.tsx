import React from 'react';
import s from './MySkills.module.css'
import sCommon from '../../common/Styles/Container.module.css'
import Skill from "./Skill/Skill";
import Title from "../../common/Components/Title/Title";

const MySkills = () => {
    return (
        <div className={s.mySkillsBlock}>
            <div className={` ${sCommon.container} ${s.mySkillsContainer}`}>
                <Title title={'My skills'}/>
                <div className={s.skills}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </div>
    );
};

export default MySkills;
