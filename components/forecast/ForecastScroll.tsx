import { Forecast } from "@/models/Weather";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ForecastCapsule from "./ForecastCapsule";

interface ForecastScrollProps {
  forecasts: Forecast[];
  capsuleWidth: number;
  capsuleHeight: number;
  capsuleRadius: number;
}

export default function ForecastScroll({
  forecasts,
  capsuleWidth,
  capsuleHeight,
  capsuleRadius,
}: ForecastScrollProps) {
  return (
    <ScrollView
      horizontal
      style={{ paddingLeft: 20, paddingTop: 20, paddingBottom: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flex: 1, flexDirection: "row", gap: 12 }}>
        {forecasts.map((forecast, index) => (
          <ForecastCapsule
            forecast={forecast}
            width={capsuleWidth}
            height={capsuleHeight}
            radius={capsuleRadius}
            key={index * Math.random()}
          />
        ))}
      </View>
    </ScrollView>
  );
}
