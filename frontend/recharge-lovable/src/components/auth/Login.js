import React from "react";
import {Link} from 'react-router-dom';
import '../../css/auth/Login.css';

function Login() {
    
    return(
        <div className="login_main">
            <div className="login_header">
                <h1>로그인</h1>
                <p className="login_subtitle">Re:charge에 오신 것을 환영합니다</p>
            </div>
            <form className="login_form_container">
                <div className="login_form">
                    <div className="login_form_group">
                        <label className="login_form_label">아이디</label>
                        <input type="text" className="userId" placeholder="아이디를 입력하세요"/>
                    </div>
                    <div className="login_form_group">
                        <label className="login_form_label">비밀번호</label>
                        <input type="password" className="userpwd" placeholder="비밀번호를 입력하세요"/>
                    </div>
                    <button type="button" className="login_btn">로그인</button>
                </div>
            </form>
            <div className="find_form">
                <Link to="/findid">아이디</Link>나 <Link to="/findpwd">비밀번호</Link>를 잊으셨나요?
            </div>
            <div className="sign_action_form">
                계정이 없으시다면 <Link to="/agreement">가입하기</Link>
            </div>
        </div>
    )
}

export default Login;