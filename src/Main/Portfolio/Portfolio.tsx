import React from 'react';
import s from "./Portfolio.module.scss";
import sCommon from "../../common/Styles/Container.module.scss";
import Project from "./Project/Project";
import Title from "../../common/Components/Title/Title";
import work1 from "../../common/Styles/images/projects/work1.jpg";
import work2 from "../../common/Styles/images/projects/work2.jpg";
import sn from "../../common/Styles/images/projects/sn.jpg";
import todo from "../../common/Styles/images/projects/todolist.jpg";
import clickApp from "../../common/Styles/images/projects/clickcounter.jpg";
import Button from "../../common/Components/Button/Button";

const Portfolio = () => {
    const maroonProject = {backgroundImage: `url(${work2})`,};
    const visitPage = {backgroundImage: `url(${work1})`,};
    const socialNetwork = {backgroundImage: `url(${sn})`,};
    const todolist = {backgroundImage: `url(${todo})`,};
    const clickcounter = {backgroundImage: `url(${clickApp})`,};
    return (
        <div className={s.portfolioBlock} id={'projects'}>
            <div className={` ${sCommon.container} ${s.portfolioContainer}`}>
                <Title title={"Projects"}/>
                <div className={s.projects}>
                    <Project title={'Todolist App'} description={'Simple task management application.' +
                        ' Actions with task lists and tasks. Switch to dark/light mode'}
                             style={todolist} projectHref={'https://katerinamiku.github.io/todolist'}/>
                    <Project title={'Social network'} description={'Basic social' +
                        ' network functionality such as login/logout, pagination, profile page, messages, etc on' +
                        ' React.'}
                             style={socialNetwork} projectHref={'https://katerinamiku.github.io/samuraiLessons'}/>
                    <Project title={'Click Counter'} description={'Simple click counter made using React and' +
                        ' typescript with local storage'}
                             style={clickcounter} projectHref={'https://katerinamiku.github.io/ClickCounter'}/>
                    <Project title={'Maroon cosmetics'} description={'Simple draft HTML page. Study project' +
                        ' made using Figma'} style={maroonProject} projectHref={'https://katerinamiku.github.io/MaroonProject/index.html'}/>
                    <Project title={'Page for marketing company'} description={'Draft page for marketing company' +
                        ' services was made like a study project to learn Bootstrap'} style={visitPage} projectHref={'https://katerinamiku.github.io/bootstrapCite/index.html'}/>
                    <div className={s.gitLink}>
                        <span className={s.gitLinkText}>For more, please, visit my</span>
                        <Button text={'GitHub Page'} btnHref={'https://github.com/Katerinamiku'}/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Portfolio;
