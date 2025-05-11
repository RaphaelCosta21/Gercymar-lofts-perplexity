"use client";

import { useMemo, useState } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

const MapComponent = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const center = useMemo(() => ({ lat: -22.9784, lng: -42.0289 }), []);

  const mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
    styles: [
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#e9e9e9",
          },
          {
            lightness: 17,
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5",
          },
          {
            lightness: 21,
          },
        ],
      },
    ],
  };

  const onLoad = (map: google.maps.Map): void => {
    setMap(map);
  };

  const onUnmount = (): void => {
    setMap(null);
  };

  if (!isLoaded)
    return (
      <div className="h-64 md:h-96 bg-gray-100 rounded-xl flex items-center justify-center">
        Carregando mapa...
      </div>
    );

  return (
    <GoogleMap
      mapContainerClassName="w-full h-96 rounded-xl"
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={mapOptions}
    >
      <MarkerF
        position={center}
        icon={{
          url: "/marker-icon.svg",
          scaledSize: new google.maps.Size(40, 40),
        }}
      />
    </GoogleMap>
  );
};

export default MapComponent;
