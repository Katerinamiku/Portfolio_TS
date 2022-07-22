import React from 'react';
import s from "../Portfolio/Portfolio.module.css";
import sCommon from "../../common/Styles/Container.module.css";
import Project from "./Project/Project";

const Portfolio = () => {
    return (
        <div className={s.portfolioBlock}>
            <div className={` ${sCommon.container} ${s.portfolioContainer}`}>
                <div className={s.title}>
                    <h2>My Portfolio</h2>
                </div>
                <div className={s.projects}>
                    <Project/>
                    <Project/>
                    <Project/>
                </div>
                <div>
                    <a>For more, please visit my Github Page</a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
