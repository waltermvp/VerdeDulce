// TODO: write documentation about fonts and typography along with guides on how to add custom fonts in own
// markdown file and add links from here

import { Platform } from "react-native"
import {
  SpaceGrotesk_300Light as spaceGroteskLight,
  SpaceGrotesk_400Regular as spaceGroteskRegular,
  SpaceGrotesk_500Medium as spaceGroteskMedium,
  SpaceGrotesk_600SemiBold as spaceGroteskSemiBold,
  SpaceGrotesk_700Bold as spaceGroteskBold,
} from "@expo-google-fonts/space-grotesk"

import {
  OpenSans_300Light as openSansLight,
  OpenSans_400Regular as openSansRegular,
  OpenSans_500Medium as openSansMedium,
  OpenSans_600SemiBold as openSansSemiBold,
  OpenSans_700Bold as openSansBold,
} from "@expo-google-fonts/open-sans"

export * from "@expo-google-fonts/poppins"

import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins"

export const customFontsToLoad = {
  spaceGroteskLight,
  spaceGroteskRegular,
  spaceGroteskMedium,
  spaceGroteskSemiBold,
  spaceGroteskBold,
  openSansLight,
  openSansRegular,
  openSansMedium,
  openSansSemiBold,
  openSansBold,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,

  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light_Italic,
  Poppins_300Light,
}

const fonts = {
  poppins: {
    // Cross-platform Google font.
    Poppins_100Thin: "Poppins_100Thin",
    Poppins_100Thin_Italic: "Poppins_100Thin_Italic",
    Poppins_200ExtraLight: "Poppins_200ExtraLight",
    Poppins_200ExtraLight_Italic: "Poppins_200ExtraLight_Italic",
    Poppins_300Light: "Poppins_300Light",
    Poppins_300Light_Italic: "Poppins_300Light_Italic",
    Poppins_400Regular: "Poppins_400Regular",

    Poppins_400Regular_Italic: "Poppins_400Regular_Italic",
    Poppins_500Medium: "Poppins_500Medium",
    Poppins_500Medium_Italic: "Poppins_500Medium_Italic",
    Poppins_600SemiBold: "Poppins_600SemiBold",
    Poppins_600SemiBold_Italic: "Poppins_600SemiBold_Italic",
    Poppins_700Bold: "Poppins_700Bold",
    Poppins_700Bold_Italic: "Poppins_700Bold_Italic",
    Poppins_800ExtraBold: "Poppins_800ExtraBold",
    Poppins_800ExtraBold_Italic: "Poppins_800ExtraBold_Italic",
    Poppins_900Black: "Poppins_900Black",
    Poppins_900Black_Italic: "Poppins_900Black_Italic",
    normal: "Poppins_400Regular",
    semiBold: "Poppins_600SemiBold",
    thin: "Poppins_100Thin",
    thinItalic: "Poppins_100Thin_Italic",
    extraLight: "Poppins_200ExtraLight",
    extraLightItalic: "Poppins_200ExtraLight_Italic",
    light: "Poppins_300Light",
    lightItalic: "Poppins_300Light_Italic",

    medium: "Poppins_500Medium",
    mediumItalic: "Poppins_500Medium_Italic",
    bold: "Poppins_700Bold",
    boldItalic: "Poppins_700Bold_Italic",
    extraBold: "Poppins_800ExtraBold",
    extraBoldItalic: "Poppins_800ExtraBold_Italic",
    black: "Poppins_900Black",
    blackItalic: "Poppins_900Black_Italic",
  },
  openSans: {
    // Cross-platform Google font.
    light: "openSansLight",
    normal: "openSansRegular",
    medium: "openSansMedium",
    semiBold: "openSansSemiBold",
    bold: "openSansBold",
  },
  spaceGrotesk: {
    // Cross-platform Google font.
    light: "spaceGroteskLight",
    normal: "spaceGroteskRegular",
    medium: "spaceGroteskMedium",
    semiBold: "spaceGroteskSemiBold",
    bold: "spaceGroteskBold",
  },
  helveticaNeue: {
    // iOS only font.
    thin: "HelveticaNeue-Thin",
    light: "HelveticaNeue-Light",
    normal: "Helvetica Neue",
    medium: "HelveticaNeue-Medium",
  },
  courier: {
    // iOS only font.
    normal: "Courier",
  },
  sansSerif: {
    // Android only font.
    thin: "sans-serif-thin",
    light: "sans-serif-light",
    normal: "sans-serif",
    medium: "sans-serif-medium",
  },
  monospace: {
    // Android only font.
    normal: "monospace",
  },
}

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.openSans,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: fonts.helveticaNeue, android: fonts.sansSerif }),
  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: fonts.courier, android: fonts.monospace }),
}
