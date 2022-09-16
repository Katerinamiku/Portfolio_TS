import React, {useState} from 'react';
import s from './Nav.module.scss'
import {Squash as Hamburger} from 'hamburger-react';

const Nav = () => {
    const [isActive, setIsActive] = useState<boolean>(false)
    return (
        <div className={s.navigationMenu}>
            <div className={s.hambMenu} onMouseLeave={()=>setIsActive(false)}>
                {isActive
                    ? <div className={s.nav}>
                        <div className={s.menu}>
                            <a href={'#home'}>Home</a>
                            <a href={'#skills'}>My Skills</a>
                            <a href={'#projects'}>Projects</a>
                            <a href={'#contacts'}>Contacts</a>
                        </div>
                    </div>
                    : <div></div>
                }
                <Hamburger color={"#08fdd8"} size={30} toggled={isActive} toggle={setIsActive}/>
            </div>

            <div className={s.navBlock}>
                <a href={'#home'}>Home</a>
                <a href={'#skills'}>My Skills</a>
                <a href={'#projects'}>Projects</a>
                <a href={'#contacts'}>Contacts</a>
            </div>
        </div>);
};

export default Nav;
