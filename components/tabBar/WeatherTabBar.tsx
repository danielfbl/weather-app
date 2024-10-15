import { useForecastSheetPosition } from "@/context/ForecastSheetContext";
import useApplicationDimensions from "@/hooks/useApplicationDimensions";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle
} from "react-native-reanimated";
import ArcComponent from "./elements/ArcComponent";
import TabBarItems from "./elements/TabBarItems";

export default function WeatherTabBar() {
  const TabBarHeight = 88;
  const { width, height } = useApplicationDimensions();
  const animatedPosition = useForecastSheetPosition();

  const animatedViewStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            animatedPosition.value,
            [0, 1],
            [0, TabBarHeight + 20]
          ),
        },
      ],
    };
  });
  return (
    <Animated.View
      style={[
        { ...StyleSheet.absoluteFillObject, top: height - TabBarHeight },
        animatedViewStyles,
      ]}
    >
      <BlurView
        intensity={50}
        tint="dark"
        style={[
          {
            height: TabBarHeight,
            ...StyleSheet.absoluteFillObject,
          },
        ]}
      >
        <ArcComponent height={TabBarHeight} width={width} />
        <TabBarItems />
      </BlurView>
    </Animated.View>
  );
}
