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
            <a className={s.imgBlock} style={props.style} href={props.projectHref} target="_blank">
                    <div className={s.circle}>
                        <div  className={s.viewLink} >View</div>
                    </div>
            </a>
            <div className={s.textBlock}>
                <div className={s.projectTitle}>{props.title}</div>
                <span className={s.projectDescription}>{props.description}</span>
            </div>
        </div>
    )
        ;
};

export default Project;
