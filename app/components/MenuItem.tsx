import * as React from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { spacing } from "app/theme"
import { Text } from "app/components/Text"
import { Image } from "expo-image"
import { Bullets } from "./Bullets"
import { Badge } from "react-native-paper"

export interface MenuItemProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  item: any
  showDelete?: boolean
  onDelete?: () => void
}

/**
 * Describe your component here
 */
const SIZE = 250
export const MenuItem = observer(function MenuItem(props: MenuItemProps) {
  const { style, item, showDelete = false, onDelete } = props
  const $styles = [$container, style]
  // const blurhash =
  //   "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj["
  // console.log("MenuItem.tsx: blurhash: ", item.url)
  return (
    <View style={$styles}>
      {showDelete && (
        <Badge
          style={{
            alignSelf: "flex-end",
            marginRight: -spacing.xs,
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
          height: SIZE,
          width: SIZE,
          borderRadius: 9,
          // borderColor: "red",  borderWidth: 2
        }}
        source={item.url}
        // placeholder={{ blurhash }}
        // placeHolder={() => <PlaceholderMenu />}
        contentFit="cover"
        transition={1000}
      />
      <View style={{ width: SIZE, marginTop: spacing.md }}>
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
    </View>
  )
})

const $container: ViewStyle = {
  // flex: 1,
  paddingVertical: spacing.lg,
}
