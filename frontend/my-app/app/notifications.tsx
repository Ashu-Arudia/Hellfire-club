import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";

type NotificationItem = {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "order" | "message" | "promo";
};

const dummyNotifications: NotificationItem[] = [
  {
    id: "1",
    title: "New Order Received",
    description: "You received an order for Wooden Chair",
    time: "2 min ago",
    type: "order",
  },
  {
    id: "2",
    title: "New Message",
    description: "Customer sent you a message",
    time: "10 min ago",
    type: "message",
  },
  {
    id: "3",
    title: "Special Promotion",
    description: "Boost your shop visibility today!",
    time: "1 hr ago",
    type: "promo",
  },
];

export default function NotificationsScreen() {
  const [city, setCity] = useState<string>("Detecting location...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setCity("Location permission denied");
        return;
      }

      const userLocation = await Location.getCurrentPositionAsync({});

      const reverseGeocode = await Location.reverseGeocodeAsync({
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
      });

      if (reverseGeocode.length > 0) {
        const place = reverseGeocode[0];
        setCity(place.city || place.region || "Unknown Location");
      }
    } catch (error) {
      console.log("Location error:", error);
      setCity("Unable to fetch location");
    } finally {
      setLoading(false);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "order":
        return "bag-handle-outline";
      case "message":
        return "chatbubble-outline";
      case "promo":
        return "pricetag-outline";
      default:
        return "notifications-outline";
    }
  };

  return (
    <View className="flex-1 bg-white px-4 pt-4">
      {/*  Location Header */}
      <TouchableOpacity
        onPress={getLocation}
        className="flex-row items-center mb-4"
      >
        <Ionicons name="location-outline" size={18} color="#6366f1" />
        <Text className="ml-2 text-sm text-gray-700">
          {loading ? "Detecting..." : city}
        </Text>
        <Ionicons
          name="refresh"
          size={16}
          color="gray"
          style={{ marginLeft: 6 }}
        />
      </TouchableOpacity>

      <Text className="text-2xl font-bold mb-6">Notifications</Text>

      <FlatList
        data={dummyNotifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex-row items-start mb-5">
            <View className="w-12 h-12 rounded-full bg-gray-100 items-center justify-center mr-4">
              <Ionicons
                name={getIcon(item.type) as any}
                size={22}
                color="black"
              />
            </View>

            <View className="flex-1">
              <Text className="font-semibold text-base">{item.title}</Text>
              <Text className="text-gray-600 text-sm mt-1">
                {item.description}
              </Text>
              <Text className="text-gray-400 text-xs mt-2">{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
