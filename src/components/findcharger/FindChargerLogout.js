import React, {useState} from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import '../../css/findcharger/FindChargerLogout.css';

function FindChargerLogout(){

    const [isSlide, setIsSlide] = useState(false);

    const handleSlide = ()=>{
        setIsSlide(!isSlide);
    }

    return(
        <div className="findchargerlogout_container">
            <div className="findchargerlogout_map">
                <img src="https://placehold.co/300x169?text=map" />
                <div className={`findchargerlogout_searchbar ${isSlide ? 'slide-left' : ''}`}>
                    <h3>충전소 찾기</h3>
                    <form>
                        <div className="findchargerlogout_search">
                            <img src="/image/search.png"/>
                            <input className="findchargerlogout_input" placeholder="장소,주소 검색"/>
                        </div>
                        <div className="findchargerlogout_location_btn">
                            <img src="/image/location_on.png" />
                            <button type="button">현재 위치 기반으로 찾기</button>
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
                            <button><div><AiOutlineThunderbolt /></div><span>충전소 검색하기</span></button>
                        </div>
                    </form>
                    <hr style={{border:"1px solid rgba(235, 235, 235, 1)", margin:"20px 0 10px 0"}}/>
                    <div className="findchargerlogout_from">
                        출처: 한국환경공단
                    </div>
                    <button className="slide_arrow_btn" onClick={handleSlide}>
                        {isSlide ? <BiChevronRight /> : <BiChevronLeft />}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FindChargerLogout;