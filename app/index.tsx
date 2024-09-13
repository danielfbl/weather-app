import { StatusBar } from "expo-status-bar";

import HomeBackground from "@/components/HomeBackground";
import WeatherTabBar from "@/components/tabBar/WeatherTabBar";

export default function Index() {
  return (
    <>
      <HomeBackground />
      <WeatherTabBar />
      <StatusBar style="light" />
    </>
  );
}
