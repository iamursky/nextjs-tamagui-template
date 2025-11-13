import { defaultConfig } from "@tamagui/config/v4";
import { createTamagui } from "tamagui";

export const config = createTamagui({
  ...defaultConfig,
  settings: {
    ...defaultConfig.settings,
    disableRootThemeClass: true,
  },
});

export type TypeOfConfig = typeof config;

declare module "tamagui" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TamaguiCustomConfig extends TypeOfConfig {}
}
