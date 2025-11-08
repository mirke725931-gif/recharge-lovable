import React from "react";
import '../../css/auth/Mypage.css';

function Mypage() {
    return(
        <main className="mypage_main">
           <div className="mypage_h2">
            <h2>회원 정보 관리</h2>
            <div className="mypage_container">
                <div className="mypage_row1">
                    <p>아이디</p>
                    <div className="mypage_id">id</div>
                </div>
                <div className="mypage_row2">
                    <p>비밀번호</p>
                    <input type="text" placeholder="새 비밀번호를 입력하세요"></input>
                    <button>수정</button>
                </div>
                <div className="mypage_row3">
                    <p>이메일 주소</p>
                    <input type="text"></input>
                    <button>수정</button>
                </div>
                <div className="mypage_row4">
                    <p>이름</p>
                    <input type="text"></input>
                    <button>수정</button>
                </div>
                <div className="mypage_row5">
                    <p>생년월일</p>
                    <input type="date"></input>
                    <button>수정</button>
                </div>
                <div className="mypage_row6">
                    <p>휴대전화 번호</p>
                    <input type="text"></input>
                    <button>수정</button>
                </div>
                <div className="mypage_row6">
                    <p>차종</p>
                    <input type="text"></input>
                    <button>수정</button>
                </div>
                <div className="mypage_btn_box"> 
                    <button>저장하기</button>
                    <button>취소</button>
                </div>
            </div>
           </div>
        </main>
    );
}
export default Mypage;