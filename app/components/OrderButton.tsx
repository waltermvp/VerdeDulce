import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, Pressable } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "app/theme"
import { Text } from "app/components/Text"
import { useMediaQuery } from "react-responsive"
import { Ionicons } from "@expo/vector-icons"
import { isRTL, translate, TxKeyPath } from "../i18n"
import i18n from "i18n-js"

export interface OrderButtonProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: i18n.TranslateOptions
  /**
   * An optional style override useful for padding & margin.
   */
  icon: keyof typeof Ionicons.glyphMap

  /**
   * Function to handle the press event of the order button.
   *
   * @callback onPress
   * @returns {void}
   */
  onPress?: () => void
}

/**
 * Describe your component here
 */
export const OrderButton = observer(function OrderButton(props: OrderButtonProps) {
  const { style, tx, text, icon, onPress } = props
  const [onHoverIn, setOnHoverIn] = React.useState(false)

  const $styles = [$container, style]
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" })
  const isSmallScreen = useMediaQuery({ query: "(max-width: 479px)" })
  const isLargerThan479 = useMediaQuery({ query: "(min-width: 479px)" })
  console.log("isLargerThan479 in order button", isLargerThan479)
  console.log("isSmallScreen in order button", isSmallScreen)
  return (
    <Pressable
      style={[
        {
          marginRight: isSmallScreen ? spacing.xs : spacing.lg,
          flexDirection: "row",
          alignItems: "center",
        },
        $styles,
      ]}
      onPress={onPress}
      onHoverIn={() => {
        setOnHoverIn(true)
      }}
      onHoverOut={() => {
        setOnHoverIn(false)
      }}
    >
      {/* <Image
      style={{ height: 48 * multiplier, width: 207 * multiplier }}
      source={require("../../assets/images/WhatsAppButtonGreenLarge.svg")}
    /> */}

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.palette.greenFont,
          padding: isSmallScreen ? spacing.xxs : spacing.sm,
          borderRadius: 13,
          borderBottomColor: colors.palette.neutral900,
          borderBottomWidth: onHoverIn ? 2 : 0,
        }}
      >
        <Text tx={tx} preset="bold" style={{ color: colors.palette.lightYellowGreen }}></Text>
        <Ionicons
          style={{
            // textDecorationLine: onHoverIn ? "underline" : undefined,
            paddingLeft: isSmallScreen ? spacing.xs : spacing.sm,
          }}
          name={icon}
          size={24}
          color={colors.palette.lightYellowGreen}
        />
      </View>
    </Pressable>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}
