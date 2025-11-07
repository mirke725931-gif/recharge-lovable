import React from "react";
import {Link} from 'react-router-dom';
import '../css/admin/NoticeBoard.css';

function NoticeBoard() {
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

        <div className="community_write-container">
       
       <h1>공지사항 작성</h1>

           {/* 상단 제목 */}
       <div className="community_write-header">

          {/* 제목 입력 */}

        <input
          type="text"
          className="community_write-title"
          placeholder="제목을 입력하세요"
        required/>
      </div>

      {/* 입력 폼 */}
      <div className="community_write-form">
      

        {/* 내용 입력 */}
        <textarea
          className="community_write-textarea"
          placeholder="내용을 입력하세요"
          value=""
        required/>
      </div>
      <div className="community_write-imagebox-container">
        {/* 이미지 첨부 */}
        <div className="community_write-imagebox">
          <label htmlFor="imageUpload" className="community_image-label">
            이미지 첨부
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
          />

          </div>

          {/* {image && <img src={image} alt="미리보기" className="community_preview-image" />} */}
        
        </div>
            <div className="community_submit-container">
            {/* 등록 버튼 */}
            <button className="community_submit-btn">
          등록하기
            </button>
            </div>
        </div>
    </div>
    );
}


export default NoticeBoard;