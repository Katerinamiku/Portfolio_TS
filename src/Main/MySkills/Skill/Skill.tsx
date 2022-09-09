import React from 'react';
import s from './Skill.module.scss'
import {SkillsNameType, SvgSelector} from "../../../common/Components/svgSelector/svgSelector";

type SkillPropsType = {
    skillName: SkillsNameType
    description: string
}


const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skillblock}>
            <SvgSelector skillName={props.skillName}/>
            <h3 className={s.skillName}>{props.skillName}</h3>
            <span className={s.skillDescription}>{props.description}</span>
        </div>
    );
};

export default Skill;
