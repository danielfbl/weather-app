import BackgroundGradient from "@/components/BackgroundGradient";
import { ForecastSheetProvider } from "@/context/ForecastSheetContext";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function WeatherList() {
  const { top } = useSafeAreaInsets();
  return (
    <ForecastSheetProvider>
      <BackgroundGradient />

      <View style={{ paddingTop: top + 2, flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 16,
            paddingBottom: 8,
            paddingLeft: 8,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Link href={"/"}>
              <Ionicons
                name={"chevron-back-sharp"}
                size={34}
                color={"rgba(235,235,245,0.6)"}
              />
            </Link>
            <Text style={styles.titleText}>Weather</Text>
          </View>
          <Ionicons
            name={"ellipsis-horizontal-circle"}
            size={34}
            color="white"
          />
        </View>
      </View>
    </ForecastSheetProvider>
  );
}

const styles = StyleSheet.create({
  titleText: {
    color: "white",
    fontFamily: "SF-Semibold",
    fontSize: 28,
    lineHeight: 34,
  },
});
