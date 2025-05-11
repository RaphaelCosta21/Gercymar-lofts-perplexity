// src/components/InteractiveMap.tsx
"use client";

import { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";

// Dados dos pontos turísticos
const touristSpots = [
  {
    id: 1,
    name: "Praia dos Anjos",
    position: { lat: -22.971, lng: -42.022 },
    type: "beach",
    description: "A menos de 1km dos lofts, ótima para mergulho",
  },
  {
    id: 2,
    name: "Praia do Forno",
    position: { lat: -22.966, lng: -42.018 },
    type: "beach",
    description: "Uma das praias mais bonitas da região",
  },
  {
    id: 3,
    name: "Pontal do Atalaia",
    position: { lat: -22.989, lng: -42.015 },
    type: "attraction",
    description: "Vista panorâmica de Arraial do Cabo",
  },
  {
    id: 4,
    name: "Centro de Arraial",
    position: { lat: -22.976, lng: -42.026 },
    type: "shopping",
    description: "Restaurantes, comércio e vida noturna",
  },
  // Adicione mais pontos conforme necessário
];

// Localização do GercyMar Lofts
const gercymarPosition = { lat: -22.974, lng: -42.024 };

const InteractiveMap = () => {
  const [activeMarker, setActiveMarker] = useState<string | number | null>(
    null
  );

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const handleMarkerClick = (markerId: number | string) => {
    setActiveMarker(markerId === activeMarker ? null : markerId);
  };

  const getMarkerIcon = (type: string) => {
    switch (type) {
      case "beach":
        return "/icons/beach-marker.svg";
      case "attraction":
        return "/icons/attraction-marker.svg";
      case "shopping":
        return "/icons/shopping-marker.svg";
      default:
        return "/icons/default-marker.svg";
    }
  };

  if (!isLoaded)
    return (
      <div className="h-96 bg-gray-100 rounded-xl flex items-center justify-center">
        Carregando mapa...
      </div>
    );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3 justify-center">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-ocean-blue-500"></div>
          <span className="text-sm">Praias</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-amber-500"></div>
          <span className="text-sm">Atrações</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span className="text-sm">Compras & Gastronomia</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <span className="text-sm">GercyMar Lofts</span>
        </div>
      </div>

      <GoogleMap
        mapContainerClassName="w-full h-96 rounded-xl"
        center={gercymarPosition}
        zoom={14}
        options={{
          styles: [
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
            },
            {
              featureType: "landscape",
              elementType: "geometry",
              stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
            },
          ],
          fullscreenControl: false,
        }}
      >
        {/* Marcador dos lofts */}
        <MarkerF
          position={gercymarPosition}
          icon={{
            url: "/icons/home-marker.svg",
            scaledSize: new google.maps.Size(40, 40),
          }}
          onClick={() => handleMarkerClick("gercymar")}
        >
          {activeMarker === "gercymar" && (
            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
              <div className="p-2">
                <h4 className="font-bold text-sm">GercyMar Lofts</h4>
                <p className="text-xs mt-1">
                  Sua hospedagem em Arraial do Cabo
                </p>
              </div>
            </InfoWindowF>
          )}
        </MarkerF>

        {/* Marcadores de pontos turísticos */}
        {touristSpots.map((spot) => (
          <MarkerF
            key={spot.id}
            position={spot.position}
            icon={{
              url: getMarkerIcon(spot.type),
              scaledSize: new google.maps.Size(32, 32),
            }}
            onClick={() => handleMarkerClick(spot.id)}
          >
            {activeMarker === spot.id && (
              <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                <div className="p-2">
                  <h4 className="font-bold text-sm">{spot.name}</h4>
                  <p className="text-xs mt-1">{spot.description}</p>
                </div>
              </InfoWindowF>
            )}
          </MarkerF>
        ))}
      </GoogleMap>
    </div>
  );
};

export default InteractiveMap;
