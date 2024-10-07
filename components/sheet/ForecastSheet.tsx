import { hourly } from "@/data/ForecastData";
import useApplicationDimensions from "@/hooks/useApplicationDimensions";
import BottomSheet from "@gorhom/bottom-sheet";
import React from "react";
import ForecastScroll from "../forecast/ForecastScroll";
import ForecastSheetBackground from "./ForecastSheetBackground";
import ForecastControl from "./elements/ForecastControl";
import Separator from "./elements/Separator";

export default function ForecastSheet() {
  const { width, height } = useApplicationDimensions();
  const snapPoints = ["38.5%", "83%"];
  const firstSnapPoint = height * (parseFloat(snapPoints[0]) / 100);
  const cornerRadius = 44;
  const capsuleRadius = 30;
  const capsuleHeight = height * 0.17;
  const capsuleWidth = width * 0.15;

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
        <ForecastControl />
        <Separator width={width} height={3} />
        <ForecastScroll
          capsuleWidth={capsuleWidth}
          capsuleHeight={capsuleHeight}
          capsuleRadius={capsuleRadius}
          forecasts={hourly}
        />
      </>
    </BottomSheet>
  );
}
