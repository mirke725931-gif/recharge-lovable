import React from "react";

function FindChargerResult ({onSearch}) {

    return(
        <div>
            <h3>충전소 찾기</h3>
            <hr style={{border:"lightgray 1px solid"}}/>
            <div className="findchargerlogin_charger_list">
                <div className="findchargerlogin_list_header">
                    <h3>검색결과</h3>
                    <button onClick={onSearch}>새로검색</button>
                </div>
                <p className="findchargerlogin_sub_header">총 6개의 충전소를 찾았습니다</p>
                <div className="findchargerlogin_charger_card">
                    <div className="findchargerlogin_charger_card_header">
                        <h4>천안역 충전소</h4>
                        <p>7Km</p>
                    </div>
                    <div className="findchargerlogin_charger_card_address">
                        <img src='/image/location_on.png' />
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
        </div>
    )
}

export default FindChargerResult