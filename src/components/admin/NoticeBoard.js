import React,{useState} from "react";
import {Link}  from 'react-router-dom';
import {useNavigate}  from 'react-router-dom';
import {createNotice} from "../../api/NoticeApi"
import axios from "axios";
import '../../css/admin/NoticeBoard.css';


function NoticeBoard() {
    
   const[title, setTitle] = useState("");
   const[content, setContent] = useState("");
   const navigate = useNavigate();

   const handleSubmit = async () => {
     if (!title || !content) {
      alert("제목과 내용을 입력해주세요");
      return;
     }
   
     try {
      await axios.post("http://localhost:10809/recharge/api/notice",{
        noticeTitle: title,
        noticeContent : content,
        userId:"admin",   
     });
       alert("공지 등록 완료!");
       setTitle("");
       setContent("");
    
    }catch (err){
      console.error("공지등록실패:", err);
      alert("등록실패");
     }
    };

    return (

        //관리자사이드바
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

        <div className="noticeboard_write-container">
       
       <h1>공지사항 작성</h1>

           {/* 상단 제목 */}
       <div className="noticeboard_write-header">

          {/* 제목 입력 */}

        <input
          type="text"
          className="noticeboard_write-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        required/>
      </div>

      {/* 입력 폼 */}
      <div className="noticeboard_write-form">
      

        {/* 내용 입력 */}
        <textarea
          className="noticeboard_write-textarea"
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용을 입력하세요"
          value={content}
        required/>
      </div>

        </div>
            <div className="noticeboard_submit-container">
            {/* 등록 버튼 */}
            <button className="noticeboard_submit-btn" onClick={handleSubmit}>
          등록하기
            </button>
            </div>
        </div>
   
    );
}


export default NoticeBoard;