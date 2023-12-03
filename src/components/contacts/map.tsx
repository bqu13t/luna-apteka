"use client";

import React, { useRef, useEffect, useState } from "react";
import mapboxgl, { Map as CustomMap } from "mapbox-gl";
import "../../styles/mapbox.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYnF1MTN0IiwiYSI6ImNscGlsYzNzajAwbnUyaW83bzdyZmFieG8ifQ.NieytJ-XGbivXz7nXv3sNw";

type ExtendedMap = CustomMap & {
  setConfigProperty: (
    layer: string,
    property: string,
    value: string | boolean,
  ) => void;
};

export default function Map() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(82.90314555499413);
  const [lat, setLat] = useState(55.06584507569244);
  const [zoom, setZoom] = useState(15.3);
  const [pitch, setPitch] = useState(45);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    const colorScheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const lightPreset = colorScheme === "dark" ? "night" : "dawn";

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      center: [lng, lat],
      zoom: zoom,
      pitch: pitch,
      antialias: true,
    });

    map.current.on("style.load", () => {
      if (map.current) {
        (map.current as ExtendedMap).setConfigProperty(
          "basemap",
          "lightPreset",
          lightPreset,
        );
        (map.current as ExtendedMap).setConfigProperty(
          "basemap",
          "showPointOfInterestLabels",
          false,
        );
      }
      const popup = new mapboxgl.Popup({
        closeOnClick: false,
        closeButton: false,
        anchor: "bottom-right",
      })
        .setLngLat([82.90303531983233, 55.06584507569244])
        .setHTML(
          '<img src="/luna.png" alt="пиццерия Лунафуд, Новосибирск, Дачная 60к14" width="25px" height="25px">',
        )
        .addTo(map.current!);
      popup.addClassName("");
    });

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const currentOffset = ({
      screenWidth,
      screenHeight,
    }: {
      screenWidth: number;
      screenHeight: number;
    }): mapboxgl.PointLike => {
      if (screenWidth < 640) {
        return [0, screenHeight - screenHeight * 0.8];
      } else {
        return [0, 0];
      }
    };

    function fly() {
      const offset = currentOffset({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      });
      map.current?.flyTo({
        center: [82.90303531983233, 55.06584507569244],
        essential: true,
        zoom: 16.5,
        duration: 15000,
        offset: offset,
      });
    }

    map.current.on("style.load", () => {
      fly();
    });
  }, [lng, lat, zoom, pitch]);

  return <div ref={mapContainer} className="map-container" />;
}
