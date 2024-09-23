import * as React from "react";
import {
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { colors, spacing, typography } from "../app/theme";
import { Text } from "./Text";
import { Ionicons } from "@expo/vector-icons";

type BulletType = {
  title: string;
  links: [
    { title: string; url: string; icon: keyof (typeof Ionicons)["glyphMap"] }
  ];
};

export interface AdProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
  bullets: [BulletType];
}

/**
 * Describe your component here
 */
export const Ad = function Bullet(props: AdProps) {
  const {
    style,
    bullets = [
      {
        title: "Social",
        links: [
          {
            title: "Facebook",
            url: "https://www.facebook.com/profile.php?id=61564202236840",
            icon: "logo-facebook",
          },
          {
            title: "Instagram",
            url: "https://www.instagram.com/verdedulce_",
            icon: "logo-instagram",
          },
          // { title: "Example Llink", url: "google.com" },
          // { title: "Example Llink", url: "google.com" },
        ],
      },
      // {
      //   title: "About Us",
      //   links: [
      //     { title: "Example Llink", url: "google.com" },
      //     { title: "Example Llink", url: "google.com" },
      //     { title: "Example Llink", url: "google.com" },
      //     { title: "Example Llink", url: "google.com" },
      //   ],
      // },
    ],
  } = props;
  const $styles = [$container, style];

  return (
    <View style={$styles}>
      <View style={{ flex: 1, backgroundColor: "red" }}></View>
      <View style={{ flex: 1, backgroundColor: "blue" }}></View>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: "red",
  // justifyContent: "center",
  // flexDirection: "row",
  // gap: spacing.xxxl,
};
const $heading: TextStyle = {
  paddingBottom: spacing.lg,
};
const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
  marginBottom: spacing.xxs,
};
