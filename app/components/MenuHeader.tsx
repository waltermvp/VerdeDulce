import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import { Image } from "expo-image"
import { TypeAnimation } from "react-native-type-animation"
const HEIGHT = 225
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
        <View style={{ flex: 1 }}>
          <Text style={$text}>Verde Dulce</Text>
          {/* <TypeAnimation
            sequence={[
              { text: "Verde" },
              { text: "Dulce" },
              {
                action: () => {
                  console.log("Finished first two sequences")
                },
              },
              { text: "One Two Three" },
              { text: "One Two" },
              { text: "One" },
            ]}
            loop
            style={{
              color: "white",
              backgroundColor: "green",
              fontSize: 30,
            }}
          /> */}
        </View>
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
  height: HEIGHT,
  backgroundColor: "red",
}

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}
