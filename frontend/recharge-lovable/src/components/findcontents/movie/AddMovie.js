import React from "react";
import { FaStar} from "react-icons/fa";
import '../../../css/findcontents/movie/AddMovie.css'

function AddMovie() {
    return(
        <div className="addmovie_container">
            <div className="addmovie_header">
                <h2>영화 추천 글 작성하기</h2>
            </div>
            <div className="addmovie_addform">
                <div className="addmovie_search">
                    <input type="text" placeholder="영화 제목을 입력하세요"/>
                    <button>검색</button>
                </div>
                <div className="addmovie_searched_movie">
                    <div className="addmovie_poster">
                        <img src="185x278" alt="포스터"/>
                    </div>
                    <div className="addmovie_meta">
                        <div className="addmovie_title">슈퍼맨</div>
                        <div className="addmovie_meta_row">
                            <span className="addmovie_meta_chip"><span>🎬</span> <span>SF, 드라마</span></span>
                            <span className="addmovie_meta_chip"><span>📅</span> <span>2014.11.06</span></span>
                            <span className="addmovie_meta_chip"><span>⏱ </span> <span>169분</span></span>
                            <span className="addmovie_meta_chip"><FaStar color="#F4C10F"/> <span>9.5</span></span>
                            <span className="addmovie_meta_chip"><strong>감독</strong><span>제임스 건</span></span>
                            <span className="addmovie_meta_chip"><strong>출연</strong><span>슈퍼맨</span></span>
                        </div>
                    </div>
                </div>
                <div className="addmovie_content_title">
                    <span>게시글 제목</span>
                    <input type="text" placeholder="추천 글 제목을 입력하세요"/>
                </div>
                <div className="addmovie_content_text">
                    <span>추천 이유</span>
                    <textarea placeholder="영화 추천 상세 내용"/>
                </div>
                <div className="addmovie_content_btn">
                    <button>등록하기</button>
                </div>
            </div>
        </div>
    );
}

export default AddMovie;