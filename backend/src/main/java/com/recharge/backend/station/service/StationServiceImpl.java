package com.recharge.backend.station.service;


import com.recharge.backend.station.dao.StationDAO;
import com.recharge.backend.station.vo.StationVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StationServiceImpl implements StationService{

    @Autowired
    private StationDAO stationDAO;

    @Override
    public void saveOrUpdateStation(StationVO station) {
        int exists = stationDAO.existsStation(station.getStationId());

        if(exists>0) {
            stationDAO.updateStation(station);
        } else {
            stationDAO.insertStation(station);
        }

    }

    @Override
    public List<StationVO> findNearbyStations(double lat, double lng, double radius) {
        return stationDAO.findNearbyStations(lat,lng,radius);
    }
}
