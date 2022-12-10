import React from "react";
import './main.css'

const Button = ({fontSize, color, action, title, bgc}) => {

    const style = {
        backgroundColor: bgc,
        color: color,
        fontSize: fontSize,
        margin: '0 2px'
    }

    return(
        <button className={'btn'} style={style} onClick={action}>
            {title}
        </button>
    )
}

export default Button;