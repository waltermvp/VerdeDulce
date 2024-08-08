import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
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
        source="https://picsum.photos/seed/696/3000/2000"
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Bullets
        items={[
          { title: "860", subtitle: "CALORIES" },
          { title: "860", subtitle: "CALORIES" },
          { title: "860", subtitle: "CALORIES" },
          { title: "860", subtitle: "CALORIES" },
          { title: "860", subtitle: "CALORIES" },
        ]}
      />
      {/* </View> */}
    </View>
  )
})

const $container: ViewStyle = {
  // justifyContent: "center",
  flex: 1,
  alignItems: "center",
  borderColor: "red",
  borderWidth: 3,
}

const styles = {
  item: {
    // flexDirection: "column",
    alignItems: "center",
    borderColor: "red",
    borderWidth: 3,
    // flex: 1,
  },
  title: { textAlign: "center" },
  price: {},
  description: {},
}
