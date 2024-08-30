import * as React from "react"
import { Pressable, StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing } from "app/theme"
import { Text } from "app/components/Text"
import { Image } from "expo-image"
import { Bullets } from "./Bullets"
import { Badge } from "react-native-paper"
import { imageCDNURL } from "app/utils/linkbuilder"
import { OrderButton } from "./OrderButton"
import { useMediaQuery } from "react-responsive"

export interface MenuItemProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  item: any
  showDelete?: boolean
  onDelete?: () => void
  onPress?: () => void
}

/**
 * Describe your component here
 */
export const MenuItem = observer(function MenuItem(props: MenuItemProps) {
  const { style, item, showDelete = false, onDelete, onPress } = props
  const $styles = [$container, style]
  console.log("MenuItem.tsx: item.url: ", item.url)
  const isSmallScreen = useMediaQuery({ query: "(max-width: 430px)" })

  const url = imageCDNURL("SG_Web_Image_Plate_Hot_Honey_Chicken.png")
  return (
    <Pressable
      // onPress={onPress}
      style={({ focused, hovered, pressed }) => {
        return {
          backgroundColor: pressed ? colors.palette.neutral400 : undefined,
          borderRadius: 13,
        }
      }}
    >
      {({ pressed }) => {
        return (
          <View
            // style={[$styles, { backgroundColor: pressed ? colors.palette.darkTeal : undefined }]}
            style={[$styles, { minHeight: isSmallScreen ? 500 : 825 }]}
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
              <Text preset="subheading">{item.name}</Text>
              <Text preset="formLabel">{item.description}</Text>
              {/* <Text style={styles.price} preset="bold">
          {item.price}
        </Text> */}
              <Bullets
                style={{ marginTop: spacing.md }}
                items={[
                  { title: "860", subtitle: "CALORIES" },
                  { title: "860", subtitle: "CALORIES" },
                  { title: "860", subtitle: "CALORIES" },
                  { title: "860", subtitle: "CALORIES" },
                  { title: "860", subtitle: "CALORIES" },
                ]}
              />
            </View>
            <OrderButton
              style={{ marginTop: spacing.xl }}
              tx="landingScreen.order"
              onPress={onPress}
            />
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
  minHeight: 825,
  // margin:200
  // backgroundColor: "red",
}
