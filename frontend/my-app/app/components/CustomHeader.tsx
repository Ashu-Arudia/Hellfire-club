import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

type Props = {
  location: string;
};

export default function CustomHeader({ location }: Props) {
  const router = useRouter();
  return (
    <SafeAreaView edges={["top"]} className="bg-white">
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
        {/* Left - Location */}
        <View className="flex-row items-center">
          <Ionicons name="location-outline" size={20} color="black" />
          <Text className="ml-2 text-base font-medium text-black">
            {location}
          </Text>
        </View>

        {/* Right - Notification */}
        <TouchableOpacity onPress={() => router.push("./notifications")} className="relative">
          <Ionicons name="notifications-outline" size={30} color="black" />

          {/* Notification Badge (optional) */}
          <View className="absolute -top-1 -right-1 bg-red-500 w-6 h-6 rounded-full items-center justify-center">
            <Text className="text-[10px] text-white font-bold">3</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
