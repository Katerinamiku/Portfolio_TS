import React from 'react';
import s from './Skill.module.scss'

const Skill = () => {
    return (
        <div className={s.skillblock}>
            <img src={''} alt={'Image of skill'}/>
            <h3 className={s.skillName}>Skill</h3>
            <span className={s.skillDescription}>Description</span>
        </div>
    );
};

export default Skill;
