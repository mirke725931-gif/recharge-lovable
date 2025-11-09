import React from "react";
import {Link} from 'react-router-dom';
import '../../css/admin/NoticeManagement.css';

function NoticeManagement() {
    //관리자 사이드바


    //공지사항 데이터


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
            <main className="NoticeManagement_main_content">
                <h1>공지사항 관리</h1>

                    <form className="NoticeManagement_form1">
                        <div id="NoticeManagement_form1_col1">
                            <input type="text"></input>
                            <button id="NoticeManagement_search">검색</button>
                            <Link to="/NoticeBoard"><button id="write_btn">공지글 작성</button></Link>
                        </div>
                            
                    </form>
               <table className="NoticeManagement_table">
                    <thead>
                        <tr>
                            
                            <th id="NoticeManagement_table_No">번호</th>
                            <th id="NoticeManagement_table_title">제목</th>
                            <th id="NoticeManagement_table_date">작성일</th>
                            <th id="NoticeManagement_manage">관리</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td>1</td>
                            <td>제목</td>
                            <td>2025.11.03</td>
                            <td><button id="NoticeManagement_modify">수정</button>
                            <button id="NoticeManagement_delete">삭제</button></td>
                        </tr>
                    </tbody>
               </table>
                {/*페이지네이션 */}
                {/* npm install react-paginate*/}
            </main>
        </div>
    );
}


export default NoticeManagement;