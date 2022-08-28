import React from 'react';
import s from './Header.module.scss';
import Nav from "./Nav/Nav";
import Logo from "./Logo";


const Header = () => {
    return (
        <div className={s.header}>
            <Logo/>
            <Nav/>
        </div>
    );
};

export default Header;
