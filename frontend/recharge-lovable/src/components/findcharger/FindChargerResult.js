import React,{useEffect, useState} from "react";
import { fetchStationsNearby } from "../../api/Station";

function FindChargerResult ({coords,onSearch}) {
    const [stations, setStations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const loadStations = async () => {
            if(!coords) return;

            try{
                const res = await fetchStationsNearby(coords.lat, coords.lng, 30);
                if(res && res.data) {
                    setStations(res.data);
                    setError(null);
                } else {
                    setError("데이터를 불러오지 못했습니다.");
                }
            }catch(err) {
                console.error(err);
                setError("충전소를 정보를 가져오는 중 오류가 발생했습니다.");
            }
        };

        loadStations();
    }, [coords]);

    return(
        <div>
            <h3>충전소 찾기</h3>
            <hr style={{border:"lightgray 1px solid"}}/>
            <div className="findchargerlogin_charger_list">
                <div className="findchargerlogin_list_header">
                    <h3>검색결과</h3>
                    {coords &&(
                        <button onClick={()=>onSearch(coords.lat, coords.lng)}>새로검색</button>
                    )}
                </div>
                <p className="findchargerlogin_sub_header">총 {stations.length}개의 충전소를 찾았습니다</p>
                    {stations.map((station)=>(
                        <div className="findchargerlogin_charger_card">
                            <div className="findchargerlogin_charger_card_header">
                                <h4>{station.stationName}</h4>
                                <p>{station.distanceKm ? `${station.distanceKm} Km`:''}</p>
                            </div>
                            <div className="findchargerlogin_charger_card_address">
                                <img src='/image/location_on.png' />
                                <p>
                                    {station.Address}{station.AddressDetail}
                                    <span>/ {station.ParkingFree === "Y" ? "주차장 무료" : "주차장 유료"}</span>
                                </p>
                            </div>
                            <div className="findchargerlogin_charger_card_option">
                                    <p style={{fontWeight:"bold"}}>LG U+ voltup</p>
                                <div>
                                    <p>급속</p>
                                    <p>DC콤보</p>
                                    <p style={{color:"rgb(1, 199, 1)"}}>2/4 사용가능</p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default FindChargerResult