import * as React from "react";
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { observer } from "mobx-react-lite";
import { colors, spacing, typography } from "../app/theme";
import { Text } from "./Text";
import { RFValue } from "react-native-responsive-fontsize";
const width = Dimensions.get("window").width;
export interface SimpleMenuItemProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
  title: string;
  description: string;
  price: string;
  index: number;
}

/**
 * Describe your component here
 */
export const SimpleMenuItem = observer(function SimpleMenuItem(
  props: SimpleMenuItemProps
) {
  const { style, title, description, price, index } = props;
  const $styles = [$container, style];

  const backgroundColor =
    index % 2 === 0 ? colors.palette.greenFont : colors.palette.neutral100;
  const fontColor =
    index % 2 === 0 ? colors.palette.neutral100 : colors.palette.greenFont;
  const dollars = (Number(price) / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <View style={[$styles, { backgroundColor }]}>
      <View style={{ flexDirection: "column", flex: 4.4 }}>
        <Text style={[styles2.title, { color: fontColor }]}>{title}</Text>
        <Text style={[styles2.description, { color: fontColor }]}>
          {description}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={[styles2.price, { color: fontColor }]}>{dollars}</Text>
      </View>
    </View>
  );
});

const $container: ViewStyle = {
  // flex: 1,
  // justifyContent: "space-between",
  flexDirection: "row",
  paddingHorizontal: spacing.sm,
  width: width / 3.2,
  height: "auto",
  padding: spacing.sm,
  alignItems: "center",
};

const styles2 = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: RFValue(8), // second argument is standardScreenHeight(optional),
    lineHeight: RFValue(8), // second argument is standardScreenHeight(optional),
    // marginBottom: 12,÷
    color: colors.palette.neutral100,
    fontFamily: typography.fonts.poppins.semiBold,
    // textAlign: "center",
  },
  description: {
    flex: 1,
    fontSize: RFValue(9), // second argument is standardScreenHeight(optional),
    lineHeight: RFValue(9),
    fontFamily: typography.fonts.poppins.Poppins_200ExtraLight,
    // letterSpacing: 0.15,
    color: colors.palette.neutral100,
    flexWrap: "wrap",
    maxWidth: width / 2.5,
  },
  price: {
    flex: 1,
    fontSize: RFValue(12), // second argument is standardScreenHeight(optional),
    lineHeight: RFValue(13),
    fontFamily: typography.fonts.poppins.Poppins_300Light,
    // letterSpacing: 0.15,
    color: colors.palette.neutral100,
    alignSelf: "center",
  },
});
