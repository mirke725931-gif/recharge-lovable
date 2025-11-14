package com.recharge.backend.station.vo;

import lombok.Data;

@Data
public class StationVO {
    private String stationId;
    private String stationName;
    private Double stationLatitude;
    private Double stationLongitude;
    private String stationAddress;
    private String stationAddressDetail;
    private String stationParkingFree;

    private String createId;
    private String updateId;
    private Double distanceKm;
}
