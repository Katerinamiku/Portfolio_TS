import React from 'react';
import s from './Footer.module.css'
import sCommon from "../common/Styles/Container.module.css";

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={` ${sCommon.container} ${s.footerContainer}`}>
                <h3>Name</h3>
                <span>2022 Copyright. All Rights Reserved </span>
            </div>
        </div>
    );
};

export default Footer;
