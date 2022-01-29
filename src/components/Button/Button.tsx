import React from 'react';
import classes from './Button.module.css'

function Button(props: any) {
    return (
        <button className={classes.button}>Записаться</button>
    );
}

export default Button;