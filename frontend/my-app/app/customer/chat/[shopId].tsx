import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

interface Message {
  id: string;
  shopId: string;
  text: string;
  sender: "user" | "vendor";
}

export default function ShopChatScreen() {
  const { shopId, shopName } = useLocalSearchParams<{
    shopId: string;
    shopName: string;
  }>();

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "m1",
      shopId: "1",
      text: "Hi Welcome to Sharma Chaat. Aap kya order karenge?",
      sender: "vendor",
    },
    {
      id: "m2",
      shopId: "2",
      text: "Hi Welcome to Modern Salon. Appointment ke liye message kare.",
      sender: "vendor",
    },
  ]);

  const [input, setInput] = useState("");

  //  Filter messages for only this shop
  const filteredMessages = useMemo(() => {
    return messages.filter((msg) => msg.shopId === shopId);
  }, [messages, shopId]);

  const sendMessage = () => {
    if (!input.trim() || !shopId) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      shopId: shopId,
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    // Simulated vendor reply
    setTimeout(() => {
      const reply: Message = {
        id: Date.now().toString(),
        shopId: shopId,
        text: " Order received! Preparing your items.",
        sender: "vendor",
      };

      setMessages((prev) => [...prev, reply]);
    }, 1000);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-gray-100"
    >
      <View className="flex-1">
        {/* Header */}
        <View className="px-4 py-4 bg-white border-b border-gray-200">
          <Text className="text-lg font-bold">{shopName}</Text>
          <Text className="text-sm text-green-600">🟢 Online</Text>
        </View>

        {/* Messages */}
        <FlatList
          data={filteredMessages}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }) => (
            <View
              className={`mb-3 max-w-[75%] p-3 rounded-2xl ${
                item.sender === "user"
                  ? "bg-indigo-600 self-end"
                  : "bg-white self-start"
              }`}
            >
              <Text
                className={`${
                  item.sender === "user" ? "text-white" : "text-gray-800"
                }`}
              >
                {item.text}
              </Text>
            </View>
          )}
        />

        {/* Input Area */}
        <View className="flex-row items-center bg-white px-3 py-3 border-t border-gray-200">
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Type your message..."
            className="flex-1 text-base"
          />
          <TouchableOpacity onPress={sendMessage}>
            <Ionicons name="send" size={24} color="#6366f1" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
