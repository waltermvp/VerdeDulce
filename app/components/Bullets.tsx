import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"

export interface BulletsProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  items: { title: string; subtitle: string }[]
}

/**
 * Describe your component here
 */
export const Bullets = observer(function Bullets(props: BulletsProps) {
  const { style, items } = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
      {items.map((item, index) => (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View key={index} style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={$text}>{item.title}</Text>
            <Text style={$text}>{item.subtitle}</Text>
          </View>
          <View key={index} style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={$text}>{item.title}</Text>
            <Text style={$text}>{item.subtitle}</Text>
          </View>
        </View>
      ))}
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}
