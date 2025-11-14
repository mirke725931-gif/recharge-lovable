import React, { useEffect, useState } from "react";
import { fetchStationsNearby } from "../../api/station";

function FindChargerResult({ coords, onSearch }) {

    const [stations, setStations] = useState([]);

    // API 로딩
    useEffect(() => {
        if (!coords) return;

        fetchStationsNearby(coords.lat, coords.lng, 30).then((res) => {
            if (res && res.data) {
                setStations(res.data);
            }
        });
    }, [coords]);


    return (
        <div 
            className="findcharger-result-wrapper"
            style={{
                height: "100%",
                display: "flex",
                flexDirection: "column"
            }}
        >

            {/* 🔒 고정 헤더 영역 */}
            <div style={{ flexShrink: 0 }}>
                <h3>충전소 찾기</h3>
                <hr style={{ border: "1px solid lightgray" }} />

                <div className="findchargerlogin_list_header">
                    <h3>검색결과</h3>
                    {coords && (
                        <button onClick={() => onSearch(coords.lat, coords.lng)}>
                            새로검색
                        </button>
                    )}
                </div>

                <p className="findchargerlogin_sub_header">
                    총 {stations.length}개의 충전소를 찾았습니다
                </p>
            </div>

            {/* 🔽 카드 리스트만 스크롤 (스크롤바 안 보이게 처리) */}
            <div 
                className="charger-scroll-area"
                style={{
                    flex: 1,
                    overflowY: "auto",
                    paddingRight: "6px"
                }}
            >
                {stations.map((station, idx) => (
                    <div key={idx} className="findchargerlogin_charger_card">

                        <div className="findchargerlogin_charger_card_header">
                            <h4>{station.stationName}</h4>
                            <p>{station.distanceKm ? `${station.distanceKm} Km` : ""}</p>
                        </div>

                        <div className="findchargerlogin_charger_card_address">
                            <img src="/image/location_on.png" />
                            <p>
                                {station.stationAddress}
                                {station.stationAddressDetail && station.stationAddressDetail !== "null"
                                    ? ` ${station.stationAddressDetail}`
                                    : ""}
                                <span>/ {station.ParkingFree === "Y" ? "주차장 무료" : "주차장 유료"}</span>
                            </p>
                        </div>

                        <div className="findchargerlogin_charger_card_option">
                            <p style={{ fontWeight: "bold" }}>LG U+ voltup</p>
                            <div>
                                <p>급속</p>
                                <p>DC콤보</p>
                                <p style={{ color:"rgb(1,199,1)" }}>2/4 사용가능</p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default FindChargerResult;