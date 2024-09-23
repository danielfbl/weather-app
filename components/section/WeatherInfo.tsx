import { Weather } from "@/models/Weather";
import { DEGREE_SYMBOL } from "@/utils/constants";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface WeatherInfoProps {
  weather: Weather;
}

export default function WeatherInfo({ weather }: WeatherInfoProps) {
  const { city, temperature, condition, high, low } = weather;
  const { top } = useSafeAreaInsets();
  const weatherInfoTopMargin = top + 51;
  return (
    <View
      style={{
        marginTop: weatherInfoTopMargin,
        alignItems: "center",
      }}
    >
      <Text style={styles.cityText}>{city}</Text>
      <Text style={styles.temperatureText}>
        {temperature}
        {DEGREE_SYMBOL}
      </Text>
      <Text style={styles.conditionText}>{condition}</Text>
      <Text style={styles.minMaxText}>
        H:{high}
        {DEGREE_SYMBOL} L:{low}
        {DEGREE_SYMBOL}
      </Text>
    </View>
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
});
