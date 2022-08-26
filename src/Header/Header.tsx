import React from 'react';
import s from './Header.module.scss';
import Nav from "./Nav/Nav";
import Logo from "./Logo";


const Header = () => {
    return (
        <div className={s.header}>
            <Nav/>
            <Logo/>
        </div>
    );
};

export default Header;
