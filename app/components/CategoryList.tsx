import * as React from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { SegmentedButtons } from "react-native-paper"

export interface CategoryListProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  callback?: (category: string) => void
}

/**
 *
 * @component CategoryList
 * @description A component that renders a segmented button list for selecting categories.
 * @param {StyleProp<ViewStyle>} style - An optional style override useful for padding & margin.
 * @param {(category: string) => void} callback - A callback function that is called when a category is selected.
 * @returns {JSX.Element} The rendered CategoryList component.
 *
 */
export const CategoryList = observer(function CategoryList(props: CategoryListProps) {
  const { style, callback } = props
  const $styles = [$container, style]

  const [value, setValue] = React.useState("walk")
  return (
    <View style={$styles}>
      <SegmentedButtons
        value={value}
        onValueChange={(value) => {
          setValue(value)
          callback && callback(value)
        }}
        buttons={[
          {
            value: "featured",
            label: "Featured",
          },
          {
            value: "protein",
            label: "Protein Plates",
          },
          {
            value: "salad",
            label: "Salad",
          },

          { value: "bowls", label: "Bowls" },
          { value: "sides", label: "Sides" },
          { value: "drinks", label: "Drinks" },
        ]}
      />
      {/* {categories.map((category) => () => {
        return (
          <Chip
            style={{ width: 100, height: 40 }}
            // icon="information"
            textStyle={{ fontSize: 12 }}
            onPress={() => console.log("Pressed")}
          >
            category
          </Chip>
        )
      })} */}
    </View>
  )
})

const $container: ViewStyle = {
  // justifyContent: "center",
  // flex: 1,
  // width: 200,
}
