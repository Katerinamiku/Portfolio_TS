import React from 'react';
import s from './Nav.module.css'

const Nav = () => {
    return (
        <div className={s.navBlock}>
            <a href="">Home</a>
            <a href="">About Me</a>
            <a href="">My Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </div>
    );
};

export default Nav;
