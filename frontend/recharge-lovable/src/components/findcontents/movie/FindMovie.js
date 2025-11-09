import React, {useRef, useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import { FaFilm, FaMusic} from "react-icons/fa";
import '../../../css/findcontents/movie/FindMovie.css'
import MovieRecommendAi from "./MovieRecommendAi";

function FindMovie() {
    useEffect(() => {
    fetch("/recharge/api/hello")
    .then(res => res.text())
    .then(msg => console.log(msg))
    .catch(err => console.error("API 오류:", err));
    }, []);



    const weatherRef = useRef(null);
    const userRef = useRef(null);
    const [openAi, setOpenAi] = useState(false);

    const getScroll = (ref, fallback = 240) => {
    const track = ref.current;
    if (!track) return 0;
    const first = track.firstElementChild;
    const width = first ? first.getBoundingClientRect().width : fallback;
    const styles = getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || "16");
    return width + gap;
  };

  const scrollLeft  = (ref, fallback) => ref.current?.scrollBy({ left: -getScroll(ref, fallback), behavior: "smooth" });
  const scrollRight = (ref, fallback) => ref.current?.scrollBy({ left:  getScroll(ref, fallback), behavior: "smooth" });

    return(
        <div className="findcontents">
            <div className="findcontents_link">
                <button className="findcontents_btn">
                    <Link to="/find_contents/movie">
                    <div className="icon-wrap">
                        <FaFilm/>
                    </div>
                    <span>영화</span>
                    </Link>
                </button>
                <button className="findcontents_btn">
                    <Link to="/find_contents/music">
                    <div className="icon-wrap">
                        <FaMusic/>
                    </div>
                    <span>음악</span>
                    </Link>
                </button>
            </div>

            <div className="findmovie_main">
                <img src="https://placehold.co/1025x576?text=poster" className="findmovie_main_img" alt="포스터"/>
            </div>
            <div className="findcontents_recommendAi">
                <span>
                    AI 기반 추천 영화 찾아보기
                </span>
                <button onClick={(e) => { e.currentTarget.blur(); setOpenAi(true); }}>AI 추천으로 가기</button>
                <MovieRecommendAi open={openAi} onClose={() => setOpenAi(false)} />
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
                <div className="findmovie_category_title">
                    현재 인기 있는 영화
                </div>
            </div>
            <div className="findmovie_weather_movie">
                <div className="findmovie_slider_btn left">
                    <button onClick={() => scrollLeft(weatherRef, 300)}>⟨</button>
                </div>
                <ul className="findmovie_weather_movie_lists" ref={weatherRef}>
                    <li className="findmovie_weather_movie_list">
                        <Link to="/find_contents/movie/moviedetail">
                            <img src="https://placehold.co/300x180?text=1" className="findmovie_weather_img" alt="포스터"/>
                        </Link>
                    </li>
                    <li className="findmovie_weather_movie_list">
                        <img src="https://placehold.co/300x180?text=2" className="findmovie_weather_img" alt="포스터"/>
                    </li>
                    <li className="findmovie_weather_movie_list">
                        <img src="https://placehold.co/300x180?text=3" className="findmovie_weather_img" alt="포스터"/>
                    </li>
                    <li className="findmovie_weather_movie_list">
                        <img src="https://placehold.co/300x180?text=4" className="findmovie_weather_img" alt="포스터"/>
                    </li>
                    <li className="findmovie_weather_movie_list">
                        <img src="https://placehold.co/300x180?text=5" className="findmovie_weather_img" alt="포스터"/>
                    </li>
                    <li className="findmovie_weather_movie_list">
                        <img src="https://placehold.co/300x180?text=6" className="findmovie_weather_img" alt="포스터"/>
                    </li>
                    <li className="findmovie_weather_movie_list">
                        <img src="https://placehold.co/300x180?text=7" className="findmovie_weather_img" alt="포스터"/>
                    </li>
                    <li className="findmovie_weather_movie_list">
                        <img src="https://placehold.co/300x180?text=8" className="findmovie_weather_img" alt="포스터"/>
                    </li>
                </ul>
                <div className="findmovie_slider_btn right">
                    <button onClick={() => scrollRight(weatherRef, 300)}>⟩</button>
                </div>
            </div>

            

            <div className="findmovie_category">
                <div className="findmovie_category_title">
                    Re:Charge 회원들의 추천 영화
                </div>
                <div className="findmovie_category_addform">
                    <Link to="/find_contents/movie/addmovie">추천 글쓰기 ›</Link>
                </div>
            </div>
            <div className="findmovie_user_movie">
                <div className="findmovie_slider_btn left">
                    <button onClick={() => scrollLeft(userRef, 230)}>⟨</button>
                </div>
                <ul className="findmovie_user_movie_lists" ref={userRef}>
                    <li className="findmovie_user_movie_list">
                        <Link to="/find_contents/movie/usermoviedetail">
                            <img src="https://placehold.co/300x450?text=1" className="findmovie_user_img" alt="포스터"/>
                            <div className="findmovie_user_movie_info">
                                <span>글 제목</span>
                                <span>작성자</span>
                            </div>
                        </Link>
                    </li>
                    <li className="findmovie_user_movie_list">
                        <img src="https://placehold.co/300x450?text=2" className="findmovie_user_img" alt="포스터"/>
                    </li>
                    <li className="findmovie_user_movie_list">
                        <img src="https://placehold.co/300x450?text=3" className="findmovie_user_img" alt="포스터"/>
                    </li>
                    <li className="findmovie_user_movie_list">
                        <img src="https://placehold.co/300x450?text=4" className="findmovie_user_img" alt="포스터"/>
                    </li>
                    <li className="findmovie_user_movie_list">
                        <img src="https://placehold.co/300x450?text=5" className="findmovie_user_img" alt="포스터"/>
                    </li>
                    <li className="findmovie_user_movie_list">
                        <img src="https://placehold.co/300x450?text=6" className="findmovie_user_img" alt="포스터"/>
                    </li>
                    <li className="findmovie_user_movie_list">
                        <img src="https://placehold.co/300x450?text=7" className="findmovie_user_img" alt="포스터"/>
                    </li>
                    <li className="findmovie_user_movie_list">
                        <img src="https://placehold.co/300x450?text=8" className="findmovie_user_img" alt="포스터"/>
                    </li>
                </ul>
                <div className="findmovie_slider_btn right">
                    <button onClick={() => scrollRight(userRef, 230)}>⟩</button>
                </div>
            </div>
        </div>
    );
}

export default FindMovie;

