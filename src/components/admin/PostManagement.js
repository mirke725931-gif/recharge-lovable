import React from "react";
import {Link} from 'react-router-dom';
import '../css/admin/PostManagement.css';

function PostManagement() {
    //관리자 사이드바


    //게시글관리 데이터


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
            <main className="PostManagement_main_content">
                <h1>게시판 관리</h1>

                    <form className="PostManagement_form1">
                        <div id="PostManagement_form1_col1">
                            <select>
                                <option value="">자유게시판</option>
                                <option value="">영화 추천 게시글</option>
                                <option value="">음악 추천 게시글</option>
                            </select>
                            <button id="PostManagement_view_btn">이동</button>
                        </div>
                            
                    </form>
               <table className="PostManagement_table">
                    <thead>
                        <tr>
                            
                            <th id="PostManagement_table_No">번호</th>
                            <th id="PostManagement_table_title">제목</th>
                            <th id="PostManagement_table_date">작성일</th>
                            <th id="PostManagement_table_writer">작성자</th>
                            <th id="PostManagement_manage">관리</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td>1</td>
                            <td>제목</td>
                            <td>2025.11.03</td>
                            <td>작성자1</td>
                            <td>
                            <button id="PostManagement_delete">삭제</button></td>
                        </tr>
                    </tbody>
               </table>
                {/*페이지네이션 */}
                {/* npm install react-paginate*/}
            </main>
        </div>
    );
}

export default PostManagement;