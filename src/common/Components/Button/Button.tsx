import React from 'react';
import s from './Button.module.scss'

type ButtonPropsType = {
    text: string
    btnHref?: string
    type?: string
}

const Button = (props:ButtonPropsType) => {
    return (
        <div className={s.btnContainer}>
            <span></span>
            <a className={s.btn} href={props.btnHref} type={props.type}>
                <span>{props.text}</span>
            </a>
        </div>

    );
}

export default Button;
