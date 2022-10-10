import React, {useState} from 'react';
import s from './Project.module.scss';

type ProjectPropsType = {
    title: string
    description: string
    style: any
    projectHref: string
}

const Project = (props: ProjectPropsType) => {

    return (
        <div className={s.projectBlock}>
            <div className={s.imgBlock} style={props.style} >
                    <div className={s.circle}>
                        <a href={props.projectHref} className={s.viewLink} target="_blank">View</a>
                    </div>
            </div>
            <div className={s.textBlock}>
                <div className={s.projectTitle}>{props.title}</div>
                <span className={s.projectDescription}>{props.description}</span>
            </div>
        </div>
    )
        ;
};

export default Project;
