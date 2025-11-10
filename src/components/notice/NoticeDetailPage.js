import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../css/notice/NoticeDetailPage.css";

function NoticeDetailPage() {
  
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [prevPost, setPrevPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);

  // 더미 데이터 (임시)
  useEffect(() => {
    const dummyPosts = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `공지사항 ${i + 1}`,
      content: `이것은 공지사항 ${i + 1}의 내용입니다.`,
      date: "2025-10-31",
      editdate: "2025-11-01",
    }));

    const currentIndex = dummyPosts.findIndex((p) => String(p.id) === String(id));
    const found = dummyPosts[currentIndex];

    if (found) {
      setPost(found);
      setPrevPost(dummyPosts[currentIndex - 1] || null);
      setNextPost(dummyPosts[currentIndex + 1] || null);
    } else {
      setPost({
        title: "공지사항 예시 제목",
        content: "이것은 임시 예시 공지사항 내용입니다.",
        date: "2025-10-31",
        editdate: "2025-11-01",
      });
    }
  }, [id]);

  if (!post) return <p>로딩 중...</p>;

 return (
  <div className="notice_board-wrapper">
    <div className="notice_board-header">
      <h2>공지사항</h2>
    </div>

    <div className="notice_detail-container">
      {/* 게시글 상단 */}
      <div className="notice_detail-header">
        <h2>{post.title}</h2>
        <div className="notice_detail-meta">
          <span>게시일: {post.date}</span>
        </div>
      </div>

      {/* 게시글 내용 */}
      <div className="notice_detail-content">
        <p>{post.content}</p>
      </div>

      {/* 이전 / 다음 글 */}
      <div className="notice_detail-nav">
        {/* 이전글 */}
        <div className="notice_nav-section">
          <div className="notice_nav-label">&lt; 이전글</div>

          {prevPost ? (
            <>
              <div
                className="notice_nav-item"
                onClick={() => navigate(`/notice/detail/${prevPost.id}`)}
              >
                {prevPost.title}
              </div>
              <div className="notice_nav-date">{prevPost.date}</div>
            </>
          ) : (
            <div className="notice_nav-item disabled">이전 글이 없습니다.</div>
          )}
        </div>

        {/* 다음글 */}
        <div className="notice_nav-section">
          <div className="notice_nav-label">&gt; 다음글</div>

          {nextPost ? (
            <>
              <div
                className="notice_nav-item"
                onClick={() => navigate(`/notice/detail/${nextPost.id}`)}
              >
                {nextPost.title}
              </div>
              <div className="notice_nav-date">{nextPost.date}</div>
            </>
          ) : (
            <div className="notice_nav-item disabled">다음 글이 없습니다.</div>
          )}
        </div>
      </div>
    </div>

    {/* 목록으로 버튼 */}
    <div className="notice_detail-bottom">
      <button className="notice_back-btn" onClick={() => navigate("/notice")}>
        목록으로
      </button>
    </div>
  </div>
);
}

export default NoticeDetailPage;