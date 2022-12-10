import React, {useState} from "react";
import './main.css';
import Profile from "../profile";

const Navbar = () => {

    const [profile, setProfile] = useState(false);

    const [user, setUser] = useState({
        pages: ['Home', 'Shop', 'Promotions', 'About us', 'Blog', 'Pages'],
        avatar: '../../../assets/img/logo.png',
        username: 'muhammdaziz'
    });

    const toggleProfile = () => {
        setProfile(!profile);
    }

    return(
        <div className={'navbar'}>
            <div className={'logo'}>
                <img src={require('../../../assets/img/logo.png')} alt={'logo'}/>
                <h3>Library</h3>
            </div>
            <div className={'page-box'}>
                {user.pages.map((page, index) =>
                    <button key={index} className={'page btn'}>
                        {page}
                    </button>
                )}
            </div>
            <div className={'profile-box'}>
                <button
                    onClick={toggleProfile}
                >
                    <img src={require('../../../assets/img/user-logo.jpeg')} alt={'avatar'}/>
                    <svg width="50" height="50" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 7.49998L9 10.5L12 7.49998" stroke="rgb(190, 191, 193)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                {profile ? <Profile user={user}/> : ''}
            </div>
        </div>
    )
}

export default Navbar;