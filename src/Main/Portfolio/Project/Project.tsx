import React from 'react';
import s from './Project.module.scss';

type ProjectPropsType = {
    title: string
    description: string
    style: any
}

const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.imgBlock} style={props.style}>
                <a href=""><img src="" alt=""/></a>
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
