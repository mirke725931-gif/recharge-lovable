import React, {useState} from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import '../../css/findcharger/FindChargerLogin.css'


function FindChargerLogin() {

    const [isSlide, setIsSlide] = useState(false);
    
        const handleSlide = ()=>{
            setIsSlide(!isSlide);
        }

    return (

        <div className="findchargerlogout_container">
                    <div className="findchargerlogout_map">
                        <img className="map_img" src="https://placehold.co/300x169?text=map" />
                        <div className={`findchargerlogout_searchbar ${isSlide ? 'slide-left' : ''}`}>
                            <h3>충전소 찾기</h3>
                            <hr style={{border:"lightgray 1px solid"}}/>
                            <div className="findchargerlogin_charger_list">
                                <div className="findchargerlogin_list_header">
                                    <h3>검색결과</h3>
                                    <button>새로검색</button>
                                </div>
                                <p className="findchargerlogin_sub_header">총 6개의 충전소를 찾았습니다</p>
                                <div className="findchargerlogin_charger_card">
                                    <div className="findchargerlogin_charger_card_header">
                                        <h4>천안역 충전소</h4>
                                        <p>7Km</p>
                                    </div>
                                    <div className="findchargerlogin_charger_card_adrress">
                                        <img src="image/location_on.png" />
                                        <p>충남 천안시 동남구 삼룡동 123-45<span> / 개방</span></p>
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
                            </div>
                            {/* <h3>충전소 찾기</h3>
                            <form>
                                <div className="findchargerlogout_location_btn">
                                    <img src="/image/location_on.png" />
                                    <button type="button">현재 위치 기반으로 찾기</button>
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
                                    <button><div><AiOutlineThunderbolt /></div><span>충전소 검색하기</span></button>
                                </div>
                            </form> */}
                            <hr style={{border:"1px solid rgba(235, 235, 235, 1)", margin:"20px 0 10px 0"}}/>
                            <div className="findchargerlogout_from">
                                출처: 한국환경공단
                            </div>
                        </div>
                    </div>
                    <button className={`slide_arrow_btn ${isSlide ? 'slid' : ''}`} onClick={handleSlide}>
                            {isSlide ? <BiChevronRight /> : <BiChevronLeft />}
                    </button>
                    <div className="findchargerlogin_place">
                        <div className="findchargerlogin_place_header">
                            <h3>Re:charge 장소 추천</h3>
                            <p>충전의 순간, 나를 위한 재충전의 시간</p>
                        </div>
                        <div className="findchargerlogin_place_list">
                            <div className="findchargerlogin_place_card">
                                <img src="https://placehold.co/200x140?text=restaurant" />
                                <div className="findchargerlogin_place_card_content">
                                    <h3>휴먼카페</h3>
                                    <div className="findchargerlogin_place_content_address">
                                        <div>
                                            <img src="/image/location_on.png"/>
                                            <p>천안시 동남구 대흥동 134</p>
                                        </div>
                                        <p style={{color:"rgba(202, 202, 202, 1)"}}>|</p>
                                        <p>tel: 041-123-4567</p>
                                    </div>
                                    <div className="findchargerlogin_place_btn">
                                        <div>
                                            <button><img src="/image/naver-logo.png"/></button>
                                            <p>네이버지도로 이동</p>
                                        </div>
                                        <div>
                                            <button><img src="/image/kakao-logo.png"/></button>
                                            <p>카카오맵으로 이동</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="findchargerlogin_place_card">
                                <img src="https://placehold.co/200x140?text=restaurant" />
                                <div className="findchargerlogin_place_card_content">
                                    <h3>휴먼카페</h3>
                                    <div className="findchargerlogin_place_content_address">
                                        <div>
                                            <img src="/image/location_on.png"/>
                                            <p>천안시 동남구 대흥동 134</p>
                                        </div>
                                        <p style={{color:"rgba(202, 202, 202, 1)"}}>|</p>
                                        <p>tel: 041-123-4567</p>
                                    </div>
                                    <div className="findchargerlogin_place_btn">
                                        <div>
                                            <button><img src="/image/naver-logo.png"/></button>
                                            <p>네이버지도로 이동</p>
                                        </div>
                                        <div>
                                            <button><img src="/image/kakao-logo.png"/></button>
                                            <p>카카오맵으로 이동</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="findchargerlogin_place_card">
                                <img src="https://placehold.co/200x140?text=restaurant" />
                                <div className="findchargerlogin_place_card_content">
                                    <h3>휴먼카페</h3>
                                    <div className="findchargerlogin_place_content_address">
                                        <div>
                                            <img src="/image/location_on.png"/>
                                            <p>천안시 동남구 대흥동 134</p>
                                        </div>
                                        <p style={{color:"rgba(202, 202, 202, 1)"}}>|</p>
                                        <p>tel: 041-123-4567</p>
                                    </div>
                                    <div className="findchargerlogin_place_btn">
                                        <div>
                                            <button><img src="/image/naver-logo.png"/></button>
                                            <p>네이버지도로 이동</p>
                                        </div>
                                        <div>
                                            <button><img src="/image/kakao-logo.png"/></button>
                                            <p>카카오맵으로 이동</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    )

}
export default FindChargerLogin;