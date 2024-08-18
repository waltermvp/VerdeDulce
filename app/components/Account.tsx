import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import { AccountItem } from "./AccountItem"

export interface AccountProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  email: string
}

/**
 * Describe your component here
 */
export const Account = observer(function Account(props: AccountProps) {
  const { style, email } = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
      <AccountItem title="Account" icon="person" />
      <Text style={$text}>{email}</Text>
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
