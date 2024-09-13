import useApplicationDimensions from "@/hooks/useApplicationDimensions";
import { StyleSheet, View } from "react-native";
import ArcComponent from "./elements/ArcComponent";
import TabBarItems from "./elements/TabBarItems";

export default function WeatherTabBar() {
  const TabBarHeight = 88;
  const { width, height } = useApplicationDimensions();
  return (
    <View
      style={{
        height: TabBarHeight,
        ...StyleSheet.absoluteFillObject,
        top: height - TabBarHeight,
      }}
    >
      <ArcComponent height={TabBarHeight} width={width} />
      <TabBarItems/>
    </View>
  );
}
