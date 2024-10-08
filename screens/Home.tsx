import HomeBackground from '@/components/HomeBackground';
import WeatherInfo from '@/components/section/WeatherInfo';
import ForecastSheet from '@/components/sheet/ForecastSheet';
import WeatherTabBar from '@/components/tabBar/WeatherTabBar';
import { currentWeather } from '@/data/CurrentWeather';
import React from 'react';

export default function Home() {
  return (
    <>
      <HomeBackground />
      <WeatherInfo weather={currentWeather} />
      <ForecastSheet />
      <WeatherTabBar />
    </>
  );
}
