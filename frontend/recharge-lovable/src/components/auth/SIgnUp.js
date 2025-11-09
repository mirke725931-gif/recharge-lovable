import React from "react";
import {Link} from 'react-router-dom';
import '../../css/auth/SignUp.css';

function SignUp () {

    return (
        <div className="sign_main">
            <div className="sign_header">
                <h1>회원가입</h1>
                <p className="sign_subtitle">Re:charge와 함께 시작하세요</p>
            </div>
            <form className="sign_form_container">
               <div className="sign_form">
                    <div className="signup_form_group">
                        <label className="signup_form_label">아이디</label>
                        <div className="signup_id_form">
                            <input type="text" placeholder="아이디를 입력하세요" className="signup_id_input" />
                            <button type="button" className="signup_id_check_btn">중복확인</button>
                        </div>
                    </div>
                    
                    <div className="signup_form_group">
                        <label className="signup_form_label">비밀번호</label>
                        <input type="password" placeholder="비밀번호를 입력하세요" className="signup_pwd" />
                    </div>
                    
                    <div className="signup_form_group">
                        <label className="signup_form_label">이메일</label>
                        <input type="email" placeholder="이메일을 입력하세요 (아이디/비밀번호 찾기 본인 확인용)" className="signup_email" />
                    </div>
                    
                    <div className="signup_form_group">
                        <label className="signup_form_label">이름</label>
                        <input type="text" placeholder="이름을 입력하세요" className="signup_name" />
                    </div>
                    
                    <div className="signup_form_group">
                        <label className="signup_form_label">생년월일</label>
                        <input type="text" placeholder="생년월일 8자리 (예: 19900101)" className="signup_birth" />
                    </div>
                    
                    <div className="signup_form_group">
                        <label className="signup_form_label">성별</label>
                        <div className="signup_gender_form">
                            <label className="gender_option">
                                <input type="radio" name="gender" value="male" /> 
                                <span>남자</span>
                            </label>
                            <label className="gender_option">
                                <input type="radio" name="gender" value="female" /> 
                                <span>여자</span>
                            </label>
                        </div>
                    </div>
                    
                    <div className="signup_form_group">
                        <label className="signup_form_label">전화번호</label>
                        <div className="signup_phone_form">
                            <select className="singup_select_sdi_code">
                                <option>010</option>
                                <option>011</option>
                                <option>016</option>
                                <option>017</option>
                                <option>019</option>
                            </select>
                            <input type="text" placeholder="전화번호를 입력하세요" className="singup_phone_input" />
                        </div>
                    </div>
                    
                    <div className="signup_form_group">
                        <label className="signup_form_label">차종</label>
                        <input type="text" placeholder="차종을 입력하세요" className="singup_vehicle_input" />
                    </div>
               </div>
               <button type="submit" className="signup_btn">
                   <Link to="/signup_result">회원가입</Link>
               </button>
            </form>
        </div>
    )
}

export default SignUp;