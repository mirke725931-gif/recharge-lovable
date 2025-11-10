import React from "react";
import { Link } from "react-router-dom";
import '../../css/admin/AdminSidebar.css'; 

function AdminSidebar() {
    return (
        <aside className="admin_nav_container">
           
            <h2>관리자 메뉴</h2>
            <ul className="admin_content_nav">
                <li><Link to="/admin/reportmanage">회원관리</Link></li>
                <li><Link to="/admin/postmanage">게시판 관리</Link></li>
                <li><Link to="/admin/noticemanage">공지사항 관리</Link></li>
            </ul>
        </aside>
    );
}

export default AdminSidebar;