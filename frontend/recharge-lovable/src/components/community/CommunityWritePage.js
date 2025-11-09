import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/community/Community.css";

function CommunityWritePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [category, setCategory] = useState("review"); // 기본값 review
  const categories = [
    {key: "review" , label: "충전소 이용후기 & 경험"},
    {key: "tips", label: "전기차 꿀팁 & 사용정보"},
    {key: "safety", label: "안전·사고 대처"}
  ]
  // 이미지 파일 선택 시 미리보기용 URL 저장
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  // 글 등록 버튼 클릭 시 처리
  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 입력해주세요!");
      return;
    }

    // 실제로는 서버로 post 요청 보내면 됨 (axios.post)
    console.log("등록 데이터:", { title, content, image, category });

    alert("게시글이 등록되었습니다!");
    navigate("/community"); // 등록 후 목록 페이지로 이동
  };

  return (
    <div className="community_write-container">
      <h2>게시글 작성</h2>
      {/* 카테고리 선택 */}
      <div className="community_category-tabs">
        {categories.map((cat)=> (
          <button 
           key={cat.key}
           className={category === cat.key ? "active" : ""}
           onClick={() => setCategory(cat.key)}
           >
            {cat.label}
           </button>
        ))}
      </div>

      {/* 상단 제목 입력 */}
      <div className="community_write-header">
        <input
          type="text"
          className="community_write-title"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* 입력 폼 */}
      <div className="community_write-form">
        <textarea
          className="community_write-textarea"
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      {/* 이미지 첨부 */}
      <div className="community_write-imagebox-container">
        <div className="community_write-imagebox">
          <label htmlFor="imageUpload" className="community_image-label">
            이미지 첨부
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>
        {image && <img src={image} alt="미리보기" className="community_preview-image" />}
      </div>

      {/* 등록 버튼 */}
      <div className="community_submit-container">
        <button className="community_submit-btn" onClick={handleSubmit}>
          등록하기
        </button>
      </div>
    </div>
  );
}

export default CommunityWritePage;