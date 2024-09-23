import useApplicationDimensions from "@/hooks/useApplicationDimensions";
import BottomSheet from "@gorhom/bottom-sheet";
import ForecastSheetBackground from "./ForecastSheetBackground";

export default function ForecastSheet() {
  const { width, height } = useApplicationDimensions();
  const snapPoints = ["38.5%", "83%"];
  const firstSnapPoint = height * (parseFloat(snapPoints[0]) / 100);
  const cornerRadius = 44;

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
    ></BottomSheet>
  );
}
