import React from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";

function SearchBar({ onSearch }) {

    const handleCurrentLocation = () => {
        if (!navigator.geolocation) {
            alert("브라우저에서 현재 위치를 사용할 수 없습니다.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const lat = pos.coords.latitude;
                const lng = pos.coords.longitude;
                onSearch(lat, lng);
                console.log("현재위치"+"lat:"+lat+"lng:"+lng);
            },
            (err) => {
                alert("현재 위치를 가져올 수 없습니다.");
            }
        );
    };

    return (
        <div>
            <h3>충전소 찾기</h3>
            <form>
                <div className="findchargerlogout_location_btn">
                    <img src="/image/location_on.png" />
                    <button type="button" onClick={handleCurrentLocation}>현재 위치 기반으로 찾기</button>
                </div>
                <div className="findchargerlogout_search">
                    <img src="/image/search.png"/>
                    <input className="findchargerlogout_input" placeholder="장소,주소 검색"/>
                </div>
                <div className="findchargerlogout_filter_option">
                    <div className="findchargerlogout_filter_header">
                        <img src="/image/filter.png"/>
                        필터 옵션
                    </div>
                    <hr style={{border:"1px solid rgba(235, 235, 235, 1)", margin:"3px 0"}}/>
                    <div className="findchargerlogout_filter_brand">
                        충전기 회사<br/>
                        <select>
                            <option>LG U+voltup</option>
                            <option>해피차저</option>
                        </select>
                    </div>
                </div>
                <div className="findchargerlogout_filter_charger_type">
                    충천 타입<br/>
                    <select>
                        <option>DC 콤보</option>
                        <option>AC 3상</option>
                    </select>
                </div>
                <div className="findchargerlogout_filter_charger_speed">
                    충천 속도<br/>
                    <select>
                        <option>급속</option>
                        <option>완속</option>
                    </select>
                </div>
                <div className="findchargerlogout_filter_extra">
                    추가옵션<br/>
                    <div className="findchargerlogout_filter_extra_checkbox">
                    <label className="custom_checkbox">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        대기없음
                    </label>
                    <label className="custom_checkbox">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        개방 주차장
                    </label>
                    </div>
                </div>
                <div className="findchargerlogout_find_btn">
                    <button type="button"><div><AiOutlineThunderbolt /></div><span>충전소 검색하기</span></button>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;
