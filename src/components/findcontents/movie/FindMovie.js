import React, {useRef} from "react";
import {Link} from 'react-router-dom';
import { FaFilm, FaMusic} from "react-icons/fa";
import '../../../css/findcontents/movie/FindMovie.css'


function FindMovie() {
    const listRef = useRef(null);

    const getScroll = () => {
        const track = listRef.current;
        if(!track) return 0;
        const first = track.firstElementChild;
        const width = first ? first.getBoundingClientRect().width : 240;
        const styles = getComputedStyle(track);
        const gap = parseFloat(styles.columnGap || styles.gap || "16");
        return width + gap;
    };

    const scrollLeft = () => listRef.current?.scrollBy({left: -getScroll(), behavior: "smooth"});
    const scrollRight = () => listRef.current?.scrollBy({left: getScroll(), behavior: "smooth"});








    return(
        <div className="findcontents">
            <div className="findcontents_link">
                <button className="findcontents_btn">
                    <div className="icon-wrap">
                        <FaFilm/>
                    </div>
                    <span>영화</span>
                </button>
                <button className="findcontents_btn">
                    <div className="icon-wrap">
                        <FaMusic/>
                    </div>
                    <span>음악</span>
                </button>
            </div>
            <div className="findcontents_main">
                <img src="https://placehold.co/1280x720?text=poster" className="findcontents_main_img" alt="포스터"/>
            </div>
            <div className="findcontents_recommendAi">
                <span>
                    AI 기반 추천 영화 찾아보기
                </span>
                <button>AI 추천으로 가기</button>
            </div>
            <div className="findmovie_select_genre">
                <label><input type="checkbox" name="movie_genre" />액션</label>
                <label><input type="checkbox" name="movie_genre" />코미디</label>
                <label><input type="checkbox" name="movie_genre" />호러</label>
                <label><input type="checkbox" name="movie_genre" />로맨스</label>
                <label><input type="checkbox" name="movie_genre" />스릴러</label>
                <label><input type="checkbox" name="movie_genre" />키즈</label>
                <label><input type="checkbox" name="movie_genre" />SF</label>
                <label><input type="checkbox" name="movie_genre" />판타지</label>
            </div>
            <div className="findmovie_category">
                Re:Charge 회원들의 추천 영화
            </div>
            <div className="findmovie_user_movie">
                <div className="findmovie_slider_btn left">
                    <button onClick={scrollLeft}>⟨</button>
                </div>
                <ul className="findmovie_user_movie_lists" ref={listRef}>
                    <li className="findmovie_user_movie_list">
                        <img src="https://placehold.co/300x450?text=1" className="findcontents_main_img" alt="포스터"/>
                        <div className="findmovie_user_movie_info">
                            <span>글 제목</span>
                            <span>작성자</span>
                        </div>
                    </li>
                    <li className="findmovie_user_movie_list">
                        <img src="https://placehold.co/300x450?text=2" className="findcontents_main_img" alt="포스터"/>
                    </li>
                    <li className="findmovie_user_movie_list">
                        <img src="https://placehold.co/300x450?text=3" className="findcontents_main_img" alt="포스터"/>
                    </li>
                    <li className="findmovie_user_movie_list">
                        <img src="https://placehold.co/300x450?text=4" className="findcontents_main_img" alt="포스터"/>
                    </li>
                    <li className="findmovie_user_movie_list">
                        <img src="https://placehold.co/300x450?text=5" className="findcontents_main_img" alt="포스터"/>
                    </li>
                    <li className="findmovie_user_movie_list">
                        <img src="https://placehold.co/300x450?text=6" className="findcontents_main_img" alt="포스터"/>
                    </li>
                    <li className="findmovie_user_movie_list">
                        <img src="https://placehold.co/300x450?text=7" className="findcontents_main_img" alt="포스터"/>
                    </li>
                    <li className="findmovie_user_movie_list">
                        <img src="https://placehold.co/300x450?text=8" className="findcontents_main_img" alt="포스터"/>
                    </li>
                </ul>
                <div className="findmovie_slider_btn right">
                    <button onClick={scrollRight}>⟩</button>
                </div>
            </div>
        </div>
    );
}

export default FindMovie;

