import useApplicationDimensions from "@/hooks/useApplicationDimensions";
import { AnimatedProp, Canvas, Color, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import { StyleSheet } from "react-native";

interface BackgroundGradientProps {
    colors?: AnimatedProp<Color[]>
}

export default function BackgroundGradient({colors = ["#2e335a", "#1c1b33"]}: BackgroundGradientProps) {
  const { width, height } = useApplicationDimensions();


  return (
    <Canvas style={{ ...StyleSheet.absoluteFillObject }}>
      <Rect x={0} y={0} width={width} height={height}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(width, height)}
          colors={colors}
        />
      </Rect>
    </Canvas>
  );
}
