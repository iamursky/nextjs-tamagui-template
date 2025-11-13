"use client";

import "@tamagui/core/reset.css";
import "@tamagui/font-inter/css/400.css";
import "@tamagui/font-inter/css/700.css";
import "@tamagui/polyfill-dev";

import type { PropsWithChildren } from "react";

import { NextThemeProvider, useRootTheme } from "@tamagui/next-theme";
import { useServerInsertedHTML } from "next/navigation";
import { StyleSheet } from "react-native";
import { TamaguiProvider } from "tamagui";

import { config } from "../tamagui.config";

export const NextTamaguiProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useRootTheme();

  useServerInsertedHTML(() => {
    // @ts-expect-error getSheet exists
    const rnwStyle = StyleSheet.getSheet();

    return (
      <>
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/tamagui.css" />
        <style jsx global>{`
          html {
            font-family: "Inter";
          }
        `}</style>
        <style
          id={rnwStyle.id}
          dangerouslySetInnerHTML={{
            __html: rnwStyle.textContent,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: config.getCSS({
              exclude:
                process.env.NODE_ENV === "production" ? "design-system" : null,
            }),
          }}
        />
      </>
    );
  });

  return (
    // @ts-expect-error setTheme
    <NextThemeProvider skipNextHead onChangeTheme={setTheme}>
      <TamaguiProvider config={config} defaultTheme={theme}>
        {children}
      </TamaguiProvider>
    </NextThemeProvider>
  );
};
