import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack initialRouteName="signin">
      <Stack.Screen name="signin" options={{ headerShown: false }} />
    </Stack>
  );
}
