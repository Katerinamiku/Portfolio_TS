import React from 'react';
import s from './Footer.module.scss'
import sCommon from "../common/Styles/Container.module.scss";

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={` ${sCommon.container} ${s.footerContainer}`}>
                <h3 className={s.copyroghtName}>Name</h3>
                <span className={s.copyright}>2022 Copyright. All Rights Reserved </span>
            </div>
        </div>
    );
};

export default Footer;
