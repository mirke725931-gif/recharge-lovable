import React from "react";
import '../../css/fortune/Fortune.css';

function Fortune() {

    return(
     <div className="fortune_main">
        <div>
            <h2>오늘의 운세</h2>
            <div className="fortune_container">
                <div className="fortune_content_row1">
                    <div className="fortune_content_row1_box1">
                        <p>성별</p>
                        <select>
                            <option>남성</option>
                            <option>여성</option>
                        </select>
                    </div>
                    <div className="fortune_content_row1_box2">
                        <p>달력</p>
                        <select>
                            <option value="solar">양력</option>
                            <option value="lunar">음력(평달)</option>
                            <option value="lunar_leap">음력(윤달)</option>
                        </select>
                    </div>
                    <div className="fortune_content_row1_box3">
                        <p>태어난 시간</p>
                        <select /*value={birthTime}*/>
                            <option value="">태어난 시간 모름</option>
                            <option value="23:30">23:30 ~ 01:29 (자시 子時)</option>
                            <option value="01:30">01:30 ~ 03:29 (축시 丑時)</option>
                            <option value="03:30">03:30 ~ 05:29 (인시 寅時)</option>
                            <option value="05:30">05:30 ~ 07:29 (묘시 卯時)</option>
                            <option value="07:30">07:30 ~ 09:29 (진시 辰時)</option>
                            <option value="09:30">09:30 ~ 11:29 (사시 巳時)</option>
                            <option value="11:30">11:30 ~ 13:29 (오시 午時)</option>
                            <option value="13:30">13:30 ~ 15:29 (미시 未時)</option>
                            <option value="15:30">15:30 ~ 17:29 (신시 申時)</option>
                            <option value="17:30">17:30 ~ 19:29 (유시 酉時)</option>
                            <option value="19:30">19:30 ~ 21:29 (술시 戌時)</option>
                            <option value="21:30">21:30 ~ 23:29 (해시 亥時)</option>
                        </select>
                    </div>
                </div>
                    <div className="fortune_content_row2">
                        <p>생년월일</p>
                        <input type="date" />
                    </div>
                    <div className="fortune_content_row3">
                        <button className="fortune_btn">운세 확인하기</button>
                    </div>
            </div>
            <div className="fortune_result">
            </div>
        </div>

     </div>   
    );
}

export default Fortune;