import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const URL = "https://7223-128-185-168-217.ngrok-free.app/";

type Category = {
  id: number;
  name: string;
  icon_url: string | null;
  vendors: any[];
};

type Shop = {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
};

const demoShops: Shop[] = [
  {
    id: "1",
    name: "Sharma Chaat",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: "2",
    name: "Modern Salon",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f",
    rating: 4.2,
    reviews: 80,
  },
  {
    id: "3",
    name: "Tech Electronics",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
    rating: 4.8,
    reviews: 200,
  },
  {
    id: "4",
    name: "Flower House",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    rating: 4.6,
    reviews: 95,
  },
];

const demoReviews = [
  {
    id: "1",
    user: "Rahul",
    comment: "Amazing service and fast delivery!",
  },
  {
    id: "2",
    user: "Ananya",
    comment: "Great quality products. Highly recommend!",
  },
];
export default function HomeScreen() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${URL}catalog`);
      setCategories(response.data);
    } catch (error) {
      console.log("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  const iconMap: Record<string, any> = {
    Food: "fast-food-outline",
    Grocery: "basket-outline",
    Salon: "cut-outline",
    Pharmacy: "medkit-outline",
    Repair: "build-outline",
    Clothing: "shirt-outline",
    Electronics: "hardware-chip-outline",
    Stationery: "book-outline",
    Flowers: "flower-outline",
    Snacks: "pizza-outline",
  };

  return (
    <ScrollView className="flex-1 bg-gray-100 pt-6 px-4">
      {/* Search Bar */}
      <View className="flex-row items-center bg-white rounded-xl px-4 py-3 shadow-sm mb-6">
        <Ionicons name="search-outline" size={20} color="gray" />
        <TextInput
          placeholder="Search for shops, services..."
          className="ml-3 flex-1 text-base"
        />
      </View>

      {/* Categories */}
      <Text className="text-lg font-bold mb-4">Explore Categories</Text>

      {loading && <ActivityIndicator size="small" color="#6366f1" />}

      <FlatList
        data={categories}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex-1 m-2 bg-white py-4 rounded-xl items-center shadow-sm">
            <Ionicons
              name={iconMap[item.name] || "grid-outline"}
              size={26}
              color="#6366f1"
            />
            <Text className="mt-2 text-gray-700 text-sm text-center">
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Shop Grid Section */}
      <Text className="text-lg font-bold mt-6 mb-4">Popular Shops</Text>

      <FlatList
        data={demoShops}
        numColumns={2}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex-1 m-2 bg-white rounded-2xl shadow-sm overflow-hidden">
            <Image
              source={{ uri: item.image }}
              className="w-full h-32"
              resizeMode="cover"
            />

            <View className="p-3">
              <Text className="font-semibold text-base">{item.name}</Text>

              <View className="flex-row items-center mt-1">
                <Ionicons name="star" size={14} color="#facc15" />
                <Text className="ml-1 text-gray-600 text-sm">
                  {item.rating} ({item.reviews})
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Reviews Section */}
      <Text className="text-lg font-bold mt-6 mb-4">Customer Reviews</Text>

      {demoReviews.map((review) => (
        <View
          key={review.id}
          className="bg-white p-4 rounded-xl mb-3 shadow-sm"
        >
          <Text className="font-semibold">{review.user}</Text>
          <Text className="text-gray-600 mt-1">{review.comment}</Text>
        </View>
      ))}
      <View className="h-10" />
    </ScrollView>
  );
}
