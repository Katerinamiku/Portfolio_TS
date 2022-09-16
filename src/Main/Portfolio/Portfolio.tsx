import React from 'react';
import s from "./Portfolio.module.scss";
import sCommon from "../../common/Styles/Container.module.scss";
import Project from "./Project/Project";
import Title from "../../common/Components/Title/Title";
import work1 from "../../common/Styles/images/projects/work1.jpg";
import work2 from "../../common/Styles/images/projects/work2.jpg";
import sn from "../../common/Styles/images/projects/sn.jpg";
import todo from "../../common/Styles/images/projects/todolist.jpg";
import cardsApp from "../../common/Styles/images/projects/cards.jpg";
import Button from "../../common/Components/Button/Button";

const Portfolio = () => {
    const maroonProject = {backgroundImage: `url(${work2})`,};
    const visitPage = {backgroundImage: `url(${work1})`,};
    const socialNetwork = {backgroundImage: `url(${sn})`,};
    const todolist = {backgroundImage: `url(${todo})`,};
    const cards = {backgroundImage: `url(${cardsApp})`,};
    return (
        <div className={s.portfolioBlock} id={'projects'}>
            <div className={` ${sCommon.container} ${s.portfolioContainer}`}>
                <Title title={"Projects"}/>
                <div className={s.projects}>
                    <Project title={'Maroon cosmetics'} description={'My first project with' +
                        ' Figma'} style={maroonProject}/>
                    <Project title={'Visit page'} description={'Learning to work with Bootstrap'} style={visitPage}/>
                    <Project title={'Social network'} description={'Project made while learning React'}
                             style={socialNetwork}/>
                    <Project title={'Todolist App'} description={'Simple task management application'}
                             style={todolist}/>
                    <Project title={'Learning cards'} description={'Application for better studying using memory cards'}
                             style={cards}/>

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
