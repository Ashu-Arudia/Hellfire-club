import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const featuredProducts = Array.from({ length: 5 }).map((_, i) => ({
  id: i.toString(),
  image: "https://picsum.photos/300",
}));

const allProducts = Array.from({ length: 9 }).map((_, i) => ({
  id: i.toString(),
  image: "https://picsum.photos/400",
}));

export default function VendorProfile() {
  return (
    <ScrollView className="flex-1 bg-white">
      {/* ---------- Hero Banner ---------- */}
      <View className="relative">
        <Image
          source={require("../../assets/images/img.jpeg")}
          className="w-full h-48"
        />

        {/* Logo overlapping */}
        <View className="absolute -bottom-10 left-5">
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            className="w-24 h-24 rounded-2xl border-4 border-white"
          />
        </View>
      </View>

      <View className="px-5 mt-12">
        {/* Shop Name + Verified */}
        <View className="flex-row items-center">
          <Text className="text-xl font-bold">Royal Furniture Studio</Text>
          <Ionicons
            name="checkmark-circle"
            size={18}
            color="#22c55e"
            style={{ marginLeft: 6 }}
          />
        </View>

        {/* Location + Rating */}
        <View className="flex-row items-center mt-1">
          <Ionicons name="location-outline" size={14} color="gray" />
          <Text className="text-gray-500 text-sm ml-1">Delhi, India</Text>

          <Ionicons
            name="star"
            size={14}
            color="#facc15"
            style={{ marginLeft: 10 }}
          />
          <Text className="text-gray-500 text-sm ml-1">4.8 (1.2k reviews)</Text>
        </View>

        {/* About */}
        <Text className="text-gray-600 mt-3 leading-5">
          We create premium handcrafted wooden furniture designed for modern
          homes. Trusted by 10,000+ happy customers.
        </Text>

        {/* Action Buttons */}
        <View className="flex-row mt-4 space-x-3">
          <TouchableOpacity className="flex-1 bg-black py-3 rounded-xl items-center">
            <Text className="text-white font-semibold">Manage Shop</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-1 border border-gray-300 py-3 rounded-xl items-center">
            <Text className="font-semibold">Share</Text>
          </TouchableOpacity>
        </View>

        {/* Highlight Stats Cards */}
        <View className="flex-row justify-between mt-6">
          <View className="bg-gray-100 flex-1 mr-2 p-4 rounded-2xl items-center">
            <Text className="text-lg font-bold">5 Years</Text>
            <Text className="text-gray-500 text-xs">Experience</Text>
          </View>

          <View className="bg-gray-100 flex-1 mx-2 p-4 rounded-2xl items-center">
            <Text className="text-lg font-bold">10k+</Text>
            <Text className="text-gray-500 text-xs">Customers</Text>
          </View>

          <View className="bg-gray-100 flex-1 ml-2 p-4 rounded-2xl items-center">
            <Text className="text-lg font-bold">120</Text>
            <Text className="text-gray-500 text-xs">Products</Text>
          </View>
        </View>

        {/* ---------- Featured Products ---------- */}
        <Text className="mt-8 mb-3 text-lg font-semibold">
          Featured Collection
        </Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={featuredProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item.image }}
              className="w-36 h-36 rounded-2xl mr-4"
            />
          )}
        />

        {/* ---------- All Products Grid ---------- */}
        <Text className="mt-8 mb-3 text-lg font-semibold">All Products</Text>
      </View>

      <FlatList
        data={allProducts}
        numColumns={2}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} className="w-1/2 h-40" />
        )}
      />

      <View className="h-10" />
    </ScrollView>
  );
}
