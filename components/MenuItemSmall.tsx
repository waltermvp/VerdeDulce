import * as React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { observer } from "mobx-react-lite";
import { colors, spacing, typography } from "../app/theme";
import { Text } from "./Text";
import { useMediaQuery } from "react-responsive";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export interface MenuItemSmallProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
  name: string;
  description: string;
  price: number;
}

/**
 * Describe your component here
 */
export const MenuItemSmall = observer(function MenuItemSmall(
  props: MenuItemSmallProps
) {
  const { style, name, description, price } = props;
  const $styles = [$container, style];
  const number = price;
  const dollars = (number / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 430px)" });

  // minimumFontScale: allowFontScaling ? MIN_FONT_SCALE : 1, // This prevents the font from getting too small.
  // maxFontSizeMultiplier: allowFontScaling ? MAX_FONT_SCALE : 1, // This prevents the font from getting too big.
  // allowFontScaling, // This allows the font to be scaled or not.

  return (
    <View style={$styles}>
      <View
        style={{
          flex: 3.5,
          paddingBottom: spacing.md,
          justifyContent: "flex-start",
        }}
      >
        <Text preset="bold" style={styles.title}>
          {name}
        </Text>
        <Text preset="default2" style={styles.description}>
          {description}
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.price} preset="subheading">
          {dollars}
        </Text>
      </View>
    </View>
  );
});

const $container: ViewStyle = {
  flex: 1,
  borderWidth: 3,
  borderColor: colors.palette.greenFont,
  borderRadius: 13,
  padding: spacing.xs,
  paddingTop: 0,
  justifyContent: "space-between",
  // marginLeft: spacing.xl,

  flexDirection: "row",
  // width: "100%",
};
console.log("spacing.lg", RFPercentage(2));
const styles = StyleSheet.create({
  welcome: {
    fontSize: RFValue(24), // second argument is standardScreenHeight(optional),
    textAlign: "center",
    margin: 10,
  },
  title: {
    paddingTop: spacing.xxs,

    fontSize: RFValue(10), // second argument is standardScreenHeight(optional),
    lineHeight: RFValue(11), // second argument is standardScreenHeight(optional),
    // marginBottom: 12,÷
    color: colors.palette.greenFont,
    fontFamily: typography.fonts.poppins.Poppins_400Regular,
  },
  description: {
    fontSize: RFValue(9), // second argument is standardScreenHeight(optional),
    lineHeight: RFValue(9),
    fontFamily: typography.fonts.poppins.Poppins_300Light,
    paddingTop: spacing.sm,
    // letterSpacing: 0.15,
  },
  price: {
    fontSize: RFValue(13), // second argument is standardScreenHeight(optional),
    color: colors.palette.greenFont,
  },
});
