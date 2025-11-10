import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../css/community/Community.css";
import { FaThumbsUp } from "react-icons/fa";
import ReportModal from "../../components/modal/ReportModal";

function CommunityDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = { username: "guest", role: "user" }; // 예시 로그인 유저

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  const [prevPost, setPrevPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [reportTarget, setReportTarget] = useState({ type: "post", id: null });

  useEffect(() => {
    // 샘플 게시글 로드
    setPost({
      id: 1,
      user: "전기차사랑",
      title: "충전소 이용 후기",
      content: "좋았어요!",
      date: "2025-01-15",
      views: 100,
      likes: 5,
    });
  }, [id]);

  const handleAddComment = () => {
    if (!commentInput.trim()) return;
    const newComment = {
      id: Date.now(),
      user: "guest",
      content: commentInput,
      date: new Date().toISOString().slice(0, 10),
    };
    setComments([...comments, newComment]);
    setCommentInput("");
  };

  const handleDeleteComment = (id) => {
    if (window.confirm("댓글을 삭제하시겠습니까?")) {
      setComments(comments.filter((c) => c.id !== id));
    }
  };

  const handleReportSubmit = (reason) => {
    alert(`${reportTarget.type === "comment" ? "댓글" : "게시글"}이 신고되었습니다.\n사유: ${reason}`);
    setIsReportOpen(false);
  };

     // 좋아요 클릭
  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  if (!post) return <p>로딩 중...</p>;

  const canDeletePost =
    user.username === post.user || user.role === "admin";
 return (
    <div className="community_board-wrapper">
      <div className="community_board-header">
        <h2>자유게시판</h2>
      </div>

      <div className="community_detail-container">
       
        {/* 게시글 내용 */}
        <div className="community_detail-header">
          
          <div className="community_detail-headertop">
             <h2>{post.title}</h2>
            {/* 🔹 상단 삭제/신고 버튼 */}
             <div className="community_detail-actions">
               {canDeletePost ? (
               <button
                  className="community_delete-btn"
                  onClick={() => alert("게시글 삭제")}
                >
                  삭제
               </button>
               ) : (
               <button
                  className="community_report-btn"
                  onClick={() => {
                  setReportTarget({ type: "post", id: post.id });
                  setIsReportOpen(true);
                }}
                >
              신고
              </button>
               )}
             </div>
           </div>
           <div
            className="community_detail-meta"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <span>{post.user}</span> | <span>{post.date}</span>
            </div>
            <div>
              조회수: {post.views} | <FaThumbsUp /> {likeCount}
            </div>
          </div>
        </div>

        <div className="community_detail-content">
          <p>{post.content}</p>
        </div>

          {/* 좋아요 안내 멘트 */}
        <div style={{ textAlign: "center", margin: "20px 0", fontWeight: "bold" }}>
          이 글이 도움이 되었다면   
          <button
            className="community_like-btn" 
            onClick={handleLike}
          >
            <FaThumbsUp className="community_like-icon" />
          </button> 를 눌러주세요!
         
        </div>

        {/* 댓글 섹션 */}
        <div className="community_comment-container">
          <h3>댓글</h3>
          <ul className="community_comment-list">
            {comments.length === 0 ? (
              <li className="no-comment">아직 댓글이 없습니다.</li>
            ) : (
              comments.map((c) => (
                <li key={c.id} className="community_comment-item">
                  <div className="community_comment-top">
                    <span className="community_comment-user">{c.user}</span>
                    <span className="community_comment-date">{c.content}</span>
                  </div>
                  <div className="community_comment-body">
                    <span className="community_comment-content">
                      {c.date}
                    </span>
                    <div className="community_comment-actions">
                      {(user.username === c.user || user.role === "admin") && (
                        <button
                          className="community_comment-delete-btn"
                          onClick={() => handleDeleteComment(c.id)}
                        >
                          ❌
                        </button>
                      )}
                      <button
                        className="community_comment-report-btn"
                        onClick={() => {
                          setReportTarget({ type: "comment", id: c.id });
                          setIsReportOpen(true);
                        }}
                      >
                        신고
                      </button>
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>

          <div className="community_comment-input">
            <input
              className="community_comment-inputbox"
              type="text"
              placeholder="댓글을 입력하세요"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddComment()}
            />
            <button className="community_comment-btn" onClick={handleAddComment}>
              등록
            </button>
          </div>
        </div>

        {/* 모달 재사용 */}
        <ReportModal
          isOpen={isReportOpen}
          onClose={() => setIsReportOpen(false)}
          onSubmit={handleReportSubmit}
          targetType={reportTarget.type}
        />

          {/* 이전/다음 글 */}
        <div className="community_detail-nav">
          <div className="community_nav-section">
            <div className="community_nav-label">이전 글</div>
            <div className="community_nav-line" />
            {prevPost ? (
              <div
                className="community_nav-item"
                onClick={() => navigate(`/community/detail/${prevPost.id}`)}
              >
                {prevPost.title}
              </div>
            ) : (
              <div className="community_nav-item disabled">이전 글이 없습니다.</div>
            )}
          </div>

          <div className="community_nav-section">
            <div className="community_nav-label">다음 글</div>
            <div className="community_nav-line" />
            {nextPost ? (
              <div
                className="community_nav-item"
                onClick={() => navigate(`/community/detail/${nextPost.id}`)}
              >
                {nextPost.title}
              </div>
            ) : (
              <div className="community_nav-item disabled">다음 글이 없습니다.</div>
            )}
          </div>
        </div>


      </div>

              {/* 목록으로 돌아가기 */}
          <div className="community_detail-bottom">
          <button className="community_back-btn" onClick={() => navigate(-1)}>
            목록으로
          </button>
        </div>
      </div>
    
  );
}

export default CommunityDetailPage;
