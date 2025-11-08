import React from "react";
import {Link} from "react-router-dom"
import '../../css/auth/FindPwd.css';

function FindPwd() {

    return(
        <div className="find_pwd_main">
            <div className="find_pwd_header">
                <h1>비밀번호 찾기</h1>
                <p className="find_pwd_subtitle">가입 시 등록한 이메일로 비밀번호를 재설정할 수 있습니다</p>
            </div>
            <form className="find_pwd_form_container">
                <div className="find_pwd_radio_group">
                    <label className="find_pwd_radio_option">
                        <input type="radio" name="findMethod" value="email" defaultChecked /> 
                        <span>가입 이메일로 찾기</span>
                    </label>
                </div>
                <div className="find_pwd_form">
                    <div className="find_pwd_form_group">
                        <label className="find_pwd_form_label">아이디</label>
                        <input type="text" placeholder="아이디를 입력하세요" className="find_pwd_input_id"/>
                    </div>
                    <div className="find_pwd_form_group">
                        <label className="find_pwd_form_label">이름</label>
                        <input type="text" placeholder="이름을 입력하세요" className="find_pwd_input_name"/>
                    </div>
                    <div className="find_pwd_form_group">
                        <label className="find_pwd_form_label">가입 이메일</label>
                        <input type="email" placeholder="이메일을 입력하세요" className="find_pwd_input_email"/>
                    </div>
                </div>
                <button type="button" className="find_pwd_btn">
                    <Link to="/findpwd_result">비밀번호 찾기</Link>
                </button>
            </form>
        </div>
    )
}
export default FindPwd;