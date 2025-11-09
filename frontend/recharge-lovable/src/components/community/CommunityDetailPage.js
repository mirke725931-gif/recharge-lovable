import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../css/community/Community.css";

function CommunityDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [prevPost, setPrevPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [likeCount, setLikeCount] = useState(0);

  // 게시글 불러오기
  useEffect(() => {
    const samplePosts = [
      {
        id: 1,
        user: "전기차사랑",
        title: "충전소 이용 후기 - 서울 강남구",
        content: "안녕하세요! 서울 강남구에 있는 충전소를 이용해보았는데 정말 깔끔하고 편리했습니다. 충전 속도도 빠르고 주차 공간도 충분해서 좋았어요. 특히 주변에 카페도 있어서 충전하는 동안 시간을 보내기 좋았습니다. 다른 분들도 한번 이용해보시길 추천드려요!",
        date: "2025-01-15",
        image: "https://via.placeholder.com/600x300", // 예시 이미지
        views: 120,
        likes: 5,
      },
      {
        id: 2,
        user: "에코라이프",
        title: "전기차 구매 고민 중인데 조언 부탁드립니다",
        content: "전기차 구매를 고려하고 있는데 어떤 모델이 좋을지 고민이 많습니다...",
        date: "2025-01-14",
        image: "https://via.placeholder.com/600x300",
        views: 85,
        likes: 3,
      },
      // 추가 게시글은 생략
    ];

    const currentIndex = samplePosts.findIndex((p) => String(p.id) === String(id));
    const found = samplePosts[currentIndex];

    if (found) {
      setPost(found);
      setPrevPost(samplePosts[currentIndex - 1] || null);
      setNextPost(samplePosts[currentIndex + 1] || null);
      setLikeCount(found.likes || 0); // 좋아요 초기값 설정
    } else {
      setPost({
        title: "게시글을 찾을 수 없습니다",
        user: "시스템",
        content: "요청하신 게시글을 찾을 수 없습니다.",
        date: new Date().toISOString().split("T")[0],
        image: "",
        views: 0,
        likes: 0,
      });
    }
  }, [id]);

  // 댓글 작성
  const handleAddComment = () => {
    if (commentInput.trim() === "") return;
    const newComment = {
      user: "guest",
      content: commentInput,
      date: new Date().toISOString().slice(0, 10),
    };
    setComments([...comments, newComment]);
    setCommentInput("");
  };

  // 하트 클릭
  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  if (!post) return <p>로딩 중...</p>;

  return (
    <div className="community_board-wrapper">
      {/* 상단 고정 타이틀 */}
      <div className="community_board-header">
        <h2>자유게시판</h2>
      </div>

      <div className="community_detail-container">
        {/* 게시글 상단 */}
        <div className="community_detail-header">
          <h2>{post.title}</h2>
          <div className="community_detail-meta" style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <span>{post.user}</span> | <span>{post.date}</span>
            </div>
            <div>
              조회수: {post.views || 0} | ❤️ {likeCount}
            </div>
          </div>
        </div>

        {/* 게시글 이미지 */}
        {post.image && (
          <div className="community_detail-image">
            <img src={post.image} alt="게시글 이미지" style={{ width: "100%", maxHeight: "400px", objectFit: "cover", margin: "10px 0" }} />
          </div>
        )}

        {/* 게시글 내용 */}
        <div className="community_detail-content">
          <p>{post.content}</p>
        </div>

        {/* 하트 안내 멘트 */}
        <div style={{ textAlign: "center", margin: "20px 0", fontWeight: "bold" }}>
          이 글이 도움이 되었다면 하트  <button
            style={{ marginLeft: "10px", cursor: "pointer" }}
            onClick={handleLike}
          >
            ❤️
          </button> 를 눌러주세요!
         
        </div>

        {/* 댓글창 */}
        <div className="community_comment-container">
          <h3>댓글</h3>
          <ul className="community_comment-list">
            {comments.length === 0 ? (
              <li className="no-comment">아직 댓글이 없습니다.</li>
            ) : (
              comments.map((c, i) => (
                <li key={i} className="community_comment-item">
                  <span className="community_comment-user">{c.user}</span>
                  <span className="community_comment-content">{c.content}</span>
                  <span className="community_comment-date">{c.date}</span>
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

        {/* 목록으로 돌아가기 */}
        <div className="community_detail-bottom">
          <button className="community_back-btn" onClick={() => navigate("/community")}>
            목록으로
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommunityDetailPage;
