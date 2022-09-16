import React from 'react';
import s from '././Nav/Nav.module.scss';

const logo1 = require('./../common/Styles/images/logo2.png');

const Logo = () => {

    return (
        <div className={s.logo}>
            <a href={'#home'}> <img src={logo1} alt={'logo'}/>
            </a>
        </div>
    );
};

export default Logo;
