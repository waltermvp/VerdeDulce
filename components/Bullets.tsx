import * as React from "react";
import { FlatList, StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { observer } from "mobx-react-lite";
import { colors, spacing, typography } from "../app/theme";
import { Text } from "./Text";

export interface BulletsProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;

  items: { title: string; subtitle: string }[];
}

/**
 * Describe your component here
 */
export const Bullets = observer(function Bullets(props: BulletsProps) {
  const { style, items } = props;
  const $styles = [$container, style];

  const renderBullet = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",

          // justifyContent: "space-between",
          // alignItems: "center",
          // backgroundColor: "red",
          // width: "100%",
        }}
      >
        <Text style={$text} preset="formLabel">
          {item.title}
        </Text>
        <Text style={$text} preset="formLabel">
          {item.subtitle}
        </Text>
      </View>
    );
  };
  return (
    <FlatList
      style={$styles}
      columnWrapperStyle={{ gap: spacing.lg }}
      data={items}
      numColumns={2}
      renderItem={renderBullet}
    />
  );
});

const $container: ViewStyle = {
  width: "100%",
  gap: spacing.sm,
};

const $text: TextStyle = {
  fontFamily: typography.fonts.poppins.light,
  fontSize: 20,
  color: colors.palette.greenFont,
  marginTop: spacing.xxs,
};
