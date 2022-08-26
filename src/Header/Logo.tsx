import React from 'react';
import s from '././Nav/Nav.module.scss';


const logo = require('./../common/Styles/images/logo3.png');
const logo1 = require('./../common/Styles/images/logo2.png');

const Logo = () => {

    return (
        <div className={s.logo}>
            <img src={logo} alt={'logo'}/>
            <img src={logo1} alt={'logo'}/>
        </div>
    );
};

export default Logo;
