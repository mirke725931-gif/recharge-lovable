import React, {useState} from "react";
import { FaStar, FaRegStar, FaYoutube } from "react-icons/fa";
import {Link} from 'react-router-dom';
import '../../../css/findcontents/music/UserMusicDetail.css'

function UserMusicDetail() {


    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(prev => !prev);
    };

    return(
        <div className="usermusicdetail_container">
            <div className="usermusicdetail_playlist">
                이용자 추천 플레이리스트
            </div>
            <div className="usermusicdetail_music">
                <div className="usermusicdetail_music">
                    <ul className="usermusicdetail_music_lists">
                        <li className="usermusicdetail_music_list">
                            <button className={`usermusicdetail_addFavorite ${isFavorite ? "primary" : "outline"}`} onClick={toggleFavorite}>
                                {isFavorite ? <FaStar color="#F4C10F"/> : <FaRegStar />}
                            </button>
                            <img src="https://placehold.co/80x80?text=interstella" className="usermusicdetail_img" alt="포스터"/>
                            <div className="usermusicdetail_music_info">
                                <span className="usermusicdetail_music_title">노래제목</span>
                                <span className="usermusicdetail_music_artist">가수</span>
                                <span className="usermusicdetail_music_duration">3:50</span>
                            </div>
                        </li>
                        <li className="usermusicdetail_music_list">
                            <button className={`usermusicdetail_addFavorite ${isFavorite ? "primary" : "outline"}`} onClick={toggleFavorite}>
                                {isFavorite ? <FaStar color="#F4C10F"/> : <FaRegStar />}
                            </button>
                            <img src="https://placehold.co/80x80?text=interstella" className="usermusicdetail_img" alt="포스터"/>
                            <div className="usermusicdetail_music_info">
                                <span className="usermusicdetail_music_title">노래제목</span>
                                <span className="usermusicdetail_music_artist">가수</span>
                                <span className="usermusicdetail_music_duration">3:50</span>
                            </div>
                        </li>
                        <li className="usermusicdetail_music_list">
                            <button className={`usermusicdetail_addFavorite ${isFavorite ? "primary" : "outline"}`} onClick={toggleFavorite}>
                                {isFavorite ? <FaStar color="#F4C10F"/> : <FaRegStar />}
                            </button>
                            <img src="https://placehold.co/80x80?text=interstella" className="usermusicdetail_img" alt="포스터"/>
                            <div className="usermusicdetail_music_info">
                                <span className="usermusicdetail_music_title">노래제목</span>
                                <span className="usermusicdetail_music_artist">가수</span>
                                <span className="usermusicdetail_music_duration">3:50</span>
                            </div>
                        </li>
                        <li className="usermusicdetail_music_list">
                            <button className={`usermusicdetail_addFavorite ${isFavorite ? "primary" : "outline"}`} onClick={toggleFavorite}>
                                {isFavorite ? <FaStar color="#F4C10F"/> : <FaRegStar />}
                            </button>
                            <img src="https://placehold.co/80x80?text=interstella" className="usermusicdetail_img" alt="포스터"/>
                            <div className="usermusicdetail_music_info">
                                <span className="usermusicdetail_music_title">노래제목</span>
                                <span className="usermusicdetail_music_artist">가수</span>
                                <span className="usermusicdetail_music_duration">3:50</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="usermusicdetail_content">
                <div className="usermusicdetail_title">
                    글 제목 입력
                </div>
                <div className="usermusicdetail_user">
                    <span>Recommended by</span>
                    <span>아이디</span>
                </div>
                <div className="usermusicdetail_text">
                    충전하는 동안 시간 가는 줄 모르고 듣던 노래입니다.
                </div>
            </div>

            <div className="usermusicdetail_comment">   
                <div className="usermusicdetail_comment_title">
                    Comments
                </div>
                <div className="usermusicdetail_comment_post">
                    <input type="text" placeholder="댓글 입력"/>
                    <button className="usermusicdetail_btn">등록</button>
                </div>
                <ul className="usermusicdetail_comment_lists">
                    <li className="usermooviedetail_comment_list">
                        <div className="usermusicdetail_comment_user">
                            <span className="usermusicdetail_comment_id">bbq0638</span>
                            <span className="usermusicdetail_comment_time">2시간 전</span>
                            <div className="usermusicdetail_comment_btn">
                                <button className="usermusicdetail_comment_edit">수정</button>
                                <button className="usermusicdetail_comment_delete">삭제</button>
                            </div>
                        </div>
                        <span className="usermusicdetail_comment_text">댓글내용</span>
                    </li>
                </ul>
            </div>
            <div className="usermusicdetail_similar">

            </div>
        </div>
    );
}

export default UserMusicDetail;