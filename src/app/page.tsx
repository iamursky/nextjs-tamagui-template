"use client";

import { Button, Text, YStack } from "tamagui";

export default function HomePage() {
  return (
    <YStack flex={1} justify="center" items="center" gap="$4">
      <Text>Edit app/page.tsx to edit this screen.</Text>
      <Button>Press Me</Button>
    </YStack>
  );
}
