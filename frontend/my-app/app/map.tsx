import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

type Shop = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
};

const shops: Shop[] = [
  {
    id: "1",
    name: "Sharma Chaat",
    latitude: 28.6139,
    longitude: 77.209,
  },
  {
    id: "2",
    name: "Modern Salon",
    latitude: 28.6145,
    longitude: 77.2105,
  },
];

export default function MapScreen() {
  const [location, setLocation] = useState<any>(null);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") return;

    const userLocation = await Location.getCurrentPositionAsync({});
    setLocation(userLocation.coords);
  };

  if (!location) {
    return <ActivityIndicator style={{ flex: 1 }} />;
  }

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      showsUserLocation
    >
      {shops.map((shop) => (
        <Marker
          key={shop.id}
          coordinate={{
            latitude: shop.latitude,
            longitude: shop.longitude,
          }}
          title={shop.name}
        />
      ))}
    </MapView>
  );
}
