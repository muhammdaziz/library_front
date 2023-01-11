import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {ACCESS_TOKEN, BASE_PATH, REFRESH_TOKEN} from "../../utils/constants";
import {toast, ToastContainer } from "react-toastify";
import './main.css'
import IMG from "../../assets/img/students-reading-book-together-6024654-4989651.png";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import RegisterForm from "./register-form";
import SignForm from "./sign-form";

const Sign = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('superAdmin@admin.com');

    const [password, setPassword] = useState('123');

    const [registering, setRegistering] = useState(false)

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
        <Container className={'login'}>
            <Row>
                <Col style={{}} sm={8}>
                    <img src={IMG} alt={'img'}/>
                </Col>

                <Col sm={4} className={'form-box'}>
                    <h1 className={'welcome'}>Welcome !</h1>

                    {registering ?
                        <RegisterForm/>
                        :
                        <SignForm/>
                    }

                    <div className={'sign-control'}>
                        <p>Don't have an account?</p>
                        <button className={'switch-sign-btn'}>Sign up</button>
                    </div>
                </Col>
            </Row>
            <ToastContainer/>
        </Container>
    )
}

export default Sign;