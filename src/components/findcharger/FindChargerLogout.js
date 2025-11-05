import React from "react";
import '../../css/findcharger/FindChargerLogout.css';

function FindChargerLogout(){

    return(
        <div className="findchargerlogout_container">
            <div className="findchargerlogout_map">
                <img src="https://placehold.co/300x169?text=map" />
                <div className="findcharger_searchbar">
                    <h3>충전소 찾기</h3>
                    <form>
                        <div className="findchargerlogout_search">
                            <img src="/image/search.png"/>
                            <input className="findcharger_input" placeholder="장소,주소 검색"/>
                        </div>
                        <div className="findchargerlogout_location_btn">
                            <img src="/image/location_on.png" />
                            <button type="button">현재 위치 기반으로 찾기</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FindChargerLogout;