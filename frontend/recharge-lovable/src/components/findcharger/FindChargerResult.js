import React, { useEffect, useState } from "react";
import { fetchStationsNearby } from "../../api/Station";
import { fetchChargersByStation } from "../../api/Charger";

function FindChargerResult({ coords, onReset }) {

    const [stations, setStations] = useState([]);

    useEffect(() => {
        const loadStations = async () => {
            if (!coords) return;

            try {
                const res = await fetchStationsNearby(coords.lat, coords.lng, 5);

                if (!res || !res.data) {
                    console.error("스테이션 조회 실패");
                    setStations([]);
                    return;
                }

                const stationList = res.data;

                // 🔥 스테이션 + 충전기 병합
                const merged = await Promise.all(
                    stationList.map(async (station) => {
                        try {
                            const chargersRes = await fetchChargersByStation(station.stationId);
                            return {
                                ...station,
                                chargers: chargersRes && chargersRes.data ? chargersRes.data : []
                            };
                        } catch (err) {
                            console.error("충전기 조회 실패:", err);
                            return { ...station, chargers: [] };
                        }
                    })
                );

                setStations(merged);

            } catch (err) {
                console.error("스테이션 + 충전기 병합 중 오류:", err);
                setStations([]);
            }
        };

        loadStations();
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
                        <button onClick={onReset}>새로검색</button>
                    )}
                </div>

                <p className="findchargerlogin_sub_header">
                    총 {stations.length}개의 충전소를 찾았습니다
                </p>
            </div>

            {/* 카드 목록 스크롤 영역 */}
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

                        {/* 카드 헤더 */}
                        <div className="findchargerlogin_charger_card_header">
                            <h4>{station.stationName}</h4>
                            <p>{station.distanceKm ? `${station.distanceKm} Km` : ""}</p>
                        </div>

                        {/* 주소 */}
                        <div className="findchargerlogin_charger_card_address">
                            <img src="/image/location_on.png" alt="loc" />
                            <p>
                                {station.stationAddress}
                                {station.stationAddressDetail && station.stationAddressDetail !== "null"
                                    ? ` ${station.stationAddressDetail}`
                                    : ""}
                                <span>
                                    / {station.ParkingFree === "Y" ? "주차장 무료" : "주차장 유료"}
                                </span>
                            </p>
                        </div>

                        {/* 충전기 옵션 */}
                        <div className="findchargerlogin_charger_card_option">

                            {/* 1) 충전기 회사 */}
                            <p style={{ fontWeight: "bold" }}>
                                {station.chargers?.[0]?.chargerProvider || "알 수 없음"}
                            </p>

                            {/* 2) 충전기 정보 세 줄 */}
                            <div style={{ display: "flex", gap: "20px", fontSize: "13px" }}>

                                {/* 급속/중속/완속 */}
                                <p>
                                    {
                                        [...new Set(
                                            station.chargers?.map((ch) => {
                                                const speed = Number(ch.chargerSpeed);
                                                if (!speed) return "기타";
                                                if (speed < 7) return "완속";
                                                if (speed <= 50) return "중속";
                                                return "급속";
                                            })
                                        )].join(", ")
                                    }
                                </p>

                                {/* 충전기 타입 */}
                                <p>
                                    {
                                        [...new Set(
                                            station.chargers?.map((ch) => ch.chargerType || "기타")
                                        )].join(", ")
                                    }
                                </p>

                                {/* 사용가능 / 전체 */}
                                <p style={{ color: "rgb(1,199,1)" }}>
                                    {
                                        (() => {
                                            const total =
                                                station.chargers?.[0]?.chargerTotal || 0;
                                            const available =
                                                station.chargers?.filter((ch) => ch.status === "2").length;
                                            return `${available}/${total} 사용가능`;
                                        })()
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default FindChargerResult;
