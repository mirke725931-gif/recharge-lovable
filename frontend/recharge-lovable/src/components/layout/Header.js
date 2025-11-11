import React, {useState,useEffect} from "react";
import '../../css/layout/Header.css';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import AuthLogIn from "./AuthLogIn";
import axios from "axios";

function Header() {

    const[isLogin, setIsLogin] = useState(false);
    const[userId, setUserId] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
        const checkLogin = async () => {
            try{
                const res = await axios.get("http://localhost:10809/recharge/api/users/check",{
                    withCredentials: true
                });
                console.log("check 응답:", res.data);
                setIsLogin(true);
                setUserId(res.data.userId);
            } catch (error) {
                if (error.response?.status === 401) {
                    // 세션 만료 or 로그아웃 상태 → 조용히 처리
                    setIsLogin(false);
                    setUserId("");
                } else {
                    // 진짜 문제만 로그로 남김
                    console.error("로그인 상태 확인 중 오류:", error);
                }
            } finally{
                    setIsLoading(false);
            }
        };

        checkLogin();
    }, [location.pathname]);

    const handleLogout = async () => {
        try{
            await axios.post("http://localhost:10809/recharge/api/users/logout",{},{
                withCredentials: true
            });
            setIsLogin(false);
            setUserId("");
            console.log("로그아웃 성공");
            navigate("/");
            window.location.reload();
        } catch (error){
            console.error("로그아웃 실패:", error);
            alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
        }
    }

    return(
        <div className="nav_container">
            <div>
                <Link className="nav_logo"to="/">
                    <img className="logo" src="/image/logo.png" alt="logo"/>
                </Link>
            </div>
            <nav className="header_nav">
                <ul className="content_nav">
                    <Link to="/find_charger">충전소 찾기</Link>
                    <Link to="/find_contents/movie">영화·음악 추천</Link>
                    <Link to="/fortune">운세</Link>
                    <Link to="/community">자유게시판</Link>
                    <Link to="/notice">공지사항</Link>
                </ul>
            </nav>
                <ul className="auth_nav">
                        {isLoading ? null : isLogin ? (
                            <AuthLogIn userId={userId} onLogout={handleLogout} /> 
                        ) : (
                                <>
                                    <li><Link to="/login">로그인</Link></li>
                                    <li><Link to="/agreement">회원가입</Link></li>
                                </>
                            )}
                </ul>
        </div>
    )
}

export default Header