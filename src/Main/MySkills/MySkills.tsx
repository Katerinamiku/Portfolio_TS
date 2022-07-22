import React from 'react';
import s from './MySkills.module.css'
import sCommon from '../../common/Styles/Container.module.css'
import Skill from "./Skill/Skill";

const MySkills = () => {
    return (
        <div className={s.mySkillsBlock}>
            <div className={` ${sCommon.container} ${s.mySkillsContainer}`}>
                <div className={s.title}>
                    <h2>My Skills</h2>
                    <p>Abilities I'm using for productive work</p>
                </div>
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
