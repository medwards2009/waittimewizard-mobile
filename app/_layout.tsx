import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="MagicKingdom" options={{ headerShown: false }} />
    </Stack>
  );
}
