import React from 'react';
import s from './Button.module.scss'

type TitlePropsType = {
    title: string
}

const Button = (props:TitlePropsType) => {
    return (
        <div className={s.title}>
            <h2>{props.title}</h2>
        </div>

    );
}

export default Button;
