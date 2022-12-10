import React from "react";
import './main.css'

const Profile = ({user}) => {

    return(
        <div className={'profile'}>
            <div className={'box-first'}>
                <p>Signed in as <b>{user.username}</b></p>
            </div>
            <div className={'box'}>
                <button>Your profile</button>
                <button>Help</button>
                <button>Setting</button>
            </div>
            <div className={'box'}>
                <button>Sign out</button>
            </div>
            <div className={'cursor'}></div>
        </div>
    )
}

export default Profile;