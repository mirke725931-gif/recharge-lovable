package com.recharge.backend.charger.service;

import com.recharge.backend.charger.vo.ChargerVO;

import java.util.List;

public interface ChargerService {

    int saveCharger(ChargerVO charger);
//
//    public List<ChargerVO> getChargersWithStatus(String stationId);
}
