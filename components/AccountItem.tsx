import * as React from "react";
import { StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { observer } from "mobx-react-lite";
import { colors, typography } from "../app/theme";
import { Text } from "./Text";
import { Ionicons } from "@expo/vector-icons";

export interface AccountItemProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * An optional style override useful for padding & margin.
   */
  icon: keyof typeof Ionicons.glyphMap;

  title: string;
}

/**
 * Describe your component here
 */
export const AccountItem = observer(function AccountItem(
  props: AccountItemProps
) {
  const { style, title, icon } = props;
  const $styles = [$container, style];

  return (
    <View style={$styles}>
      <Ionicons name={icon} />
      <Text style={$text}>{title}</Text>
    </View>
  );
});

const $container: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
};

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
};
