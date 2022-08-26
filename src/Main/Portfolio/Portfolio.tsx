import React from 'react';
import s from "./Portfolio.module.scss";
import sCommon from "../../common/Styles/Container.module.css";
import Project from "./Project/Project";
import Title from "../../common/Components/Title/Title";
import work1 from "../../common/Styles/images/projects/work1.jpg";
import work2 from "../../common/Styles/images/projects/work2.jpg";
import sn from "../../common/Styles/images/projects/sn.jpg";

const Portfolio = () => {
    const maroonProject = {backgroundImage: `url(${work2})`,};
    const visitPage = {backgroundImage: `url(${work1})`,};
    const socialNetwork = {backgroundImage: `url(${sn})`,};
    return (
        <div className={s.portfolioBlock}>
            <div className={` ${sCommon.container} ${s.portfolioContainer}`}>
                <Title title={"Portfolio"}/>
                <div className={s.projects}>
                    <Project title={'Maroon cosmetics'} description={'My first project with' +
                        ' Figma'} style={maroonProject}/>
                    <Project title={'Visit page'} description={'Learning to work with Bootstrap'} style={visitPage}/>
                    <Project title={'Social network'} description={'Project made while learning React'}
                             style={socialNetwork}/>
                </div>
                <div className={s.githablinking}>
                    For more, please visit my
                    <a className={s.gitBtn} href={'https://github.com/Katerinamiku'}>
                        <span>Github Page</span></a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
