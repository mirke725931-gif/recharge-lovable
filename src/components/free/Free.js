import React from "react";
import '../../css/free/Free.css';

function Free() {
    
    return (
        <div className="free_main">
            <div className="free_card_container">
                <div className="free_card_header">
                    <h2>제목</h2>
                    <div className="free_card_info">
                        <span className="author">작성자: </span>
                        <span className="data">작성일: </span>
                        <span className="views">조회수: </span>
                    </div>
                </div>

                <div className="free_card_content">
                    글 내용
                </div>

                <hr className="free_divider" />
                {/* 페이지네이션 */}
                <div className="free_pagenation">

                </div>
            </div>
        </div>
    );
}

export default Free;