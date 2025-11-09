import React, {useState} from "react";
import '../../css/layout/Header.css';
import {Link} from 'react-router-dom';

function Header() {

    const[isLogin, setIsLogin] = useState(false);

    const handleLogout = () => {
        setIsLogin((prev) => !prev);
    };


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
                        {isLogin ? (
                            <li><button onClick={handleLogout}>로그아웃</button></li>
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