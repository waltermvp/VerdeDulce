import * as React from "react";
import {
  Linking,
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

export interface BulletProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
  bullets: [BulletType];
}

/**
 * Describe your component here
 */
export const Bullet = function Bullet(props: BulletProps) {
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
      {bullets.map((bullet, index) => (
        <View key={index}>
          <Text style={$heading} preset="subheading">
            {bullet.title}
          </Text>
          {bullet.links.map((link, index) => (
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(link.url);
              }}
              key={index}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 44,
                }}
              >
                <Text style={$text} key={index} preset="default">
                  {link.title}
                </Text>
                <Ionicons
                  style={{ paddingLeft: spacing.sm }}
                  size={spacing.xl}
                  name={link.icon}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const $container: ViewStyle = {
  justifyContent: "center",
  flexDirection: "row",
  gap: spacing.xl,
};
const $heading: TextStyle = {
  // padding: spacing.md,
};
const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
  marginBottom: spacing.xxs,
};
