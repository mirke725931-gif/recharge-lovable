import React, {useState} from "react";
import { FaStar, FaRegStar, FaYoutube } from "react-icons/fa";
import {Link} from 'react-router-dom';
import '../../../css/findcontents/movie/UserMovieDetail.css'

function UserMovieDetail() {


    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(prev => !prev);
    };

    return(
        <div className="usermoviedetail_container">

            <div className="usermoviedetail_movie">
                <div className="usermoviedetail_movie_poster">
                    <img src="https://placehold.co/300x450?text=interstella" className="findcontents_main_img" alt="포스터"/>
                </div>
                <div className="usermoviedetail_movie_info">
                    <div className="usermoviedetail_movie_info_title">
                        인터스텔라
                    </div>
                    <div className="usermoviedetail_movie_info_meta">
                        <div className="usermoviedetail_movie_info_meta_row1">
                            <span className="usermoviedetail_movie_info_meta_chip1"><FaStar color="#F4C10F"/> <span>9.5</span></span>
                            <span className="usermoviedetail_movie_info_meta_chip1"><span>🎬</span> <span>SF, 드라마</span></span>
                            <span className="usermoviedetail_movie_info_meta_chip1"><span>⏱ </span> <span>169분</span></span>
                            <span className="usermoviedetail_movie_info_meta_chip1"><span>📅</span> <span>2014.11.06</span></span>
                        </div>
                        <div className="usermoviedetail_movie_info_meta_row2">
                            <span className="usermoviedetail_movie_info_meta_chip2"><strong>감독: </strong>크리스토퍼 놀란</span>
                            <span className="usermoviedetail_movie_info_meta_chip2"><strong>출연: </strong>매튜 맥커너히, 앤 해서웨이</span>
                        </div>
                        <div className="usermoviedetail_movie_info_meta_row3">
                            우주를 배경으로 펼쳐지는 인류 생존을 위한 장대한 여정
                        </div>
                        <div className="usermoviedetail_movie_info_meta_favorite">
                            <button className={`usermoviedetail_addFavorite ${isFavorite ? "primary" : "outline"}`} onClick={toggleFavorite}>
                                {isFavorite ? <FaStar color="#F4C10F"/> : <FaRegStar />}
                            <span>{isFavorite ? "즐겨찾기 해제" : "즐겨찾기 추가"}</span>
                            </button>
                            <button className="usermoviedetail_goTrailer"><FaYoutube/><span>트레일러 보러가기</span></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="usermoviedetail_content">
                <div className="usermoviedetail_title">
                    글 제목 입력
                </div>
                <div className="usermoviedetail_user">
                    <span>Recommended by</span>
                    <span>아이디</span>
                </div>
                <div className="usermoviedetail_text">
                    충전하는 동안 시간 가는 줄 모르고 볼 수 있는 영화입니다. 우주와 시간에 대한 철학적인 메시지가 깊게 와닿고, 영상미와 음악이 정말 훌륭합니다. EV 충전 시간에 딱 맞는 러닝타임이라 더욱 추천합니다
                </div>
            </div>

            <div className="usermoviedetail_comment">   
                <div className="usermoviedetail_comment_title">
                    Comments
                </div>
                <div className="usermoviedetail_comment_post">
                    <input type="text" placeholder="댓글 입력"/>
                    <button className="usermoviedetail_btn">등록</button>
                </div>
                <ul className="usermoviedetail_comment_lists">
                    <li className="usermooviedetail_comment_list">
                        <div className="usermoviedetail_comment_user">
                            <span className="usermoviedetail_comment_id">bbq0638</span>
                            <span className="usermoviedetail_comment_time">2시간 전</span>
                            <div className="usermoviedetail_comment_btn">
                                <button className="usermoviedetail_comment_edit">수정</button>
                                <button className="usermoviedetail_comment_delete">삭제</button>
                            </div>
                        </div>
                        <span className="usermoviedetail_comment_text">댓글내용</span>
                    </li>
                </ul>
            </div>
            <div className="usermoviedetail_similar">

            </div>
            <div className="usermoviedtail_findmovie">
                <Link to="/find_contents/movie">
                    다른 이용자의 추천 영화 보러가기 ›
                </Link>
            </div>
        </div>
    );
}

export default UserMovieDetail;