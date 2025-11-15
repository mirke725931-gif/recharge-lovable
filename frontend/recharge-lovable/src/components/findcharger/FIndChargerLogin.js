import React, { useState, useRef, useEffect } from "react";
import "../../css/findcharger/FindChargerLogin.css";
import axios from "axios";
import SearchBar from "./SearchBar";
import FindChargerResult from "./FindChargerResult";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function FindChargerLogin() {
    const [isSlide, setIsSlide] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [searchCoords, setSearchCoords] = useState(null);
    const mapRef = useRef(null);
    const[places, setPlaces] = useState([]);

    const handlePlaceSearch = async (lat, lng) => {
        const res = await axios.get(`http://localhost:10809/recharge/api/place/nearby?lat=${lat}&lng=${lng}`);
        console.log("Kakao Place Response ⬇⬇", res.data);
        const merged = [
            ...(res.data.food || []),
            ...(res.data.cafe || [])
        ];

        setPlaces(merged);

    }


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

            // ⭐ map 생성
            const map = new window.kakao.maps.Map(container, {
                center: new window.kakao.maps.LatLng(36.8074, 127.1470),
                level: 7,
            });

            // ⭐ FindChargerResult가 사용하도록 map 저장
            window.currentMap = map;

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
                        center: loc,
                        radius: 3000,
                        strokeWeight: 2,
                        strokeColor: "#4A90E2",
                        strokeOpacity: 0.8,
                        strokeStyle: "solid",
                        fillColor: "#4A90E2",
                        fillOpacity: 0.2,
                    });

                    circle.setMap(map);

                    map.setCenter(loc);
                });
            }
        });
    }, []);

    return (
        <div className="findchargerlogout_container">
            <div className="findchargerlogout_map">

                {/* 🔥 지도 들어가는 곳 */}
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

                <div className={`findchargerlogout_searchbar ${isSlide ? "slide-left" : ""}`}>
                    {showResult ? (
                        <FindChargerResult
                            coords={searchCoords}
                            onSearch={handleSearchClick}
                            onReset={handleResetSearch}
                            onPlaceSearch={handlePlaceSearch}
                        />
                    ) : (
                        <SearchBar onSearch={handleSearchClick} />
                    )}

                    <hr
                        style={{
                            border: "1px solid rgba(235, 235, 235, 1)",
                            margin: "20px 0 10px 0",
                        }}
                    />
                    <div className="findchargerlogout_from">출처: 한국환경공단</div>
                </div>
            </div>

            <button
                className={`slide_arrow_btn ${isSlide ? "slid" : ""}`}
                onClick={handleSlide}
            >
                {isSlide ? <BiChevronRight /> : <BiChevronLeft />}
            </button>
            <div className="findchargerlogout_ad_header" style={{padding:"20px 0"}}>
                    <h3>Re:charge 장소 추천</h3>
                    <p>충전의 순간, 나를 위한 재충전의 시간</p>
            </div>
             <div className="findchargerlogin_place_list">
                {places.map((p, idx)=> (
                <div className="findchargerlogin_place_card" key={idx}>
                    <img src="https://placehold.co/200x140?text=restaurant" />
                    <div className="findchargerlogin_place_card_content">
                        <h3>{p.place_name}</h3>
                        <div className="findchargerlogin_place_content_address">
                            <div>
                                <img src="/image/location_on.png"/>
                                <p>{p.address_name}</p>
                            </div>
                            <p style={{color:"rgba(202, 202, 202, 1)"}}>|</p>
                            <p>{p.phone || "전화번호 없음"}</p>
                        </div>
                        <div className="findchargerlogin_place_btn">
                            <div>
                                <button><img src="/image/naver-logo.png"/></button>
                                <p><a href={`https://map.naver.com/v5/search/${p.place_name}`} target="_blank">네이버지도로 이동</a></p>
                            </div>
                            <div>
                                <button><img src="/image/kakao-logo.png"/></button>
                                <p><a href={`https://map.kakao.com/link/map/${p.id}`} target="_blank">카카오맵으로 이동</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default FindChargerLogin;
