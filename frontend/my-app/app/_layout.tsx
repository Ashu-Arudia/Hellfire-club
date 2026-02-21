import "react-native-reanimated";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View } from "react-native";
import CustomHeader from "./components/CustomHeader";
import "../global.css";
import "@/global.css";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="flex-1 bg-white">
        <CustomHeader location="Delhi, India" />

        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </View>
    </GestureHandlerRootView>
  );
}
