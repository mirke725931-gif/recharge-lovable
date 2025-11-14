import React, {useState} from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import '../../css/findcharger/FindChargerLogin.css'
import FindChargerResult from "./FindChargerResult";
import SearchBar from "./SearchBar";


function FindChargerLogin() {

    const [isSlide, setIsSlide] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [searchCoords, setSearchCoords] = useState(null);

    
    const handleSlide = ()=>{
        setIsSlide(!isSlide);
    }

    const handleSearchClick= (lat,lng)=>{
        setSearchCoords({lat,lng});
        setShowResult(true);
    }

 

    return (

        <div className="findchargerlogout_container">
                    <div className="findchargerlogout_map">
                        <img className="map_img" src="https://placehold.co/300x169?text=map" />
                        <div className={`findchargerlogout_searchbar ${isSlide ? 'slide-left' : ''}`}>
                            {showResult ? (
                                <FindChargerResult
                                    coords={searchCoords}
                                    onSearch={handleSearchClick}
                                />
                            ):(<SearchBar onSearch={handleSearchClick}/>)}

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