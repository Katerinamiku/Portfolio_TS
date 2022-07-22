import React from 'react';
import s from './Project.module.css';

const Project = () => {
    return (
        <div className={s.projectBlock}>
            <div className={s.imgBlock}>
                <a href=""><img src="" alt="Project img"/></a>
            </div>
            <div className={s.projectTitle}>Name of the project</div>
            <span>Description</span>
        </div>
    );
};

export default Project;
