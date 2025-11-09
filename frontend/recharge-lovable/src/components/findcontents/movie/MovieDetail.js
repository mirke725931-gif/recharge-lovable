import React, {useState} from "react";
import { FaStar, FaRegStar, FaYoutube } from "react-icons/fa";
import {Link} from 'react-router-dom';
import '../../../css/findcontents/movie/MovieDetail.css'

function MovieDetail() {
    
    
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(prev => !prev);
    };

    return(
        <div className="moviedetail_container">

            <div className="moviedetail_movie">
                <div className="moviedetail_movie_poster">
                    <img src="https://placehold.co/300x450?text=interstella" className="findcontents_main_img" alt="포스터"/>
                </div>
                <div className="moviedetail_movie_info">
                    <div className="moviedetail_movie_info_title">
                        인터스텔라
                    </div>
                    <div className="moviedetail_movie_info_meta">
                        <div className="moviedetail_movie_info_meta_row1">
                            <span className="moviedetail_movie_info_meta_chip1"><FaStar color="#F4C10F"/> <span>9.5</span></span>
                            <span className="moviedetail_movie_info_meta_chip1"><span>🎬</span> <span>SF, 드라마</span></span>
                            <span className="moviedetail_movie_info_meta_chip1"><span>⏱ </span> <span>169분</span></span>
                            <span className="moviedetail_movie_info_meta_chip1"><span>📅</span> <span>2014.11.06</span></span>
                        </div>
                        <div className="moviedetail_movie_info_meta_row2">
                            <span className="moviedetail_movie_info_meta_chip2"><strong>감독: </strong>크리스토퍼 놀란</span>
                            <span className="moviedetail_movie_info_meta_chip2"><strong>출연: </strong>매튜 맥커너히, 앤 해서웨이</span>
                        </div>
                        <div className="moviedetail_movie_info_meta_row3">
                            우주를 배경으로 펼쳐지는 인류 생존을 위한 장대한 여정
                        </div>
                        <div className="moviedetail_movie_info_meta_favorite">
                            <button className={`moviedetail_addFavorite ${isFavorite ? "primary" : "outline"}`} onClick={toggleFavorite}>
                                {isFavorite ? <FaStar color="#F4C10F"/> : <FaRegStar />}
                            <span>{isFavorite ? "즐겨찾기 해제" : "즐겨찾기 추가"}</span>
                            </button>
                            <button className="moviedetail_goTrailer"><FaYoutube/><span>트레일러 보러가기</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="moviedetail_comment">   
                <div className="moviedetail_comment_title">
                    Comments
                </div>
                <div className="moviedetail_comment_post">
                    <input type="text" placeholder="댓글 입력"/>
                    <button className="moviedetail_btn">등록</button>
                </div>
                <ul className="moviedetail_comment_lists">
                    <li className="usermooviedetail_comment_list">
                        <div className="moviedetail_comment_user">
                            <span className="moviedetail_comment_id">bbq0638</span>
                            <span className="moviedetail_comment_time">2시간 전</span>
                            <div className="moviedetail_comment_btn">
                                <button className="moviedetail_comment_edit">수정</button>
                                <button className="moviedetail_comment_delete">삭제</button>
                            </div>
                        </div>
                        <span className="moviedetail_comment_text">댓글내용</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MovieDetail;