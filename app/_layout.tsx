import { Stack } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function RootLayout() {
  const { top } = useSafeAreaInsets();
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="weatherList"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
