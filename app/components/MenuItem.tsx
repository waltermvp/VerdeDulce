import * as React from "react"
import { Pressable, StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "app/theme"
import { Text } from "app/components/Text"
import { Image } from "expo-image"
import { Bullets } from "./Bullets"
import { Badge } from "react-native-paper"
import { imageCDNURL } from "app/utils/linkbuilder"
import { OrderButton } from "./OrderButton"
import { useMediaQuery } from "react-responsive"

const minHeight = 775
export interface MenuItemProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  item: any
  showDelete?: boolean
  onDelete?: () => void
  onPress?: () => void
  show: boolean
}

/**
 * Describe your component here
 */
export const MenuItem = observer(function MenuItem(props: MenuItemProps) {
  const { style, item, showDelete = false, onDelete, onPress, show = false } = props
  const $styles = [$container, style]
  const isSmallScreen = useMediaQuery({ query: "(max-width: 430px)" })
  const url = imageCDNURL(item.url)
  return (
    <Pressable
      // onPress={onPress}
      style={({ pressed }) => {
        return {
          backgroundColor: pressed ? colors.palette.neutral400 : undefined,
          borderRadius: 13,
        }
      }}
    >
      {({}) => {
        return (
          <View
            // style={[$styles, { backgroundColor: pressed ? colors.palette.darkTeal : undefined }]}
            style={[
              $styles,
              {
                minHeight: isSmallScreen ? 500 : minHeight,
              },
            ]}
          >
            {showDelete && (
              <Badge
                style={{
                  alignSelf: "flex-end",

                  marginBottom: -spacing.xs,
                  zIndex: 9,
                }}
                onPress={onDelete}
              >
                X
              </Badge>
            )}
            <View style={{ flex: 8, alignItems: "center" }}>
              <Image
                style={{
                  // height: SIZE,
                  aspectRatio: 1,
                  width: "85%",
                  borderRadius: 9,
                  // borderColor: "red",  borderWidth: 2
                }}
                source={{ uri: url }}
                onError={(e) => console.log("MenuItem.tsx: Image onError: ", e)}
                // placeHolder={() => <PlaceholderMenu />}
                contentFit="cover"
                transition={1000}
              />
              <View style={{ marginTop: spacing.md, paddingHorizontal: spacing.xxl }}>
                <Text preset="subheading" style={{ fontFamily: typography.fonts.poppins.light }}>
                  {item.name}
                </Text>
                <Text preset="default" style={{ fontFamily: typography.fonts.poppins.light }}>
                  {item.description}
                </Text>
                {/* <Text style={styles.price} preset="bold">
          {item.price}
        </Text> */}
                <Bullets
                  style={{ marginTop: spacing.md }}
                  items={[
                    { title: item.calories, subtitle: "CALORIES" },
                    { title: item.carbs, subtitle: "CARBS" },
                    { title: item.protein, subtitle: "PROTEIN" },
                    { title: item.fat, subtitle: "GRASA" },
                    // { title: "860", subtitle: "CALORIES" },
                  ]}
                />
              </View>
            </View>
            <View style={{ flex: 1 }}>
              {show && (
                <OrderButton
                  style={{
                    // marginTop: spacing.xl,
                    padding: spacing.md,
                    width: "90%",

                    // bottom: spacing.xxxs,
                  }}
                  tx="landingScreen.order"
                  onPress={onPress}
                />
              )}
            </View>
          </View>
        )
      }}
    </Pressable>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: "rgba(232, 220, 198, 1)",
  alignItems: "center",
  paddingVertical: spacing.lg,
  borderRadius: 13,
  //TODO: decresase hieight for smaller breakpoints
  minHeight: minHeight,
  // margin:200
  // backgroundColor: "red",
}
