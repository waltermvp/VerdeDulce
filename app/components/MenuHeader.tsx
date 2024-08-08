import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "app/theme"
import { Text } from "app/components/Text"
import { Image } from "expo-image"
// import TypeWriterEffect from "react-native-typewriter-effect"

const HEIGHT = 275
export interface MenuHeaderProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const MenuHeader = observer(function MenuHeader(props: MenuHeaderProps) {
  const { style } = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, height: HEIGHT }}>
          <Image style={{ flex: 1 }} source={require("../../assets/images/VerdeDulce_logo.svg")} />
        </View>
        <View style={{ flex: 1, justifyContent: "center", marginLeft: spacing.lg }}>
          <Text tx="landingScreen.prompt" preset="heading"></Text>
          {/* <TypeWriterEffect
            style={typography.primary}
            content="Verde Dulce! Comida de alta sostenible, y de alta calidad."
          /> */}
        </View>
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
  height: HEIGHT,
  // backgroundColor: "red",
}

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}
