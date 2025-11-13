import type { Metadata } from "next";

import { PropsWithChildren } from "react";

import { NextTamaguiProvider } from "./next-tamagui-provider";

export const metadata: Metadata = {
  title: "Next.js Tamagui Template",
  description: "Next.js Tamagui Template",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextTamaguiProvider>{children}</NextTamaguiProvider>
      </body>
    </html>
  );
}
