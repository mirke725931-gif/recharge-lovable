import React from "react";
import axios from "axios";


export const fetchStationsNearby = async (lat, lng, radiusKm = 5) => {

  return axios.get("http://localhost:10809/recharge/api/station/nearby", {
    params: {
      lat,
      lng,
      radius: radiusKm,
    },
  });
};