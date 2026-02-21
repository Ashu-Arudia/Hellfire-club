import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CustomerProfile() {
  return (
    <ScrollView className="flex-1 bg-gray-100">
      {/* Profile Header */}
      <View className="bg-white pt-14 pb-6 items-center shadow-sm">
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=12" }}
          className="w-24 h-24 rounded-full mb-3"
        />

        <Text className="text-xl font-bold">Aarav Sharma</Text>
        <Text className="text-gray-500 mt-1"> Noida, India</Text>

        <View className="flex-row mt-3">
          <View className="items-center mx-4">
            <Text className="text-lg font-bold">24</Text>
            <Text className="text-gray-500 text-sm">Orders</Text>
          </View>

          <View className="items-center mx-4">
            <Text className="text-lg font-bold">8</Text>
            <Text className="text-gray-500 text-sm">Saved</Text>
          </View>

          <View className="items-center mx-4">
            <Text className="text-lg font-bold">15</Text>
            <Text className="text-gray-500 text-sm">Reviews</Text>
          </View>
        </View>
      </View>

      {/* Options Section */}
      <View className="bg-white mt-3 shadow-sm">
        <TouchableOpacity className="flex-row items-center p-4 border-b border-gray-100">
          <Ionicons name="receipt-outline" size={22} color="gray" />
          <Text className="ml-4 text-gray-700 text-base">Order History</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center p-4 border-b border-gray-100">
          <Ionicons name="heart-outline" size={22} color="gray" />
          <Text className="ml-4 text-gray-700 text-base">Saved Shops</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center p-4 border-b border-gray-100">
          <Ionicons name="card-outline" size={22} color="gray" />
          <Text className="ml-4 text-gray-700 text-base">Payment Methods</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center p-4 border-b border-gray-100">
          <Ionicons name="location-outline" size={22} color="gray" />
          <Text className="ml-4 text-gray-700 text-base">Manage Addresses</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center p-4">
          <Ionicons name="settings-outline" size={22} color="gray" />
          <Text className="ml-4 text-gray-700 text-base">Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <View className="mt-6 px-4">
        <TouchableOpacity className="bg-red-500 py-3 rounded-xl items-center">
          <Text className="text-white font-semibold">Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
