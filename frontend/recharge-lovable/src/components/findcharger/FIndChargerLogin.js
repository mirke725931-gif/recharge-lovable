import React, { useState, useRef, useEffect } from "react";
import "../../css/findcharger/FindChargerLogin.css";

import SearchBar from "./SearchBar";
import FindChargerResult from "./FindChargerResult";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function FindChargerLogin() {
    const [isSlide, setIsSlide] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [searchCoords, setSearchCoords] = useState(null);
    const mapRef = useRef(null);

    const handleSearchClick = (lat, lng) => {
        setSearchCoords({ lat, lng });
        setShowResult(true);
    };

    const handleSlide = () => setIsSlide(!isSlide);
    const handleResetSearch = () => {
        setShowResult(false);
        setSearchCoords(null);
    };

    // 🔥 카카오 지도 로드
    useEffect(() => {
        if (!window.kakao || !window.kakao.maps) {
            console.log("⚠️ Kakao SDK 아직 준비 안됨");
            return;
        }

        console.log("🔥 Kakao SDK 로딩 시작...");

        window.kakao.maps.load(() => {
            console.log("🎉 Kakao 지도 로드됨!!!");

            const container = mapRef.current;

            const map = new window.kakao.maps.Map(container, {
                center: new window.kakao.maps.LatLng(36.8074, 127.1470),
                level: 7,
            });

            // 📍 내 위치
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                    const loc = new window.kakao.maps.LatLng(
                        pos.coords.latitude,
                        pos.coords.longitude
                    );

                    new window.kakao.maps.Marker({
                        map,
                        position: loc,
                    });

                    const circle = new window.kakao.maps.Circle({
                        center: loc,         // 중심 좌표(현재 위치)
                        radius: 5000,                // 반경 (5km = 5000m)
                        strokeWeight: 2,             // 선 두께
                        strokeColor: '#4A90E2',      // 테두리 색
                        strokeOpacity: 0.8,          // 테두리 투명도
                        strokeStyle: 'solid',        // 테두리 스타일
                        fillColor: '#4A90E2',        // 내부 색
                        fillOpacity: 0.2             // 내부 투명도
                    });

                    // 지도에 원 표시
                    circle.setMap(map);

                    map.setCenter(loc);
                });
            }
        });
    }, []);

    return (
        <div className="findchargerlogout_container">
            <div className="findchargerlogout_map">

                {/* 🔥 여기 mapRef div가 지도 들어갈 자리 */}
                <div
                    ref={mapRef}
                    id="kakao-map"
                    style={{
                        width: "100%",
                        height: "685px",
                        background: "#eee",
                        borderRadius: "10px",
                    }}
                />

                <div className={`findchargerlogout_searchbar ${isSlide ? 'slide-left' : ''}`}>
                    {showResult ? (
                        <FindChargerResult
                            coords={searchCoords}
                            onSearch={handleSearchClick}
                            onReset={handleResetSearch}
                        />
                    ) : (
                        <SearchBar onSearch={handleSearchClick} />
                    )}

                    <hr style={{ border: "1px solid rgba(235, 235, 235, 1)", margin: "20px 0 10px 0" }} />
                    <div className="findchargerlogout_from">출처: 한국환경공단</div>
                </div>
            </div>

            <button className={`slide_arrow_btn ${isSlide ? 'slid' : ''}`} onClick={handleSlide}>
                {isSlide ? <BiChevronRight /> : <BiChevronLeft />}
            </button>
        </div>
    );
}

export default FindChargerLogin;
