import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../css/community/Community.css";
import "../../css/community/PostComment.css";
import { FaThumbsUp } from "react-icons/fa";
import ReportModal from "../../components/modal/ReportModal";
import PostNavigator from "./PostNavigator";
import { getComments, addComment, deleteComment } from "../../api/CommentApi";
import { submitReport } from "../../api/ReportApi";
import axios from "axios";
import { useAuth } from "../../context/AuthContext"; // 로그인 상태 관리

function CommunityDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { userId, isLogin } = useAuth(); // 로그인 정보 가져오기

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [reportTarget, setReportTarget] = useState({ type: "post", id: null });


  /** 날짜 포맷 함수 */
  const formatDate = (dateString) => {
    return new Date(dateString).toISOString().split("T")[0];
  };

  /** 게시글 불러오기 */
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:10809/recharge/api/community/${id}`);
        const data = res.data;

        setPost({
          id: data.communityPostId,
          user: data.userId, // 게시글 작성자 ID
          title: data.communityTitle,
          content: data.communityContent,
          date: formatDate(data.createDate),
          views: data.communityViewCount,
          likes: data.communityLikeCount,
          imagePath: data.communityImagePath,
          imageName: data.communityImageName,
        });

        // 댓글 불러오기
        const commentList = await getComments("community", id);
        setComments(commentList || []);

        // 조회수 증가
        await axios.post(`http://localhost:10809/recharge/api/community/${id}/view`);
        setPost((prev) => prev ? { ...prev, views: prev.views + 1 } : prev);
      } catch (err) {
        console.error("게시글 불러오기 실패:", err);
      }
    };

    fetchPost();
  }, [id]);

  /** 댓글 등록 */
  const handleAddComment = async () => {
    if (!isLogin) {
      alert("로그인이 필요합니다.");
      return;
    }

    if (!commentInput.trim()) return;

    const commentData = {
      commentTargetType: "community",
      commentTargetId: id,
      userId: userId, // 로그인한 사용자 ID
      commentContent: commentInput,
      createId: userId, // 생성자 ID
      updatedId: userId, // 수정자 ID
    };

    try {
      const newComment = await addComment(commentData);
      setComments([...comments, newComment]);
      setCommentInput("");
    } catch (err) {
      console.error("댓글 등록 실패:", err);
      alert("댓글 등록 중 오류가 발생했습니다.");
    }
  };

  /** 댓글 삭제 */
  const handleDeleteComment = async (commentId) => {
    if (!isLogin) {
      alert("로그인이 필요합니다.");
      return;
    }

    if (!window.confirm("댓글을 삭제하시겠습니까?")) return;

    try {
      await deleteComment(commentId);
      setComments(comments.filter((c) => c.commentId !== commentId));
    } catch (err) {
      console.error("댓글 삭제 실패:", err);
      alert("댓글 삭제 중 오류가 발생했습니다.");
    }
  };

  /** 좋아요 */
  const handleLike = async () => {
    if (!isLogin) {
      alert("로그인이 필요합니다.");
      return;
    }

    try {
      const res = await axios.post(`http://localhost:10809/recharge/api/community/${id}/like`, {
        userId: userId, // 로그인한 사용자 ID
      });
      setPost((prev) => prev ? { ...prev, likes: res.data.likeCount || prev.likes + 1 } : prev);
    } catch (err) {
      console.error("좋아요 실패:", err);
      alert("좋아요 처리 중 오류가 발생했습니다.");
    }
  };

  /** 게시글 삭제 */
  const handleDeletePost = async () => {
    if (!isLogin) {
      alert("로그인이 필요합니다.");
      return;
    }

    if (!window.confirm("게시글을 삭제하시겠습니까?")) return;

    try {
      await axios.delete(`http://localhost:10809/recharge/api/community/${id}`);
      alert("게시글이 삭제되었습니다.");
      navigate("/community");
    } catch (err) {
      console.error("게시글 삭제 실패:", err);
      alert("게시글 삭제 중 오류가 발생했습니다.");
    }
  };

  /** 신고 */
  const handleReportSubmit = async (reason) => {
    if (!isLogin) {
      alert("로그인이 필요합니다.");
      return;
    }

    if (!reportTarget.id) {
      alert("신고할 대상이 선택되지 않았습니다.");
      return;
    }

    try {
      await submitReport({
        userId: userId, // 로그인한 사용자 ID
        reportTargetType: reportTarget.type,
        reportTargetId: reportTarget.id,
        reportReason: reason,
        createId: userId, // 생성자 ID
      });

      alert(`${reportTarget.type === "comment" ? "댓글" : "게시글"}이 신고되었습니다.`);
      setIsReportOpen(false);
    } catch (err) {
      console.error("신고 처리 실패:", err);
      alert("신고 처리 중 오류가 발생했습니다.");
    }
  };

  /** 게시글 수정 */
  const handleEditPost = () => {
    navigate(`/community/edit/${post.id}`);
  };

  if (!post) return <p>로딩 중...</p>;

  const canDeletePost = isLogin && (userId === post.user || userId === "admin");

  return (
    <div className="community_board-wrapper">
      <div className="community_board-header">
        <h2>자유게시판</h2>
      </div>

      <div className="community_detail-container">
        {/* 게시글 헤더 */}
        <div className="community_detail-header">
          <div className="community_detail-headertop">
            <h2>{post.title}</h2>
            <div className="community_detail-actions">
              {canDeletePost && (
                <>
                  <button className="community_delete-btn" onClick={handleEditPost}>수정</button>
                  <button className="community_delete-btn" onClick={handleDeletePost}>삭제</button>
                </>
              )}
              <button
                className="community_report-btn"
                onClick={() => {
                  if(!post.id) return;
                  setReportTarget({ type: "post", id: post.id });
                  setIsReportOpen(true);
                }}
              >
                신고
              </button>
            </div>
          </div>

          <div className="community_detail-meta" style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <span>{post.user}</span> | <span>{post.date}</span>
            </div>
            <div>
              조회수: {post.views} | <FaThumbsUp /> {post.likes}
            </div>
          </div>
        </div>

        {/* 게시글 내용 */}
        <div className="community_detail-content">
          {post.imagePath && (
            <img
              src={`http://localhost:10809/recharge${post.imagePath}`}
              alt={post.imageName}
              className="community_detail-image"
            />
          )}
          <p>{post.content}</p>
        </div>

        {/* 좋아요 버튼 */}
        <div style={{ textAlign: "center", margin: "20px 0", fontWeight: "bold" }}>
          이 글이 도움이 되었다면{" "}
          <button className="community_like-btn" onClick={handleLike}>
            <FaThumbsUp className="community_like-icon" />
          </button>{" "}
          눌러주세요!
        </div>

        {/* 댓글 영역 */}
        <div className="community_comment-container">
          <h3>댓글</h3>
          <ul className="community_comment-list">
            {comments.length === 0 ? (
              <li className="no-comment">아직 댓글이 없습니다.</li>
            ) : (
              comments.map((c) => (
                <li key={c.commentId} className="community_comment-item">
                  <div className="community_comment-top">
                    <span className="community_comment-user">{c.userId}</span>
                    <span className="community_comment-date">{formatDate(c.createDate)}</span>
                  </div>
                  <div className="community_comment-body">
                    <span className="community_comment-content">{c.commentContent}</span>
                    <div className="community_comment-actions">
                      {(userId === c.userId || userId === "admin") && (
                        <button className="community_comment-delete-btn" onClick={() => handleDeleteComment(c.commentId)}>❌</button>
                      )}
                      <button
                        className="community_comment-report-btn"
                        onClick={() => {
                          if(!c.commentId) return;
                          setReportTarget({ type: "comment", id: c.commentId });
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
            <button className="community_comment-btn" onClick={handleAddComment}>등록</button>
          </div>
        </div>

        {/* 신고 모달 */}
        <ReportModal
          isOpen={isReportOpen}
          onClose={() => setIsReportOpen(false)}
          onSubmit={handleReportSubmit}
          targetType={reportTarget.type}
        />

        {/* 이전/다음 글 */}
         <PostNavigator />
      </div>

      <div className="community_detail-bottom">
        <button className="community_back-btn" onClick={() => navigate(-1)}>목록으로</button>
      </div>
    </div>
  );
}

export default CommunityDetailPage;