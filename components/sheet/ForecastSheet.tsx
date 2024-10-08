import { hourly, weekly } from "@/data/ForecastData";
import useApplicationDimensions from "@/hooks/useApplicationDimensions";
import { ForecastType } from "@/models/Weather";
import BottomSheet from "@gorhom/bottom-sheet";
import React, { useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ForecastScroll from "../forecast/ForecastScroll";
import AirQualityWidget from "../forecast/widgets/AirQualityWidget";
import FeelsLikeWidget from "../forecast/widgets/FeelsLikeWidget";
import HumidityWidget from "../forecast/widgets/HumidityWidget";
import PressureWidget from "../forecast/widgets/PressureWidget";
import RainFallWidget from "../forecast/widgets/RainFallWidget";
import SunriseWidget from "../forecast/widgets/SunriseWidget";
import UvIndexWidget from "../forecast/widgets/UvIndexWidget";
import VisibilityWidget from "../forecast/widgets/VisibilityWidget";
import WindWidget from "../forecast/widgets/WindWidget";
import ForecastControl from "./elements/ForecastControl";
import Separator from "./elements/Separator";
import ForecastSheetBackground from "./ForecastSheetBackground";

export default function ForecastSheet() {
  const [selectedForecastType, setSelectedForecastType] =
    useState<ForecastType>(ForecastType.Hourly);
  const { width, height } = useApplicationDimensions();
  const snapPoints = ["38.5%", "83%"];
  const firstSnapPoint = height * (parseFloat(snapPoints[0]) / 100);
  const cornerRadius = 44;
  const capsuleRadius = 30;
  const capsuleHeight = height * 0.17;
  const capsuleWidth = width * 0.15;
  const smallWidgetSize = width / 2 - 20;

  return (
    <BottomSheet
      snapPoints={snapPoints}
      animateOnMount={false}
      handleIndicatorStyle={{
        width: 48,
        height: 5,
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
      backgroundComponent={() => (
        <ForecastSheetBackground
          width={width}
          height={firstSnapPoint}
          cornerRadius={cornerRadius}
        />
      )}
    >
      <>
        <ForecastControl onPress={(type) => setSelectedForecastType(type)} />
        <Separator width={width} height={3} />
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 10 }}
          showsVerticalScrollIndicator={false}
        >
          <ForecastScroll
            capsuleWidth={capsuleWidth}
            capsuleHeight={capsuleHeight}
            capsuleRadius={capsuleRadius}
            forecasts={
              selectedForecastType === ForecastType.Weekly ? weekly : hourly
            }
          />
          <View
            style={{ flex: 1, paddingTop: 30, paddingBottom: smallWidgetSize }}
          >
            <AirQualityWidget width={width - 30} height={150} />

            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                padding: 15,
                gap: 10,
              }}
            >
              <UvIndexWidget width={smallWidgetSize} height={smallWidgetSize} />
              <WindWidget width={smallWidgetSize} height={smallWidgetSize} />
              <SunriseWidget width={smallWidgetSize} height={smallWidgetSize} />
              <RainFallWidget
                width={smallWidgetSize}
                height={smallWidgetSize}
              />
              <FeelsLikeWidget
                width={smallWidgetSize}
                height={smallWidgetSize}
              />
              <HumidityWidget
                width={smallWidgetSize}
                height={smallWidgetSize}
              />
              <VisibilityWidget
                width={smallWidgetSize}
                height={smallWidgetSize}
              />
              <PressureWidget
                width={smallWidgetSize}
                height={smallWidgetSize}
              />
            </View>
          </View>
        </ScrollView>
      </>
    </BottomSheet>
  );
}
