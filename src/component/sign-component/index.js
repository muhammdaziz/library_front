import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {ACCESS_TOKEN, BASE_PATH, REFRESH_TOKEN} from "../../utils/constants";
import {toast, ToastContainer } from "react-toastify";
import IMG from "../../assets/img/students-reading-book-together-6024654-4989651.png";
import './main.css'

const Sign = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('superAdmin@admin.com');

    const [password, setPassword] = useState('123');

    const togglePassword = (e) => {
        document.getElementById('password-input').setAttribute('type', e ? 'text' : 'password');
    }

    const signIn = () => {
        axios.post(
            BASE_PATH + "/auth/sign-in",
            {email, password}
        ).then(res => {
            let data = res.data.data;

            localStorage.setItem(ACCESS_TOKEN, data.tokenType + data.accessToken);
            localStorage.setItem(REFRESH_TOKEN, data.tokenType + data.refreshToken);

            navigate('/')
        }).catch(err =>
            {
                toast.error(err.response.data.errors[0].msg);
            }
        )
    }

    return(
        <div className={'login'}>
            <div className={'login-form-box'}>
                <img src={IMG} alt={'img'}/>

                <div className={'form-box'}>
                    <h1 className={'welcome'}>Welcome !</h1>

                    <label className={'label'} htmlFor={'email'}>Email Address</label>
                    <input required
                           onChange={(e) => setEmail(e.target.value)}
                           name={'email'}
                           value={email}
                           type={'email'}/>

                    <label className={'label'} htmlFor={'password'}>Password</label>
                    <input required
                           id={'password-input'}
                           onChange={(e) => setPassword(e.target.value)}
                           value={password}
                           name={'password'}
                           type={'password'}/>

                    <div className={'form-control-box'}>
                        <input onChange={(e) => togglePassword(e.target.checked)}
                               className={'remember'}
                               type={'checkbox'}/>
                        <p>Show password</p>
                        <button className={'forget-btn'}>Forget password?</button>
                    </div>

                    <button className={'submit-btn'} onClick={signIn}>Sign in</button>

                    <div className={'sign-control'}>
                        <p>Don't have an account?</p>
                        <button className={'switch-sign-btn'}>Sign up</button>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Sign;