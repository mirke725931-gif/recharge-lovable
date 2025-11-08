import React from "react";
import {Link} from "react-router-dom"
import '../../css/auth/FindId.css';

function FindId() {

    return(
        <div className="find_id_main">
            <div className="find_id_header">
                <h1>아이디 찾기</h1>
                <p className="find_id_subtitle">가입 시 등록한 이메일로 아이디를 찾을 수 있습니다</p>
            </div>
            <form className="find_id_form_container">
                <div className="find_id_radio_group">
                    <label className="find_id_radio_option">
                        <input type="radio" name="findMethod" value="email" defaultChecked /> 
                        <span>가입 이메일로 찾기</span>
                    </label>
                </div>
                <div className="find_id_form">
                    <div className="find_id_form_group">
                        <label className="find_id_form_label">이름</label>
                        <input type="text" placeholder="이름을 입력하세요" className="find_id_input_name"/>
                    </div>
                    <div className="find_id_form_group">
                        <label className="find_id_form_label">가입 이메일</label>
                        <input type="email" placeholder="이메일을 입력하세요" className="find_id_input_email"/>
                    </div>
                </div>
                <button type="button" className="find_id_btn">
                    <Link to="/findid_result">아이디 찾기</Link>
                </button>
            </form>
        </div>
    )
}
export default FindId;