import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../css/community/Community.css";

function CommunityWritePage() {
  const navigate = useNavigate();

  // ✅ 로그인한 사용자 예시 (실제 로그인 연동 시 대체)
  const user = { userId: "guest" };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [communityTab, setCommunityTab] = useState("review");

  const tabs = [
    { key: "review", label: "충전소 이용후기 & 경험" },
    { key: "tips", label: "전기차 꿀팁 & 사용정보" },
    { key: "safety", label: "안전·사고 대처" },
  ];

  // ✅ 이미지 선택
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  // ✅ 게시글 등록
  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 입력해주세요!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("userId", user.userId);
      formData.append("communityTitle", title);
      formData.append("communityContent", content);
      formData.append("communityTab", communityTab);
      formData.append("createId", user.userId);
      if (imageFile) formData.append("communityImage", imageFile);

      const res = await axios.post(
        "http://localhost:10809/recharge/api/community",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.status === 200 || res.status === 201) {
        alert("게시글이 등록되었습니다!");
        navigate("/community");
      } else {
        alert("게시글 등록에 실패했습니다.");
      }
    } catch (err) {
      console.error("게시글 등록 실패:", err);
      alert("서버와 통신 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="community_write-container">
      <h2>게시글 작성</h2>

      {/* ✅ 카테고리 선택 */}
      <div className="community_category-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={communityTab === tab.key ? "active" : ""}
            onClick={() => setCommunityTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ✅ 제목 입력 */}
      <div className="community_write-header">
        <input
          type="text"
          className="community_write-title"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* ✅ 내용 입력 */}
      <div className="community_write-form">
        <textarea
          className="community_write-textarea"
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      {/* ✅ 이미지 첨부 */}
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
        {image && (
          <img
            src={image}
            alt="미리보기"
            className="community_preview-image"
          />
        )}
      </div>

      {/* ✅ 등록 버튼 */}
      <div className="community_submit-container">
        <button className="community_submit-btn" onClick={handleSubmit}>
          등록하기
        </button>
      </div>
    </div>
  );
}

export default CommunityWritePage;
