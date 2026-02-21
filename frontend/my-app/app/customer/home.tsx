import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";

type Shop = {
  id: string;
  name: string;
  image: string;
  rating: number;
  latitude: number;
  longitude: number;
  distance?: number;
};

const shopsData: Shop[] = [
  {
    id: "1",
    name: "Sharma Chaat",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
    rating: 4.5,
    latitude: 28.6139,
    longitude: 77.209,
  },
  {
    id: "2",
    name: "Modern Salon",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f",
    rating: 4.2,
    latitude: 28.6145,
    longitude: 77.2105,
  },
];

export default function HomeScreen() {
  const [location, setLocation] = useState<any>(null);
  const [nearbyShops, setNearbyShops] = useState<Shop[]>([]);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      alert("Permission denied");
      return;
    }

    const userLocation = await Location.getCurrentPositionAsync({});
    setLocation(userLocation.coords);

    calculateDistances(userLocation.coords);
  };

  const calculateDistances = (coords: any) => {
    const updatedShops = shopsData.map((shop) => {
      const distance = getDistance(
        coords.latitude,
        coords.longitude,
        shop.latitude,
        shop.longitude
      );

      return { ...shop, distance };
    });

    // Sort by nearest
    updatedShops.sort((a, b) => (a.distance ?? 0) - (b.distance ?? 0));

    setNearbyShops(updatedShops);
  };

  // Haversine formula
  const getDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    const R = 6371; // km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  };

  return (
    <ScrollView className="flex-1 bg-gray-100 pt-6 px-4">
      <Text className="text-lg font-bold mb-3">Nearby Shops</Text>

      {nearbyShops.map((shop) => (
        <TouchableOpacity
          key={shop.id}
          className="bg-white rounded-2xl mb-4 shadow-sm overflow-hidden"
        >
          <Image source={{ uri: shop.image }} className="w-full h-40" />

          <View className="p-4">
            <Text className="text-lg font-semibold">{shop.name}</Text>

            <View className="flex-row justify-between mt-2">
              <Text className="text-gray-500">⭐ {shop.rating}</Text>

              <Text className="text-gray-500">
                {(shop.distance ?? 0).toFixed(2)} km
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
