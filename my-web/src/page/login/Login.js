import React from 'react';
import ReactDOM from 'react-dom';
import './Login.css';
import { Button, Input } from 'antd';
import MyTabBar from '../tab/TabBar';

export default function Login() {
    function onChangeUserName() {
    }
    function onChangePassword() {
    }
    function login() {
        setTimeout(() => {
            loginSuccess()
        }, 3);
    }
    function loginSuccess() {
        ReactDOM.render(<MyTabBar />, document.getElementById('root'));
    }
    //login logic 
    return (
        <div className="Login">
            <div className="Login-login-text">
                <Input style={{ width: 300 }}
                    placeholder="Enter your username"
                    value={""}
                    onChange={onChangeUserName}
                />
                <br />
                <Input.Password style={{ width: 300, alignItems: 'flex-start', justifyContent: 'flex-start' }}
                    placeholder="Enter your password"
                    value={""}
                    visibilityToggle={true}
                    onChange={onChangePassword}
                />
                <br />
                <Button type="primary" onClick={login}>{'sss'}</Button>
            </div>
        </div>
    );
}
