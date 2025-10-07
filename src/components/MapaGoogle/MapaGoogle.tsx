import { useState, useCallback, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "10px",
};

type MapaGoogleProps = {
  defaultPosition: { lat: number; lng: number } | null;
  setPosition?: Function | null;
  center?: { lat: number; lng: number } | null;
};

export default function MapaGoogle({
  defaultPosition,
  setPosition,
  center,
}: MapaGoogleProps) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAnqFPxn8eq_QFwi9HES_LbnyuNmnhf2rA",
  });

  const [markerPosition, setMarkerPosition] = useState<{
    lat: number;
    lng: number;
  } | null>(defaultPosition ?? null);

  const handleMapClick = useCallback((event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setMarkerPosition({ lat, lng });
    }
  }, []);

  useEffect(() => {
    if (setPosition) {
      setPosition(markerPosition);
    }
  }, [markerPosition]);

  if (!isLoaded) return <div>Cargando mapa...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center ?? { lat: 0, lng: 0 }}
      zoom={16}
      onClick={handleMapClick}
    >
      {markerPosition && <Marker position={markerPosition} />}
    </GoogleMap>
  );
}
