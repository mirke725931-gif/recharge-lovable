package com.recharge.backend.station.service;

import com.recharge.backend.station.vo.StationVO;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StationBatchService {

    @Autowired
    private EvApiService evApiService;

    @Autowired
    private StationParserService parserService;

    @Autowired
    private StationService stationService;

    public void batchSaveStation() {

        String zcode = "44";

        int pageNo = 1;
        int numOfRows = 9999;

        String firstJson = evApiService.fetchChargerInfo(pageNo, numOfRows, zcode);

        JSONObject firstObj = new JSONObject(firstJson);
        int totalCount = firstObj.getInt("totalCount");

        System.out.println("총 충전소 수:" + totalCount);

        int totalPage=(int)Math.ceil((double) totalCount / numOfRows);

        for(int i=1; i<=totalPage; i++) {

            String json = evApiService.fetchChargerInfo(i, numOfRows, zcode);

            List<StationVO> list = parserService.parseStationList(json);

            for(StationVO vo : list) {
                stationService.saveOrUpdateStation(vo);
            }
            System.out.println(i + "페이지 저장("+list.size()+"건");
        }
        System.out.println("TB_STATION 충남 저장 완료");
    }
}
