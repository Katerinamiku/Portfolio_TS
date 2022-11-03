import React from 'react';
import s from './Button.module.scss'

type ButtonPropsType = {
    text: string
    btnHref?: string
    type?: string
    download?: string
}

const Button = (props:ButtonPropsType) => {
    return (
        <div className={s.btnContainer}>
            <span></span>
            {props.type === 'submit'
                ? <button className={s.btn} type={props.type}>
                    <span>{props.text}</span></button>
                : <a className={s.btn} href={props.btnHref} download={props.download} target="_blank">
                <span>{props.text}</span>
            </a>}
        </div>

    );
}

export default Button;
