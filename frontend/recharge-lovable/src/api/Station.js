import React from "react";
import axios from "axios";


export const fetchStationsNearby = async (lat, lng, radiusKm = 30) => {

  return axios.get("http://localhost:10809/recharge/api/station/nearby-with-chargers", {
    params: {
      lat,
      lng,
      radius: radiusKm,
    },
  });
};