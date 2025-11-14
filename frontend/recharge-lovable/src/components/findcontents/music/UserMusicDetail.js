import React, { useState, useEffect, useMemo } from "react";
import { FaStar, FaRegStar, FaPlay } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "../../../css/findcontents/music/UserMusicDetail.css";
import axios from "axios";
import MusicPreview from "./MusicPreview";
import { useAuth } from "../../../context/AuthContext";

function UserMusicDetail() {
    const { userId, isLogin } = useAuth();
    const { postId } = useParams();

    const [previewTrack, setPreviewTrack] = useState(null);
    const [post, setPost] = useState(null);
    const [playlist, setPlaylist] = useState([]);
    const [loading, setLoading] = useState(true);

    // ⭐ axios instance (useMemo로 고정)
    const api = useMemo(
        () =>
            axios.create({
                baseURL: "http://localhost:10809/recharge/api",
                withCredentials: true,
            }),
        []
    );

    // ⭐ 즐겨찾기 여부 저장 Map
    const [favoriteMap, setFavoriteMap] = useState({});

    // ⭐ 즐겨찾기 토글
    const toggleFavorite = async (musicId) => {
        if (!isLogin) {
            alert("로그인이 필요합니다.");
            return;
        }

        try {
            await api.post("/bookmark/toggle", {
                userId,
                bookmarkTargetId: Number(musicId),
                bookmarkTargetType: "MUSIC",
            });

            setFavoriteMap((prev) => {
                const key = Number(musicId);
                const next = { ...prev };
                next[key] = !next[key];
                return next;
            });
        } catch (err) {
            console.error("북마크 토글 실패:", err);
        }
    };

    // ⭐ 게시글 + 플레이리스트 + 즐겨찾기 로딩
    useEffect(() => {
        (async () => {
            try {
                const res = await api.get(`/musicpost/${postId}`);
                setPost(res.data.post);
                setPlaylist(res.data.playlist);

                if (isLogin) {
                    const favRes = await api.get(`/bookmark/music/${userId}`);

                    // bookmarkTargetId 기반으로 Favorite Map 생성
                    const map = {};
                    favRes.data.forEach((f) => {
                        const key = Number(f.bookmarkTargetId);
                        map[key] = true;
                    });

                    setFavoriteMap(map);
                }
            } catch (err) {
                console.error(err);
                alert("게시글을 불러오는 중 오류가 발생했습니다.");
            } finally {
                setLoading(false);
            }
        })();
    }, [api, postId, isLogin, userId]);

    if (loading) return <div>불러오는 중...</div>;
    if (!post) return <div>존재하지 않는 게시글입니다.</div>;

    return (
        <div className="usermusicdetail_container">
            <div className="usermusicdetail_playlist">이용자 추천 플레이리스트</div>

            <div className="usermusicdetail_music">
                <ul className="usermusicdetail_music_lists">
                    {playlist.map((m) => {
                        const key = Number(m.musicId);

                        return (
                            <li key={key} className="usermusicdetail_music_list">
                                <button
                                    className={`usermusicdetail_addFavorite ${
                                        favoriteMap[key] ? "primary" : "outline"
                                    }`}
                                    onClick={() => toggleFavorite(m.musicId)}
                                >
                                    {favoriteMap[key] ? (
                                        <FaStar color="#F4C10F" />
                                    ) : (
                                        <FaRegStar />
                                    )}
                                </button>

                                <img
                                    src={
                                        m.musicImagePath ||
                                        "https://placehold.co/80x80?text=No+Image"
                                    }
                                    className="usermusicdetail_img"
                                    alt={m.musicTitle}
                                />

                                <div className="usermusicdetail_music_info">
                                    <span className="usermusicdetail_music_title">
                                        {m.musicTitle}
                                    </span>
                                    <span className="usermusicdetail_music_artist">
                                        {m.musicSinger}
                                    </span>

                                    <button
                                        className="usermusicdetail_preview_btn"
                                        onClick={() => setPreviewTrack(m)}
                                    >
                                        <FaPlay />
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="usermusicdetail_content">
                <div className="usermusicdetail_title">{post.musicPostTitle}</div>

                <div className="usermusicdetail_user">
                    <span>Recommended by </span>
                    <span>{post.userId}</span>
                </div>

                <div className="usermusicdetail_text">{post.musicPostText}</div>
            </div>

            <div className="usermusicdetail_comment">
                <div className="usermusicdetail_comment_title">Comments</div>
                <div className="usermusicdetail_comment_post">
                    <input type="text" placeholder="댓글 입력" />
                    <button className="usermusicdetail_btn">등록</button>
                </div>

                <ul className="usermusicdetail_comment_lists">
                    <li className="usermooviedetail_comment_list">
                        <div className="usermusicdetail_comment_user">
                            <span className="usermusicdetail_comment_id">guest</span>
                            <span className="usermusicdetail_comment_time">방금 전</span>
                            <div className="usermusicdetail_comment_btn">
                                <button className="usermusicdetail_comment_edit">수정</button>
                                <button className="usermusicdetail_comment_delete">
                                    삭제
                                </button>
                            </div>
                        </div>
                        <span className="usermusicdetail_comment_text">
                            댓글 기능은 준비 중입니다!
                        </span>
                    </li>
                </ul>
            </div>

            {previewTrack && (
                <MusicPreview
                    track={previewTrack}
                    onClose={() => setPreviewTrack(null)}
                />
            )}
        </div>
    );
}

export default UserMusicDetail;
