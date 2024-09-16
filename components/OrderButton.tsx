import * as React from "react";
import { StyleProp, TextStyle, View, ViewStyle, Pressable } from "react-native";
import { observer } from "mobx-react-lite";
import { colors, spacing, typography } from "../app/theme";
import { Text } from "./Text";
import { useMediaQuery } from "react-responsive";
import { Ionicons } from "@expo/vector-icons";
import { isRTL, translate, TxKeyPath } from "../app/i18n";
import i18n from "i18n-js";

export interface OrderButtonProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * An optional style override useful for padding & margin.
   */
  textStyle?: StyleProp<TextStyle>;
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath;
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: i18n.TranslateOptions;
  /**
   * An optional style override useful for padding & margin.
   */
  icon?: keyof typeof Ionicons.glyphMap;

  /**
   * Function to handle the press event of the order button.
   *
   * @callback onPress
   * @returns {void}
   */
  onPress?: () => void;
}

/**
 * Describe your component here
 */
export const OrderButton = observer(function OrderButton(
  props: OrderButtonProps
) {
  const { style, tx, textStyle, text, icon, onPress } = props;
  const [onHoverIn, setOnHoverIn] = React.useState(false);

  const $styles = [$container, style];
  const isSmallScreen = useMediaQuery({ query: "(max-width: 479px)" });
  return (
    <Pressable
      // style={({ pressed }) => [
      //   {
      //     flexDirection: "row",
      //     alignItems: "center",

      //     justifyContent: "center",
      //     backgroundColor: onHoverIn
      //       ? colors.palette.primary100
      //       : colors.palette.greenFont,

      //     // borderRadius: 13,
      //     borderWidth: 3,
      //     borderColor: onHoverIn
      //       ? colors.palette.greenFont
      //       : colors.palette.lightYellowGreen,
      //     // alignSelf: "center",
      //   },

      //   $styles,
      // ]}
      onPress={onPress}
      onHoverIn={() => {
        setOnHoverIn(true);
      }}
      onHoverOut={() => {
        setOnHoverIn(false);
      }}
    >
      <View
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: !onHoverIn
              ? colors.palette.primary100
              : colors.palette.greenFont,

            padding: isSmallScreen ? spacing.xxs : spacing.xs,
            borderRadius: 13,
            borderWidth: 3,
            borderColor: !onHoverIn
              ? colors.palette.greenFont
              : colors.palette.lightYellowGreen,
            //       ? colors.palette.greenFont
            //       : colors.palette.lightYellowGreen,
            //     // alignSelf: "center",
          },
          $styles,
        ]}
      >
        <Text
          tx={tx}
          preset="bold"
          style={[
            {
              fontSize: isSmallScreen ? 18 : undefined,
              color: onHoverIn
                ? colors.palette.primary100
                : colors.palette.greenFont,
              textAlign: "center",
            },
            textStyle,
          ]}
        >
          {text}
        </Text>
        {!isSmallScreen && (
          <Ionicons
            style={{
              // textDecorationLine: onHoverIn ? "underline" : undefined,
              paddingLeft: isSmallScreen ? spacing.xs : spacing.sm,
            }}
            name={icon}
            size={24}
            color={
              !onHoverIn
                ? colors.palette.greenFont
                : colors.palette.lightYellowGreen
            }
          />
        )}
      </View>
    </Pressable>
  );
});

const $container: ViewStyle = {
  justifyContent: "center",
  // width: 222,

  height: 55,
  // alignSelf: "center",
};
