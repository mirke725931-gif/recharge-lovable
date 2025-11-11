import React, { useState, useMemo, useEffect } from "react";
import { FaStar, FaRegStar, FaYoutube } from "react-icons/fa";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import "../../../css/findcontents/movie/UserMovieDetail.css";

function UserMovieDetail() {
    const { postId } = useParams();
    const location = useLocation();
    const initialPost = location.state?.post || null;

    const [post, setPost] = useState(initialPost);   // 게시글 정보
    const [movie, setMovie] = useState(null);        // 영화 정보
    const [loading, setLoading] = useState(!initialPost);
    const [error, setError] = useState("");
    const [isFavorite, setIsFavorite] = useState(false);

    const api = useMemo(
        () =>
            axios.create({
                baseURL: "http://localhost:10809/recharge/api",
                withCredentials: true,
            }),
        []
    );

    const tmdb = {
        poster: (path, size = "w500") =>
            path
                ? path.startsWith("http")
                    ? path
                    : `https://image.tmdb.org/t/p/${size}${path}`
                : "https://placehold.co/300x450?text=No+Image",
    };

    // 1️⃣ 게시글 불러오기
    useEffect(() => {
        if (post) return; // state로 전달된 post가 있으면 생략
        (async () => {
            try {
                setLoading(true);
                const res = await api.get(`/moviepost/${postId}`);
                setPost(res.data || null);
            } catch (err) {
                console.error(err);
                setError("게시글 정보를 불러올 수 없습니다.");
            } finally {
                setLoading(false);
            }
        })();
    }, [api, postId, post]);

    // 2️⃣ 게시글 안의 movieId로 영화정보 불러오기
    useEffect(() => {
        if (!post?.movieId) return;
        (async () => {
            try {
                const res = await api.get(`/movies/${post.movieId}`);
                setMovie(res.data || null);
            } catch (err) {
                console.error("영화 세부 정보 불러오기 실패:", err);
            }
        })();
    }, [api, post?.movieId]);

    const toggleFavorite = () => setIsFavorite((prev) => !prev);

    if (loading) return <div className="usermoviedetail_container">불러오는 중...</div>;
    if (error || !post) return <div className="usermoviedetail_container">{error}</div>;

    // 🧠 안전한 접근을 위해 movie 정보 분리
    const posterUrl = tmdb.poster(movie?.poster || post.poster);
    const title = movie?.title || post.movieTitle;
    const score = movie?.score || post.score;
    const genre = movie?.genreName || "장르 미지정";
    const director = movie?.director || "-";
    const actor = movie?.actor || "-";
    const comment = movie?.comment || "줄거리 정보가 없습니다.";
    const releaseDate = movie?.releaseDate || "-";

    return (
        <div className="usermoviedetail_container">
            {/* 🎬 영화 정보 */}
            <div className="usermoviedetail_movie">
                <div className="usermoviedetail_movie_poster">
                    <img
                        src={posterUrl}
                        alt={title || "포스터"}
                        className="findcontents_main_img"
                    />
                </div>

                <div className="usermoviedetail_movie_info">
                    <div className="usermoviedetail_movie_info_title">
                        {title || "영화 제목 없음"}
                    </div>

                    <div className="usermoviedetail_movie_info_meta">
                        <div className="usermoviedetail_movie_info_meta_row1">
                            <span className="usermoviedetail_movie_info_meta_chip1">
                                <FaStar color="#F4C10F" /> <span>{score ?? "-"}</span>
                            </span>
                            <span className="usermoviedetail_movie_info_meta_chip1">
                                <span>🎬</span> <span>{genre}</span>
                            </span>
                            <span className="usermoviedetail_movie_info_meta_chip1">
                                <span>📅</span> <span>{releaseDate}</span>
                            </span>
                        </div>

                        <div className="usermoviedetail_movie_info_meta_row2">
                            <span className="usermoviedetail_movie_info_meta_chip2">
                                <strong>감독: </strong> {director}
                            </span>
                            <span className="usermoviedetail_movie_info_meta_chip2">
                                <strong>출연: </strong> {actor}
                            </span>
                        </div>

                        <div className="usermoviedetail_movie_info_meta_row3">{comment}</div>

                        <div className="usermoviedetail_movie_info_meta_favorite">
                            <button
                                className={`usermoviedetail_addFavorite ${
                                    isFavorite ? "primary" : "outline"
                                }`}
                                onClick={toggleFavorite}
                            >
                                {isFavorite ? <FaStar color="#F4C10F" /> : <FaRegStar />}
                                <span>{isFavorite ? "즐겨찾기 해제" : "즐겨찾기 추가"}</span>
                            </button>

                            <a
                                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                                    (title ?? "") + " trailer"
                                )}`}
                                target="_blank"
                                rel="noreferrer"
                                className="usermoviedetail_goTrailer"
                            >
                                <FaYoutube />
                                <span>트레일러 보러가기</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* 📝 사용자 게시글 */}
            <div className="usermoviedetail_content">
                <div className="usermoviedetail_title">
                    {post.moviePostTitle ?? "게시글 제목 없음"}
                </div>
                <div className="usermoviedetail_user">
                    <span>Recommended by </span>
                    <span>{post.userId ?? "익명"}</span>
                </div>
                <div className="usermoviedetail_text">
                    {post.moviePostText ?? "작성된 내용이 없습니다."}
                </div>
            </div>

            {/* 💬 댓글 영역 */}
            <div className="usermoviedetail_comment">
                <div className="usermoviedetail_comment_title">Comments</div>
                <div className="usermoviedetail_comment_post">
                    <input type="text" placeholder="댓글 입력" />
                    <button className="usermoviedetail_btn">등록</button>
                </div>
                <ul className="usermoviedetail_comment_lists">
                    <li className="usermooviedetail_comment_list">
                        <div className="usermoviedetail_comment_user">
                            <span className="usermoviedetail_comment_id">guest</span>
                            <span className="usermoviedetail_comment_time">방금 전</span>
                            <div className="usermoviedetail_comment_btn">
                                <button className="usermoviedetail_comment_edit">수정</button>
                                <button className="usermoviedetail_comment_delete">삭제</button>
                            </div>
                        </div>
                        <span className="usermoviedetail_comment_text">
                            댓글 기능은 곧 연결됩니다!
                        </span>
                    </li>
                </ul>
            </div>

            {/* 🔗 다른 추천글 이동 */}
            <div className="usermoviedtail_findmovie">
                <Link to="/find_contents/movie">
                    다른 이용자 추천 영화 보러가기 ›
                </Link>
            </div>
        </div>
    );
}

export default UserMovieDetail;
