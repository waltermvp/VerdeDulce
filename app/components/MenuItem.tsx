import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import { Image } from 'expo-image';

export interface MenuItemProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  item:any
}

/**
 * Describe your component here
 */
export const MenuItem = observer(function MenuItem(props: MenuItemProps) {
  const { style , item} = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
  <View style={styles.item}>
    <Image ></Image>
    <Text style={styles.title}>{item.name}</Text>
    <Text style={styles.description}>{item.description}</Text>
    <Text style={styles.price}>{item.price}</Text>

  </View>
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


const styles = {
  
  item:{}
  ,title:{},
  price:{}
  description:{}
}
