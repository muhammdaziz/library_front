import React from "react";
import './main.css'

const Bar = ({user, changeModule}) => {

    const style = {
        width: '17%',
        height: '100%',
        // backgroundColor: 'rgb(204, 221, 246)'
        backgroundColor: 'rgba(36,41,47,0.94)'
    }

    return(
        <div className={'side-bar-box'} style={style}>
            <div className='user-box card'>
                <div className={'admin-name-box'}>
                    <p className={'name'}>{user.firstname + " "+user.lastname}</p>
                    <p className={'role'}>{user.role}</p>
                </div>
            </div>
            <div className='pages card'>
                <ul className={'list'}>
                    {user.pages.map((page, index) =>
                        <li key={index}>
                            <button onClick={() => changeModule(page.toLowerCase())}>
                                {page}
                            </button>
                        </li>
                    )}
                </ul>
            </div>
            <div className='footer card'>
                <p>
                    aaa aaaa aaaa <br/> vdh hhhh ddddd
                </p>
            </div>
        </div>
    )
}

export default Bar;