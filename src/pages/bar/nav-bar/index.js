import React from "react";
import './main.css'

const NavBar = () => {

    const style = {
        height: '33px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        backgroundColor: 'rgb(134, 174, 232)',
        padding: '7px'
    }

    return(
        <div style={style}>
            <div className={'logo'}>
                <img src={require('../../assets/img/111.png')} alt={'logo'}/>
                <h3>Lib</h3>
            </div>
        </div>
    )
}

export default NavBar;