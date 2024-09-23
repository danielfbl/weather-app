import HomeBackground from "@/components/HomeBackground";
import WeatherInfo from "@/components/section/WeatherInfo";
import ForecastSheet from "@/components/sheet/ForecastSheet";
import WeatherTabBar from "@/components/tabBar/WeatherTabBar";
import { currentWeather } from "@/data/CurrentWeather";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [fontsLoaded] = useFonts({
    "SF-Thin": require("../assets/fonts/SF-Pro-Display-Thin.otf"),
    "SF-SemiBold": require("../assets/fonts/SF-Pro-Display-Semibold.otf"),
    "SF-Regular": require("../assets/fonts/SF-Pro-Display-Regular.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <HomeBackground />
        <WeatherInfo weather={currentWeather} />
        <ForecastSheet />
        <WeatherTabBar />
        <StatusBar style="light" />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
