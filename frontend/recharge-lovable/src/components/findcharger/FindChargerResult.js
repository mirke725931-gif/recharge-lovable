import React, { useEffect, useState } from "react";
import { fetchStationsNearby } from "../../api/Station";

function FindChargerResult({ coords, onReset }) {

    const [stations, setStations] = useState([]);

    // 🔥 충전기 타입 매핑 테이블
    const chgerTypeMap = {
        "01": "DC차데모",
        "02": "AC완속",
        "03": "DC차데모 + AC3상",
        "04": "DC콤보",
        "05": "DC차데모 + DC콤보",
        "06": "DC차데모 + AC3상 + DC콤보",
        "07": "AC3상",
        "08": "DC콤보(완속)",
        "09": "NACS",
        "10": "DC콤보 + NACS",
        "11": "DC콤보2 (버스)"
    };
    const getChargerTypeName = (code) => chgerTypeMap[code] || "기타";

    // 🔥 타입별 컬러
    const chgerTypeColorMap = {
        "01": "#FF4E4E", // 레드
        "02": "#00C9A7", // 민트
        "03": "#FF8A00", // 오렌지
        "04": "#2979FF", // 블루
        "05": "#B620E0", // 퍼플
        "06": "#FF007E", // 핫핑크
        "07": "#00B345", // 그린
        "08": "#0081F7", // 라이트블루
        "09": "#FFC400", // 옐로우
        "10": "#FF5C00", // 다크오렌지
        "11": "#424242"  // 다크그레이
};
    const getChargerTypeColor = (code) => chgerTypeColorMap[code] || "#999";



    // ==========================
    // 🔥 스테이션 API 호출
    // ==========================
    useEffect(() => {
        const loadStations = async () => {
            if (!coords) return;

            try {
                const res = await fetchStationsNearby(coords.lat, coords.lng, 5);

                if (!res || !res.data) {
                    setStations([]);
                    return;
                }

                setStations(res.data);

            } catch (err) {
                console.log("스테이션 조회 실패:", err);
                setStations([]);
            }
        };

        loadStations();
    }, [coords]);


    // 🔥 상위 30개만 노출
    const limitedStations = stations.slice(0, 30);



    return (
        <div className="findcharger-result-wrapper"
            style={{ height: "100%", display: "flex", flexDirection: "column" }}>

            {/* HEADER */}
            <div style={{ flexShrink: 0 }}>
                <h3>충전소 찾기</h3>
                <hr style={{ border: "1px solid lightgray" }} />

                <div className="findchargerlogin_list_header">
                    <h3>검색결과</h3>
                    {coords && <button onClick={onReset}>새로검색</button>}
                </div>

                <p className="findchargerlogin_sub_header">
                    총 {stations.length}개의 충전소 중
                    <b style={{ color: "green" }}> 상위 30개</b>만 표시합니다
                </p>
            </div>


            {/* LIST AREA */}
            <div className="charger-scroll-area"
                style={{ flex: 1, overflowY: "auto", paddingRight: "6px" }}>

                {limitedStations.map((station, idx) => (

                    <div key={idx} className="findchargerlogin_charger_card">

                        {/* TITLE */}
                        <div className="findchargerlogin_charger_card_header">
                            <h4>{station.stationName}</h4>
                            <p>{station.distanceKm ? `${station.distanceKm} Km` : ""}</p>
                        </div>

                        {/* ADDRESS */}
                        <div className="findchargerlogin_charger_card_address">
                            <img src="/image/location_on.png" />

                            <p>
                                {station.stationAddress}
                                {station.stationAddressDetail &&
                                station.stationAddressDetail !== "null"
                                    ? ` ${station.stationAddressDetail}` : ""}

                                {/* 무료/유료 색상 */}
                                <span
                                    style={{
                                        marginLeft: "5px",
                                        color: station.stationParkingFree === "Y" ? "green" : "red"
                                    }}
                                >
                                    / {station.stationParkingFree === "Y" ? "주차장 무료" : "주차장 유료"}
                                </span>
                            </p>
                        </div>

                        {/* OPTIONS */}
                        <div className="findchargerlogin_charger_card_option">

                            {/* Provider */}
                            <p style={{ fontWeight: "bold" }}>
                                {station.chargers?.[0]?.chargerProvider || "알 수 없음"}
                            </p>

                            <div style={{
                                display: "flex",
                                gap: "20px",
                                fontSize: "13px",
                                alignItems: "center"
                            }}>

                                {/* 속도 */}
                                <p>
                                    {[...new Set(
                                        station.chargers.map(ch => {
                                            const s = Number(ch.chargerSpeed);
                                            if (!s) return "기타";
                                            if (s < 7) return "완속";
                                            if (s <= 50) return "중속";
                                            return "급속";
                                        })
                                    )].join(", ")}
                                </p>


                                {/* ⭐ 왼쪽: 모든 타입 (컬러 + 텍스트) */}
                                <p style={{ display: "flex", gap: "8px" }}>
                                    {[...new Set(station.chargers.map(ch => ch.chargerType))].map(code => (
                                        <span key={code} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                            <span
                                                style={{
                                                    width: "8px",
                                                    height: "8px",
                                                    borderRadius: "50%",
                                                    backgroundColor: getChargerTypeColor(code),
                                                    display: "inline-block"
                                                }}
                                            ></span>
                                            {getChargerTypeName(code)}
                                        </span>
                                    ))}
                                </p>


                                {/* ⭐ 오른쪽: 사용가능 타입 아이콘만! */}
                                <p
                                    style={{
                                        minWidth: "120px",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "6px",
                                        color:
                                            station.chargers.filter(ch => ch.status === "2").length === 0
                                                ? "red"
                                                : "rgb(1,199,1)"
                                    }}
                                >

                                    {/* 3/4 사용가능 */}
                                    {(() => {
                                        const total = station.chargers?.[0]?.chargerTotal || 0;
                                        const available = station.chargers.filter(ch => ch.status === "2").length;

                                        return available === 0
                                            ? `0/${total} 빈 충전기 없음`
                                            : `${available}/${total} 사용가능`;
                                    })()}

                                    {/* 🔥 사용가능 타입만 동그라미 */}
                                    <span style={{ display: "flex", gap: "4px" }}>
                                        {[
                                            ...new Set(
                                                station.chargers
                                                    .filter(ch => ch.status === "2")
                                                    .map(ch => ch.chargerType)
                                            )
                                        ].map(code => (
                                            <span
                                                key={code}
                                                style={{
                                                    width: "8px",
                                                    height: "8px",
                                                    borderRadius: "50%",
                                                    backgroundColor: getChargerTypeColor(code),
                                                    display: "inline-block"
                                                }}
                                            ></span>
                                        ))}
                                    </span>

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
