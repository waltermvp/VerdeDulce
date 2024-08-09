import * as React from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { spacing } from "app/theme"
import { Text } from "app/components/Text"
import { Image } from "expo-image"
import { Bullets } from "./Bullets"

export interface MenuItemProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  item: any
}

/**
 * Describe your component here
 */
const SIZE = 250
export const MenuItem = observer(function MenuItem(props: MenuItemProps) {
  const { style, item } = props
  const $styles = [$container, style]
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj["

  return (
    <View style={$styles}>
      {/* <View style={styles.item}> */}
      <Image
        style={{ height: SIZE, width: SIZE, borderRadius: 9 }}
        source={item.url}
        placeholder={{ blurhash }}
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
      {/* </View> */}
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  paddingVertical: spacing.lg,
}
