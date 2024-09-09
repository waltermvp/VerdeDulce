import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "app/theme"
import { Text } from "app/components/Text"
import { useMediaQuery } from "react-responsive"

export interface MenuItemSmallProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  name: string
  description: string
  price: number
}

/**
 * Describe your component here
 */
export const MenuItemSmall = observer(function MenuItemSmall(props: MenuItemSmallProps) {
  const { style, name, description, price } = props
  const $styles = [$container, style]
  const number = price
  const dollars = (number / 100).toLocaleString("en-US", { style: "currency", currency: "USD" })
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" })
  const isSmallScreen = useMediaQuery({ query: "(max-width: 430px)" })

  const $textTitle: TextStyle = {
    color: colors.palette.greenFont,
    // fontFamily: typography.primary.normal,
    fontSize: isBigScreen ? spacing.lg : spacing.md,
  }
  const $textDescription: TextStyle = {
    // fontFamily: typography.primary.normal,
    // fontSize: 14,
    paddingTop: spacing.xs,
    fontSize: isBigScreen ? spacing.md : isSmallScreen ? spacing.sm : spacing.lg,

    // color: colors.palette.primary500,
  }
  const $textPrice: TextStyle = {
    // fontFamily: typography.primary.normal,
    fontSize: isSmallScreen ? spacing.md : spacing.lg,

    color: colors.palette.greenFont,
    fontWeight: "bold",
  }

  return (
    <View style={$styles}>
      <View style={{ flex: 4 }}>
        <Text style={$textTitle} preset="bold">
          {name}
        </Text>
        <Text style={$textDescription} preset="default">
          {description}
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={$textPrice} preset="subheading">
          {dollars}
        </Text>
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  borderWidth: 3,
  borderColor: colors.palette.greenFont,
  borderRadius: 13,
  padding: spacing.xs,
  justifyContent: "center",
  flexDirection: "row",
  width: "100%",
}
