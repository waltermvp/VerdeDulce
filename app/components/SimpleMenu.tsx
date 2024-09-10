// import * as React from "react"
import { Dimensions, FlatList, StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "app/theme"
import { Text } from "app/components/Text"
import { Category } from "./Category"
const width = Dimensions.get("window").width
export interface SimpleMenuProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  categories: []
}

/**
 * Describe your component here
 */
export const SimpleMenu = observer(function SimpleMenu(props: SimpleMenuProps) {
  const { style, categories } = props
  const $styles = [$container, style]
  const $categories = categories.slice(0, 2)
  const $categories2 = categories.slice(2, 4)

  return (
    <View style={$styles}>
      <View style={{ flex: 4, marginLeft: spacing.lg }}>
        <FlatList
          contentContainerStyle={{
            flexWrap: "wrap",
            gap: spacing.sm,
            flexDirection: "row",
          }}
          horizontal
          renderItem={({ item }) => <Category key={item.title} category={item}></Category>}
          data={$categories}
        ></FlatList>
      </View>
      <View style={{ flex: 2, marginHorizontal: spacing.lg }}>
        <FlatList
          contentContainerStyle={
            {
              // flexWrap: "wrap",
              // flexDirection: "row",
            }
          }
          // horizontal
          renderItem={({ item }) => {
            console.log("WOWOWOW", item)
            return <Category key={item.title} category={item}></Category>
          }}
          data={$categories2}
        ></FlatList>
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  // width: width,

  // justifyContent: "center",
  // flexWrap: "wrap",
  // flexDirection: "row",
  // columnGap: spacing.xxl,
}
