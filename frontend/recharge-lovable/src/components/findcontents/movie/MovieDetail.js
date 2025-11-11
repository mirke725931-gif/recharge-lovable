import React, { useEffect, useMemo, useState } from "react";
import { FaStar, FaRegStar, FaYoutube } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import "../../../css/findcontents/movie/MovieDetail.css";
import ReportModal from "../../modal/ReportModal";

function MovieDetail() {
    const { movieId } = useParams();
    const { state } = useLocation();
    const [movie, setMovie] = useState(state?.movie || null);
    const [loading, setLoading] = useState(!state?.movie);
    const [error, setError] = useState("");
    const [isFavorite, setIsFavorite] = useState(false);
    
    const api = useMemo(
        () =>
            axios.create({
                baseURL: "http://localhost:10809/recharge/api",
            }),
        []
    );

    const tmdb = {
        poster: (path, size = "w780") =>
            path
                ? path.startsWith("http")
                    ? path
                    : `https://image.tmdb.org/t/p/${size}${path}`
                : "https://placehold.co/300x450?text=No+Poster",
    };

    useEffect(() => {
        if (movie) return;
        (async () => {
            try {
                setLoading(true);
                const res = await api.get(`/movies/${movieId}`);
                setMovie(res.data || null);
            } catch (e) {
                console.error(e);
                setError("영화 정보를 불러올 수 없습니다.");
            } finally {
                setLoading(false);
            }
        })();
    }, [api, movie, movieId]);

    const toggleFavorite = () => setIsFavorite((prev) => !prev);

    const trailerHref = useMemo(() => {
        if (!movie) return "#";
        const q = encodeURIComponent(`${movie.title} trailer`);
        return `https://www.youtube.com/results?search_query=${q}`;
    }, [movie]);

    if (loading) return <div className="moviedetail_container">불러오는 중...</div>;
    if (error || !movie) return <div className="moviedetail_container">{error}</div>;

    return (
        <div className="moviedetail_container">
            <div className="moviedetail_movie">
                <div className="moviedetail_movie_poster">
                    <img
                        src={tmdb.poster(movie.poster, "w780")}
                        alt={movie.title}
                        className="findcontents_main_img"
                    />
                </div>

                <div className="moviedetail_movie_info">
                    <div className="moviedetail_movie_info_title">
                        {movie.title}
                    </div>

                    <div className="moviedetail_movie_info_meta">
                        <div className="moviedetail_movie_info_meta_row1">
                            <span className="moviedetail_movie_info_meta_chip1">
                                <FaStar color="#F4C10F" /> <span>{movie.score ?? "-"}</span>
                            </span>
                            <span className="moviedetail_movie_info_meta_chip1">
                                <span>🎬</span> <span>{movie.genreName ?? "장르 미지정"}</span>
                            </span>
                            <span className="moviedetail_movie_info_meta_chip1">
                                <span>📅</span> <span>{movie.releaseDate ?? "-"}</span>
                            </span>
                        </div>

                        <div className="moviedetail_movie_info_meta_row2">
                            <span className="moviedetail_movie_info_meta_chip2">
                                <strong>감독: </strong>{movie.director ?? "-"}
                            </span>
                            <span className="moviedetail_movie_info_meta_chip2">
                                <strong>출연: </strong>{movie.actor ?? "-"}
                            </span>
                        </div>

                        <div className="moviedetail_movie_info_meta_row3">
                            {movie.comment ?? "줄거리 정보가 없습니다."}
                        </div>

                        <div className="moviedetail_movie_info_meta_favorite">
                            <button
                                className={`moviedetail_addFavorite ${isFavorite ? "primary" : "outline"}`}
                                onClick={toggleFavorite}
                            >
                                {isFavorite ? <FaStar color="#F4C10F" /> : <FaRegStar />}
                                <span>{isFavorite ? "즐겨찾기 해제" : "즐겨찾기 추가"}</span>
                            </button>

                            <a
                                href={trailerHref}
                                target="_blank"
                                rel="noreferrer"
                                className="moviedetail_goTrailer"
                            >
                                <FaYoutube />
                                <span>트레일러 보러가기</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="moviedetail_comment">
                <div className="moviedetail_comment_title">Comments</div>
                <div className="moviedetail_comment_post">
                    <input type="text" placeholder="댓글 입력" />
                    <button className="moviedetail_btn">등록</button>
                </div>
                <ul className="moviedetail_comment_lists">
                    <li className="usermooviedetail_comment_list">
                        <div className="moviedetail_comment_user">
                            <span className="moviedetail_comment_id">guest</span>
                            <span className="moviedetail_comment_time">방금 전</span>
                            <div className="moviedetail_comment_btn">
                                <button className="moviedetail_comment_edit">수정</button>
                                <button className="moviedetail_comment_delete">삭제</button>
                            </div>
                        </div>
                        <span className="moviedetail_comment_text">댓글 기능은 곧 연결됩니다!</span>
                    </li>
                </ul>
            </div>

            <div style={{ marginTop: "1rem" }}>
                <Link to="/find_contents/movie">← 목록으로</Link>
            </div>
        </div>
    );
}

export default MovieDetail;
