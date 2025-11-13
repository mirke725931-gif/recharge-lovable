import React from "react";
import {Link} from 'react-router-dom';
import '../../css/admin/UserManagement.css';

    function UserManagement(){
        
    //관리자 사이드바

    //회원관리 데이터

        return (
        <div className="admin_container">
            {/* admin sidebar */}
            <aside className="admin_nav_container">
                <img className="admin_logo" src="/image/white.png" alt="logo"/>
                <h2>관리자 메뉴</h2>
                <ul className="admin_content_nav">
                    <li><Link to="/UserManagement">회원관리</Link></li>
                    <li><Link to="/PostManagement">게시판 관리</Link></li>
                    <li><Link to="/NoticeManagement">공지사항 관리</Link></li>
                </ul>
            </aside>

            {/* 본문 */}
            <main className="UserManagement_main_content">
                <h1>회원 관리</h1>

                    <form className="UserManagement_form1">
                        <div id="UserManagement_form1_col1">
                            <select>
                                <option value="">아이디</option>
                                <option value="">이메일</option>
                                <option value="">이름</option>
                                <option value="">댓글 작성 정지</option>
                                <option value="">게시글 작성 정지</option>
                            </select>
                            <input type="text" value=""></input>
                            <button id="UserManagement_view_btn">이동</button>
                            <select>
                                <option value="">댓글 작성 정지</option>
                                <option value="">게시글 작성 정지</option>
                                <option value="">게시글 정지 해제</option>
                                <option value="">댓글 정지 해제</option>
                            </select>
                            <button id="UserManagement_view_btn">적용</button>

                        </div>
                            
                    </form>
               <table className="UserManagement_table">
                    <thead>
                        <tr>
                            <th id="UserManagement_table_checkbox">선택</th>
                            <th id="UserManagement_table_id">아이디</th>
                            <th id="UserManagement_table_email">email</th>
                            <th id="UserManagement_table_name">이름</th>
                            <th id="UserManagement_table_role">등급</th>
                            <th id="UserManagement_state">상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td><input type="checkbox"></input></td>
                            <td>아이디</td>
                            <td>aaaa@recharge.com</td>
                            <td>이름1</td>
                            <td>일반회원</td>
                            <td>댓글 작성 정지</td>
                        </tr>
                    </tbody>
               </table>
 
                {/*페이지네이션 */}
                {/* npm install react-paginate*/}
            </main>
        </div>
    );
}

export default UserManagement;