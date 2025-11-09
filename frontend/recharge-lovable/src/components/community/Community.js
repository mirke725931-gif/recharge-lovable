import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../css/community/Community.css";
import { FaHeart, FaEye } from "react-icons/fa";

function Community() {
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const postsPerPage = 6;
  const navigate = useNavigate();

  // ✅ 더미 데이터
  useEffect(() => {
  const samplePosts = {
    review: [
      {
        id: 1,
        category: "review",
        user: "충전매니아",
        title: "서울 강남구 충전소 후기",
        views: 234,
        likes: 58,
        date: "2025-01-15",
        image:
          "https://images.unsplash.com/photo-1605559424843-9e4b2a3a1e15?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 2,
        category: "review",
        user: "에코드라이버",
        title: "부산 해운대 충전소 깔끔했어요!",
        views: 198,
        likes: 45,
        date: "2025-02-01",
        image:
          "https://images.unsplash.com/photo-1610964025567-bdf3a84f7a3b?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 3,
        category: "review",
        user: "그린맨",
        title: "시흥 충전소 이용 후기 (대기 길었어요)",
        views: 178,
        likes: 22,
        date: "2025-02-10",
        image:
          "https://images.unsplash.com/photo-1617727553252-61fa0d8a8765?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 4,
        category: "review",
        user: "EV매니아",
        title: "제주도 충전소 여행 후기!",
        views: 312,
        likes: 80,
        date: "2025-03-01",
        image:
          "https://images.unsplash.com/photo-1593941707874-ef25b8b4e2d1?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 5,
        category: "review",
        user: "전기차사랑",
        title: "시내 충전소 주차 불편 개선 필요",
        views: 167,
        likes: 18,
        date: "2025-03-20",
        image:
          "https://images.unsplash.com/photo-1605559424978-14e61b58b6e7?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 6,
        category: "review",
        user: "테슬라러버",
        title: "신규 충전소 오픈 후기 - 고양시",
        views: 245,
        likes: 37,
        date: "2025-04-02",
        image:
          "https://images.unsplash.com/photo-1621536959560-25f08b7c8f43?auto=format&fit=crop&w=600&q=80",
      },
    ],
    tips: [
      {
        id: 7,
        category: "tips",
        user: "에코라이프",
        title: "겨울철 배터리 효율 올리는 꿀팁",
        views: 267,
        likes: 54,
        date: "2025-02-11",
        image:
          "https://images.unsplash.com/photo-1593941707874-ef25b8b4e2d1?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 8,
        category: "tips",
        user: "전기차초보",
        title: "초보를 위한 충전요금 절약법",
        views: 298,
        likes: 77,
        date: "2025-02-20",
        image:
          "https://images.unsplash.com/photo-1615554955251-7f69c388ed7d?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 9,
        category: "tips",
        user: "충전왕",
        title: "급속충전과 완속충전의 차이 쉽게 설명",
        views: 212,
        likes: 39,
        date: "2025-03-03",
        image:
          "https://images.unsplash.com/photo-1615339725567-436b9d4c64cb?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 10,
        category: "tips",
        user: "그린드라이버",
        title: "전기차 주행거리 늘리는 방법 TOP 5",
        views: 230,
        likes: 42,
        date: "2025-03-10",
        image:
          "https://images.unsplash.com/photo-1605559424843-9e4b2a3a1e15?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 11,
        category: "tips",
        user: "전기차정보맨",
        title: "충전소 찾기 앱 추천 BEST 3",
        views: 265,
        likes: 48,
        date: "2025-03-22",
        image:
          "https://images.unsplash.com/photo-1617727553252-61fa0d8a8765?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 12,
        category: "tips",
        user: "EVMaster",
        title: "여름철 배터리 과열 방지 팁",
        views: 301,
        likes: 66,
        date: "2025-04-01",
        image:
          "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80",
      },
    ],
    safety: [
      {
        id: 13,
        category: "safety",
        user: "안전지킴이",
        title: "전기차 사고 시 119 신고 전 확인할 것들",
        views: 300,
        likes: 82,
        date: "2025-02-02",
        image:
          "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 14,
        category: "safety",
        user: "드라이브러버",
        title: "배터리 방전 시 긴급 대처법",
        views: 287,
        likes: 65,
        date: "2025-02-14",
        image:
          "https://images.unsplash.com/photo-1610964025567-bdf3a84f7a3b?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 15,
        category: "safety",
        user: "EV가드",
        title: "비 오는 날 안전 충전 수칙",
        views: 220,
        likes: 34,
        date: "2025-03-05",
        image:
          "https://images.unsplash.com/photo-1615339725567-436b9d4c64cb?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 16,
        category: "safety",
        user: "운전연구소",
        title: "전기차 사고 보험 처리 꿀팁",
        views: 275,
        likes: 47,
        date: "2025-03-15",
        image:
          "https://images.unsplash.com/photo-1605559424978-14e61b58b6e7?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 17,
        category: "safety",
        user: "테슬라유저",
        title: "차량 화재 시 초기 대응 매뉴얼",
        views: 342,
        likes: 91,
        date: "2025-03-28",
        image:
          "https://images.unsplash.com/photo-1593941707874-ef25b8b4e2d1?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 18,
        category: "safety",
        user: "E-Guardian",
        title: "충전 중 화재 예방 체크리스트",
        views: 310,
        likes: 52,
        date: "2025-04-03",
        image:
          "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80",
      },
    
      {
        id: 19,
        category: "safety",
        user: "긴급운전자",
        title: "사고 났습니다... 보험 불렀어요",
        views: 452,
        likes: 96,
        date: "2025-04-04",
        image:
          "https://images.unsplash.com/photo-1602631985686-1c4220e4b9d2?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 20,
        category: "safety",
        user: "차사랑",
        title: "갑자기 차가 멈췄는데 보험사 바로 왔어요",
        views: 378,
        likes: 63,
        date: "2025-04-06",
        image:
          "https://images.unsplash.com/photo-1588776814546-1b21b9f8f3da?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 21,
        category: "safety",
        user: "도심드라이버",
        title: "주행 중 경고등 떴어요! 대처 후기",
        views: 1412,
        likes: 71,
        date: "2025-04-08",
        image:
          "https://images.unsplash.com/photo-1597006230773-5a64f0e3eb2b?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 22,
        category: "safety",
        user: "EV유저",
        title: "충전기에서 불꽃이 튀었는데 놀랐어요",
        views: 1510,
        likes: 88,
        date: "2025-04-09",
        image:
          "https://images.unsplash.com/photo-1623776054098-544d1b5d0b6b?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 23,
        category: "safety",
        user: "배터리불안",
        title: "새벽에 차 경고음 울려서 보험사 호출했습니다",
        views: 399,
        likes: 57,
        date: "2025-04-10",
        image:
          "https://images.unsplash.com/photo-1621263764088-fd2de9b8a83f?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 24,
        category: "safety",
        user: "운전고수",
        title: "사고 후 전기차 견인 후기",
        views: 1435,
        likes: 74,
        date: "2025-04-11",
        image:
          "https://images.unsplash.com/photo-1588776814546-1b21b9f8f3da?auto=format&fit=crop&w=600&q=80",
      },
    ],
  };

  // 전체 게시글 배열 생성
    const combinedPosts = [
      ...samplePosts.review,
      ...samplePosts.tips,
      ...samplePosts.safety,
    ];

    setAllPosts(combinedPosts);
    setLoading(false);
  }, []);

  // ✅ 인기글 + 최신글 정렬
  const getSortedPosts = () => {
    let filteredPosts =
      selectedCategory === "all"
        ? allPosts
        : allPosts.filter((p) => p.category === selectedCategory);

    // 인기글 top3
    const popularPosts = [...filteredPosts].sort((a, b) => b.views - a.views).slice(0, 3);

    // 나머지는 최신순
    const latestPosts = filteredPosts
      .filter((p) => !popularPosts.some((pop) => pop.id === p.id))
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    return [...popularPosts, ...latestPosts];
  };

  const sortedPosts = getSortedPosts();

  // ✅ 페이지네이션
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // ✅ 글쓰기 버튼
  const handleWriteClick = () => {
    navigate("/community/write");
  };

  return (
    <div className="community_board-wrapper">
      <div className="community_board-header">
        <h2>자유게시판</h2>
        <button className="community_write-btn" onClick={handleWriteClick}>
          글작성하기
        </button>
      </div>

      {/* 카테고리 탭 */}
      <div className="community_category-tabs">
        <button
          className={selectedCategory === "all" ? "active" : ""}
          onClick={() => setSelectedCategory("all")}
        >
          전체
        </button>
        <button
          className={selectedCategory === "review" ? "active" : ""}
          onClick={() => setSelectedCategory("review")}
        >
          충전소 이용후기 & 경험
        </button>
        <button
          className={selectedCategory === "tips" ? "active" : ""}
          onClick={() => setSelectedCategory("tips")}
        >
          전기차 꿀팁 & 사용정보
        </button>
        <button
          className={selectedCategory === "safety" ? "active" : ""}
          onClick={() => setSelectedCategory("safety")}
        >
          안전·사고 대처
        </button>
      </div>

      {/* 게시글 목록 */}
      <div className="community_board-container">
        {loading ? (
          <div>로딩 중...</div>
        ) : sortedPosts.length === 0 ? (
          <div className="community_empty-state">게시글이 없습니다.</div>
        ) : (
          <div className="community_posts-list">
            {currentPosts.map((post, index) => (
              <div key={post.id} className="community_post-card">
                {index < 3 && (
                 <div className={`community_post-rank rank-${index + 1}`}>
                      🔥 인기글
                 </div>
                  )}

                <img
                  src={post.image}
                  alt={post.title}
                  className="community_post-image"
                />
                <div className="community_post-body">
                  <Link
                    to={`/community/detail/${post.id}`}
                    className="community_post-title"
                  >
                    {post.title}
                  </Link>

                  <div className="community_post-meta">
                    <div className="community_post-meta-left">
                      <span className="community_user">{post.user}</span>
                      <span className="community_post-likes">
                        <FaHeart /> {post.likes}
                      </span>
                      <span className="community_post-views">
                        <FaEye /> {post.views}
                      </span>
                    </div>
                    <span className="community_post-date">{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 페이지네이션 */}
        {sortedPosts.length > 0 && (
          <div className="community_pagination">
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
        )}
      </div>
    </div>
  );
}

export default Community;