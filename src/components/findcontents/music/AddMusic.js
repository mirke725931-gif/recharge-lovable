import React, {useState} from "react";
import { FaStar, FaRegStar, FaYoutube } from "react-icons/fa";
import {Link} from 'react-router-dom';
import '../../../css/findcontents/music/AddMusic.css'

function AddMusic() {

    return(
        <div className="addmusic_container">
            <div className="addmusic_header">
                <h2>음악 추천 글 작성하기</h2>
            </div>
            <div className="addmusic_addform">
                <div className="addmusic_search">
                    <input type="text" placeholder="노래 제목을 입력하세요"/>
                    <button>검색</button>
                </div>
            <div className="addmusic_music">
                <div className="addmusic_playlist">
                    플레이리스트
                </div>
                <div className="addmusic_music">
                    <ul className="addmusic_music_lists">
                        <li className="addmusic_music_list">
                            <img src="https://placehold.co/80x80?text=interstella" className="addmusic_img" alt="포스터"/>
                            <div className="addmusic_music_info">
                                <span className="addmusic_music_title">노래제목</span>
                                <span className="addmusic_music_artist">가수</span>
                                <span className="addmusic_music_duration">3:50</span>
                            </div>
                        </li>
                        <li className="addmusic_music_list">
                            <img src="https://placehold.co/80x80?text=interstella" className="addmusic_img" alt="포스터"/>
                            <div className="addmusic_music_info">
                                <span className="addmusic_music_title">노래제목</span>
                                <span className="addmusic_music_artist">가수</span>
                                <span className="addmusic_music_duration">3:50</span>
                            </div>
                        </li>
                        <li className="addmusic_music_list">
                            <img src="https://placehold.co/80x80?text=interstella" className="addmusic_img" alt="포스터"/>
                            <div className="addmusic_music_info">
                                <span className="addmusic_music_title">노래제목</span>
                                <span className="addmusic_music_artist">가수</span>
                                <span className="addmusic_music_duration">3:50</span>
                            </div>
                        </li>
                        <li className="addmusic_music_list">
                            <img src="https://placehold.co/80x80?text=interstella" className="addmusic_img" alt="포스터"/>
                            <div className="addmusic_music_info">
                                <span className="addmusic_music_title">노래제목</span>
                                <span className="addmusic_music_artist">가수</span>
                                <span className="addmusic_music_duration">3:50</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="addmusic_content_title">
                    <span>게시글 제목</span>
                    <input type="text" placeholder="추천 글 제목을 입력하세요"/>
                </div>
                <div className="addmusic_content_text">
                    <span>추천 이유</span>
                    <textarea placeholder="영화 추천 상세 내용"/>
                </div>
                <div className="addmusic_content_btn">
                    <button>등록하기</button>
                </div>
            </div>
        </div>
    );
}

export default AddMusic;