import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

interface ChatItem {
  id: string;
  shopName: string;
  lastMessage: string;
  time: string;
  unread: number;
  profile: string;
  online: boolean;
}

const chats: ChatItem[] = [
  {
    id: "1",
    shopName: "KaramVeer Singh",
    lastMessage: "Order kab tak deliver hoga??",
    time: "2:45 PM",
    unread: 2,
    profile: "https://i.pravatar.cc/150?img=8",
    online: true,
  },
  {
    id: "2",
    shopName: "Muskan Bhawani",
    lastMessage: "I want delivery in next 4 days!",
    time: "Yesterday",
    unread: 0,
    profile: "https://i.pravatar.cc/150?img=5",
    online: false,
  },
];

export default function ChatListScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-100 pt-5">
      <Text className="text-2xl font-bold px-4 mb-4">Messages</Text>

      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/vendor/chat/[shopId]",
                params: {
                  shopId: item.id,
                  shopName: item.shopName,
                },
              })
            }
            className="flex-row items-center bg-white px-4 py-4 border-b border-gray-100"
          >
            {/* Profile Image */}
            <View>
              <Image
                source={{ uri: item.profile }}
                className="w-14 h-14 rounded-full"
              />
              {item.online && (
                <View className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full border border-white" />
              )}
            </View>

            {/* Chat Info */}
            <View className="flex-1 ml-4">
              <View className="flex-row justify-between">
                <Text className="font-semibold text-base">{item.shopName}</Text>
                <Text className="text-gray-400 text-xs">{item.time}</Text>
              </View>

              <Text numberOfLines={1} className="text-gray-500 mt-1">
                {item.lastMessage}
              </Text>
            </View>

            {/* Unread Badge */}
            {item.unread > 0 && (
              <View className="bg-indigo-600 rounded-full px-2 py-1 ml-2">
                <Text className="text-white text-xs">{item.unread}</Text>
              </View>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
