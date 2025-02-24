import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack initialRouteName="homepage">
      <Stack.Screen name="homepage" options={{ headerShown: true }} />
    </Stack>
  );
}
