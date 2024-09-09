import * as React from "react"
import { Pressable, StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "app/theme"
import { Text } from "app/components/Text"
import { Newsletter } from "./Newsletter"
import { Bullets } from "./Bullets"
import { Bullet } from "./Bullet"
import { QrCodeSvg } from "react-native-qr-svg"
import { Image } from "expo-image"
import { imageCDNURL } from "app/utils/linkbuilder"
const SIZE = 125
const ICON_SIZE = SIZE / 4.75
const CONTENT = "https://wa.me/c/593963021783"

export interface FooterProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  onPressQr?: () => void
}

/**
 * Describe your component here
 */
export const Footer = observer(function Footer(props: FooterProps) {
  const { style, onPressQr } = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
      <View
        style={{
          flex: 1,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: colors.palette.greenFont,
          padding: spacing.xxxl,
        }}
      >
        <Newsletter />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.palette.footerGreen,
          alignItems: "space-between",
          padding: spacing.xl,
          flexDirection: "row",

          // borderTopWidth: 1,
          // borderBottomWidth: 1,
          // borderColor: colors.palette.greenFont,
        }}
      >
        <Bullet
          bullets={[
            {
              title: "Social",
              links: [
                {
                  title: "Facebook",
                  url: "https://www.facebook.com/profile.php?id=61564202236840",
                  icon: "logo-facebook",
                },
                {
                  title: "Instagram",
                  url: "https://www.instagram.com/verdedulce_",
                  icon: "logo-instagram",
                },
              ],
            },
          ]}
        />
        {/* add copyright information */}
        <View style={{ flex: 1 }}>
          <Pressable onPress={onPressQr}>
            <QrCodeSvg
              style={styles.qr}
              value={CONTENT}
              frameSize={SIZE}
              contentCells={5}
              content={
                <Image
                  style={{ width: ICON_SIZE, height: ICON_SIZE }}
                  source={{ uri: imageCDNURL("VerdeDulce_logo.png") }}
                />
              }
              backgroundColor={colors.palette.greenFont}
              dotColor="#ffff"
              contentStyle={styles.box}
            />
            <Text
              style={{
                fontStyle: typography.fonts.poppins.light,
                alignSelf: "flex-end",
                padding: spacing.md,
              }}
            >
              &copy; 2024 VerdeDulce. All rights reserved.
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
  // alignItems: "center",
  // flex: 1,
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 20,
  },
  qr: {
    padding: 15,
    alignSelf: "flex-end",
  },
})
