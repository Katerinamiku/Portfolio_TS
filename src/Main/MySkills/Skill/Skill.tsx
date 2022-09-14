import React from 'react';
import s from './Skill.module.scss'
import {skillIconNameType, ImagesSelector} from "../../../common/Components/svgSelector/ImagesSelector";

type SkillPropsType = {
    iconName: skillIconNameType
    description: string
}

const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skillblock}>
            <ImagesSelector iconName={props.iconName}/>
            <h3 className={s.skillName}>{props.iconName}</h3>
            <span className={s.skillDescription}>{props.description}</span>
        </div>
    );
};

export default Skill;
