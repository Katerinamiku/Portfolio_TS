import React from 'react';
import s from './Skill.module.css'

const Skill = () => {
    return (
        <div className={s.skillblock}>
            <img src={''} alt={'Image of skill'}/>
            <h3>Skill</h3>
            <span>Description</span>
        </div>
    );
};

export default Skill;
