import useApplicationDimensions from "@/hooks/useApplicationDimensions";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import ArcComponent from "./elements/ArcComponent";
import TabBarItems from "./elements/TabBarItems";

export default function WeatherTabBar() {
  const TabBarHeight = 88;
  const { width, height } = useApplicationDimensions();
  return (
    <BlurView
      intensity={50}
      tint="dark"
      style={{
        height: TabBarHeight,
        ...StyleSheet.absoluteFillObject,
        top: height - TabBarHeight,
      }}
    >
      <ArcComponent height={TabBarHeight} width={width} />
      <TabBarItems />
    </BlurView>
  );
}
