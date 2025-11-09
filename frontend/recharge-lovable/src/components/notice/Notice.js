import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../../css/notice/Notice.css";

function Notice() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5; //페이지당 게시글 수
  const navigate = useNavigate();

  // ✅ 게시글 불러오기
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const mapped = res.data.slice(0, 10).map((post, index) => ({
          id: post.id,
          number: index + 1, // 번호 추가
          title: post.title,
          writer: "관리자",  //관리자 고정
          views: Math.floor(Math.random() * 200),
          date: new Date().toISOString().split("T")[0],
          editdate:new Date().toISOString().split("T")[0], //수정일(임시동일)
        }));
        setPosts(mapped);
      } catch (err) {
        console.error("데이터 불러오기 오류:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  

    // ✅ 페이지네이션 계산

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = posts.slice(indexOfFirst, indexOfLast);

   // ✅ 페이지 변경

   const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };



  return (
    <div className="notice_board-wrapper">
      {/* 헤더 + 버튼을 같은 줄에 정렬 */}
      <div className="notice_board-header">
        <h2>공지사항</h2>
      </div>

      {/* 게시판 테이블 */}
      <div className="notice_board-container">
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>조회수</th>
              <th>게시일</th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: "center", padding: "20px", color: "#999" }}>
                  게시글이 없습니다.
                </td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr key={post.id} >
                  <td>{post.number}</td>
                  <td className="notice_post-title">
                    <Link to={`/notice/detail/${post.id}`} className="notice_post-title">
                    {post.title}
                    </Link>
                  </td>
                  <td>{post.views}</td>
                  <td>{post.date}</td>
                </tr>
              ))
            )}
          </tbody>
         
        </table>
       </div>

          {/* 페이지네이션 */}
        <div className="notice_pagination">
          <button onClick={() => handlePageChange(1)}>&laquo;</button>
          <button onClick={() => handlePageChange(currentPage - 1)}>&lt;</button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={() => handlePageChange(currentPage + 1)}>&gt;</button>
          <button onClick={() => handlePageChange(totalPages)}>&raquo;</button>
        </div>
      
    </div>
  );
}

export default Notice;
