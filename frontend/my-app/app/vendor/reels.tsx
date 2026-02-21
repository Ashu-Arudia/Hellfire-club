import React, { useState, useRef } from "react";
import {
  View,
  FlatList,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { VideoView, useVideoPlayer } from "expo-video";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

const { height } = Dimensions.get("window");

const reelsData = [
  {
    id: "1",
    video:
      "https://player.vimeo.com/external/434045526.sd.mp4?s=7e0fdfb6e1a9c45d8c3b77c09d1d44a74a8b5c6b&profile_id=164&oauth2_token_id=57447761",
    username: "SharmaChaat",
    caption: "Best pani puri in town 😋",
    profile: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: "2",
    video:
      "https://player.vimeo.com/external/403008981.sd.mp4?s=9bcbcc6a58dff6c77c8bb9a7c6c9f1b57f30f8e1&profile_id=164&oauth2_token_id=57447761",
    username: "RajuMomos",
    caption: "Hot & spicy momos 🔥",
    profile: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: "3",
    video:
      "https://player.vimeo.com/external/371749263.sd.mp4?s=0a6b16c0df9d5c1edc8d68a7b9c6b09f0dcb1a6e&profile_id=164&oauth2_token_id=57447761",
    username: "DelhiStreetFood",
    caption: "Street style noodles 🍜",
    profile: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: "4",
    video:
      "https://player.vimeo.com/external/466246374.sd.mp4?s=9a8a2f2b7b0b8b7e3a1c2c3b4d5e6f7a8b9c0d1e&profile_id=164&oauth2_token_id=57447761",
    username: "TandooriKing",
    caption: "Smoky tandoori vibes 🍗",
    profile: "https://i.pravatar.cc/150?img=6",
  },
];

function ReelItem({ item, isActive, bottomOffset }: any) {
  const player = useVideoPlayer(item.video);

  React.useEffect(() => {
    player.loop = true;
    player.muted = true;
    if (isActive) {
      player.play();
    } else {
      player.pause();
    }
  }, [isActive]);

  return (
    <View style={{ height, backgroundColor: "black", paddingBottom: bottomOffset }}>
      <VideoView
        player={player}
        style={{ flex: 1 }}
        contentFit="cover"
        nativeControls={false}
      />

      {/* Overlay UI */}
      <View
        style={{
          position: "absolute",
          bottom: 40 + bottomOffset,
          left: 15,
          right: 15,
        }}
      >
        {/* Profile + Caption */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{ uri: item.profile }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              marginRight: 10,
            }}
          />
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {item.username}
          </Text>
        </View>

        <Text style={{ color: "white", marginTop: 8 }}>{item.caption}</Text>
      </View>

      {/* Right Side Buttons */}
      <View
        style={{
          position: "absolute",
          right: 15,
          bottom: 120 + bottomOffset,
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={{ marginBottom: 25 }}>
          <Ionicons name="heart-outline" size={30} color="white" />
          <Text style={{ color: "white", fontSize: 12 }}>1.2k</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginBottom: 25 }}>
          <Ionicons name="chatbubble-outline" size={28} color="white" />
          <Text style={{ color: "white", fontSize: 12 }}>320</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginBottom: 25 }}>
          <Ionicons name="paper-plane-outline" size={28} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={26} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function ReelsScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const insets = useSafeAreaInsets();

  const TAB_BAR_HEIGHT = 56;
  const bottomOffset = TAB_BAR_HEIGHT + insets.bottom;

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }} edges={['top', 'left', 'right']}>
      <FlatList
        data={reelsData}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 80,
        }}
        renderItem={({ item, index }) => (
          <ReelItem item={item} isActive={index === activeIndex} bottomOffset={bottomOffset} />
        )}
        contentContainerStyle={{ paddingBottom: bottomOffset }}
      />
    </SafeAreaView>
  );
}
