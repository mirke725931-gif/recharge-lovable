import React, {useRef, useState} from "react";
import {Link} from 'react-router-dom';
import { FaFilm, FaMusic, FaStar, FaRegStar} from "react-icons/fa";
import '../../../css/findcontents/music/FindMusic.css'
import MusicRecommendAi from "./MusicRecommendAI";


function FindMusic() {
    const weatherRef = useRef(null);
    const userRef = useRef(null);

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

    const [isFavorite, setIsFavorite] = useState(false);
    
    const toggleFavorite = () => {
        setIsFavorite(prev => !prev);
    };
    
    const [openAi, setOpenAi] = useState(false);


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

            <div className="findmusic_main">
                <img src="https://placehold.co/1280x720?text=poster" className="findmusic_main_img" alt="포스터"/>
            </div>
            <div className="findcontents_recommendAi">
                <span>
                    AI 기반 추천 음악 찾아보기
                </span>
                <button onClick={(e)=> {e.currentTarget.blur(); setOpenAi(true)}}>AI 추천으로 가기</button>
                <MusicRecommendAi open={openAi} onClose={() => setOpenAi(false)} />
            </div>

            <div className="findmusic_category">
                <div className="findmusic_category_title">
                    인기 있는 음악
                </div>
            </div>
            <div className="findmusic_music">
                <div className="findmusic_slider_btn left">
                    <button onClick={() => scrollLeft(weatherRef, 300)}>⟨</button>
                </div>
                <ul className="findmusic_music_lists" ref={weatherRef}>
                    <li className="findmusic_music_list">
                            <img src="https://placehold.co/180x180?text=1" className="findmusic_weather_img" alt="포스터"/>
                            <button className={`findmusic_fav_btn ${isFavorite ? "primary" : "outline"}`} onClick={toggleFavorite}>
                                                            {isFavorite ? <FaStar color="#F4C10F" /> : <FaRegStar/>}</button>
                            <div className="findmusic_music_info">
                                <span>노래 제목</span>
                                <span>가수</span>
                            </div>
                    </li>
                    <li className="findmusic_music_list">
                        <img src="https://placehold.co/180x180?text=2" className="findmusic_weather_img" alt="포스터"/>
                    </li>
                    <li className="findmusic_music_list">
                        <img src="https://placehold.co/180x180?text=3" className="findmusic_weather_img" alt="포스터"/>
                    </li>
                    <li className="findmusic_music_list">
                        <img src="https://placehold.co/180x180?text=4" className="findmusic_weather_img" alt="포스터"/>
                    </li>
                    <li className="findmusic_music_list">
                        <img src="https://placehold.co/180x180?text=5" className="findmusic_weather_img" alt="포스터"/>
                    </li>
                    <li className="findmusic_music_list">
                        <img src="https://placehold.co/180x180?text=6" className="findmusic_weather_img" alt="포스터"/>
                    </li>
                    <li className="findmusic_music_list">
                        <img src="https://placehold.co/180x180?text=7" className="findmusic_weather_img" alt="포스터"/>
                    </li>
                    <li className="findmusic_music_list">
                        <img src="https://placehold.co/180x180?text=8" className="findmusic_weather_img" alt="포스터"/>
                    </li>
                </ul>
                <div className="findmusic_slider_btn right">
                    <button onClick={() => scrollRight(weatherRef, 300)}>⟩</button>
                </div>
            </div>

            

            <div className="findmusic_category">
                <div className="findmusic_category_title">
                    Re:Charge 회원들의 추천 음악
                </div>
                <div className="findmusic_category_addform">
                    <Link to="/find_contents/music/addmusic">추천 글쓰기 ›</Link>
                </div>
            </div>
            <div className="findmusic_music">
                <div className="findmusic_slider_btn left">
                    <button onClick={() => scrollLeft(userRef, 230)}>⟨</button>
                </div>
                <ul className="findmusic_music_lists" ref={userRef}>
                    <li className="findmusic_music_list">
                        <Link to="/find_contents/music/usermusicdetail">
                            <img src="https://placehold.co/180x180?text=1" className="findmusic_user_img" alt="포스터"/>
                            <div className="findmusic_music_info">
                                <span>글 제목</span>
                                <span>작성자</span>
                            </div>
                        </Link>
                    </li>
                    <li className="findmusic_music_list">
                        <img src="https://placehold.co/180x180?text=2" className="findmusic_user_img" alt="포스터"/>
                    </li>
                    <li className="findmusic_music_list">
                        <img src="https://placehold.co/180x180?text=3" className="findmusic_user_img" alt="포스터"/>
                    </li>
                    <li className="findmusic_music_list">
                        <img src="https://placehold.co/180x180?text=4" className="findmusic_user_img" alt="포스터"/>
                    </li>
                    <li className="findmusic_music_list">
                        <img src="https://placehold.co/180x180?text=5" className="findmusic_user_img" alt="포스터"/>
                    </li>
                    <li className="findmusic_music_list">
                        <img src="https://placehold.co/180x180?text=6" className="findmusic_user_img" alt="포스터"/>
                    </li>
                    <li className="findmusic_music_list">
                        <img src="https://placehold.co/180x180?text=7" className="findmusic_user_img" alt="포스터"/>
                    </li>
                    <li className="findmusic_music_list">
                        <img src="https://placehold.co/180x180?text=8" className="findmusic_user_img" alt="포스터"/>
                    </li>
                </ul>
                <div className="findmusic_slider_btn right">
                    <button onClick={() => scrollRight(userRef, 230)}>⟩</button>
                </div>
            </div>
        </div>
    );
}

export default FindMusic;

