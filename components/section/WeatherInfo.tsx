import { useForecastSheetPosition } from "@/context/ForecastSheetContext";
import { Weather } from "@/models/Weather";
import { DEGREE_SYMBOL } from "@/utils/constants";
import { StyleSheet } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface WeatherInfoProps {
  weather: Weather;
}

export default function WeatherInfo({ weather }: WeatherInfoProps) {
  const { city, temperature, condition, high, low } = weather;
  const { top } = useSafeAreaInsets();
  const topMargin = 51;
  const weatherInfoTopMargin = top + topMargin;
  const animatedPosition = useForecastSheetPosition();

  const animatedViewStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            animatedPosition.value,
            [0, 1],
            [0, -topMargin],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });
  const animatedTempTxtStyles = useAnimatedStyle(() => {
    const fontFamily = animatedPosition.value > 0.5 ? "SF-Semibold" : "SF-Thin";
    return {
      fontSize: interpolate(animatedPosition.value, [0, 1], [96, 20]),
      lineHeight: interpolate(animatedPosition.value, [0, 1], [96, 20]),
      color: interpolateColor(
        animatedPosition.value,
        [0, 1],
        ["white", "rgba(235,235, 245, 0.6)"]
      ),
      fontFamily,
      opacity: interpolate(animatedPosition.value, [0, 0.5, 1], [1, 0, 1]), // doing this for the fontFamily animation
    };
  });

  const animatedMinMaxStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(animatedPosition.value, [0, 0.5], [1, 0]),
    };
  });

  const animatedSeparatorStyle = useAnimatedStyle(() => {
    const display = animatedPosition.value > 0.5 ? "flex" : "none";
    return {
      opacity: interpolate(animatedPosition.value, [0, 0.5, 1], [0, 0, 1]),
      display,
    };
  });

  const animatedTempConditionStyle = useAnimatedStyle(() => {
    const flexDirection = animatedPosition.value > 0.5 ? "row" : "column";
    return {
      flexDirection,
    };
  });

  const animatedConditionTxtStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            animatedPosition.value,
            [0, 0.5, 1],
            [0, -20, 0],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        { alignItems: "center", marginTop: weatherInfoTopMargin },
        animatedViewStyles,
      ]}
    >
      <Animated.Text style={styles.cityText}>{city}</Animated.Text>
      <Animated.View
        style={[{ alignItems: "center" }, animatedTempConditionStyle]}
      >
        <Animated.View style={[{ flexDirection: "row" }]}>
          <Animated.Text
            style={[styles.temperatureText, animatedTempTxtStyles]}
          >
            {temperature}
            {DEGREE_SYMBOL}
          </Animated.Text>
          <Animated.Text style={[styles.separatorText, animatedSeparatorStyle]}>
            |
          </Animated.Text>
        </Animated.View>

        <Animated.Text style={[styles.conditionText, animatedConditionTxtStyle]}>
          {condition}
        </Animated.Text>
      </Animated.View>
      <Animated.Text style={[styles.minMaxText, animatedMinMaxStyle]}>
        H:{high}
        {DEGREE_SYMBOL} L:{low}
        {DEGREE_SYMBOL}
      </Animated.Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  cityText: {
    fontFamily: "SF-Regular",
    color: "white",
    fontSize: 34,
    lineHeight: 41,
  },
  temperatureText: {
    fontFamily: "SF-Thin",
    color: "white",
    fontSize: 96,
    lineHeight: 96,
  },
  conditionText: {
    fontFamily: "SF-SemiBold",
    color: "rgba(235,235, 245, 0.6)",
    fontSize: 20,
    lineHeight: 20,
  },
  minMaxText: {
    fontFamily: "SF-SemiBold",
    color: "white",
    fontSize: 20,
    lineHeight: 20,
  },
  separatorText: {
    fontFamily: "SF-SemiBold",
    color: "rgba(235,235, 245, 0.6)",
    fontSize: 20,
    lineHeight: 20,
    marginHorizontal: 2,
    display: "none",
  },
});
