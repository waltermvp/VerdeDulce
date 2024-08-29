import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "app/theme"
import { Text } from "app/components/Text"

type BulletType = {
  title: string
  links: [{ title: string; url: string }]
}

export interface BulletProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  bullets: [BulletType]
}

/**
 * Describe your component here
 */
export const Bullet = function Bullet(props: BulletProps) {
  const {
    style,
    bullets = [
      {
        title: "About Us",
        links: [
          { title: "Example Llink", url: "google.com" },
          { title: "Example Llink", url: "google.com" },
          { title: "Example Llink", url: "google.com" },
          { title: "Example Llink", url: "google.com" },
        ],
      },
      {
        title: "About Us",
        links: [
          { title: "Example Llink", url: "google.com" },
          { title: "Example Llink", url: "google.com" },
          { title: "Example Llink", url: "google.com" },
          { title: "Example Llink", url: "google.com" },
        ],
      },
    ],
  } = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
      {bullets.map((bullet, index) => (
        <View key={index}>
          <Text style={$heading} preset="subheading">
            {bullet.title}
          </Text>
          {bullet.links.map((link, index) => (
            <Text style={$text} key={index} preset="default">
              {link.title}
            </Text>
          ))}
        </View>
      ))}
    </View>
  )
}

const $container: ViewStyle = {
  justifyContent: "center",
  flexDirection: "row",
  gap: spacing.xxxl,
}
const $heading: TextStyle = {
  paddingBottom: spacing.lg,
}
const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
  marginBottom: spacing.xxs,
}
