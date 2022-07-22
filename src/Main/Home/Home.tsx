import React from 'react';
import s from './Home.module.css';
import sCommon from '../../common/Styles/Container.module.css';


const Home = () => {
    return (
        <div className={s.homeBlock}>
            <div className={sCommon.container}>
            <div className={s.intro}>
                <h1>Intro</h1>
                <p>JS animated text </p>
            </div>
            <div className={s.photo}>Photo</div>
            </div>
        </div>
    );
};

export default Home;
