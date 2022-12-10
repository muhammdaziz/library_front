import React from "react";
import './main.css'

const Bar = (props) => {

    const style = {
        width: '17%',
        height: '100%',
        backgroundColor: 'rgb(204, 221, 246)'
    }

    return(
        <div style={style}>
            <div className='user-box card'>
                <div className={'avatar'}>
                    <img src={require('../../assets/img/111.png')} alt='admin avatar'/>
                </div>
                <div className={'admin-name-box'}>
                    <p className={'name'}>{props.user.name}</p>
                    <p className={'role'}>{props.user.role}</p>
                </div>
            </div>
            <div className='pages card'>
                <ul className={'list'}>
                    <li>
                        <button>
                            USERS
                        </button>
                    </li>
                    <li>
                        <button>
                            BOOKS
                        </button>
                    </li>
                    <li>
                        <button>
                            PAGE 1
                        </button>
                    </li>
                    <li>
                        <button>
                            PAGE 2
                        </button>
                    </li>
                    <li>
                        <button>
                            PAGE 3
                        </button>
                    </li>
                    <li>
                        <button>
                            PAGE 4
                        </button>
                    </li>
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