import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "app/theme"
import { Text } from "app/components/Text"
import { TextInput } from "react-native-paper"
import { CategoryList } from "./CategoryList"

export interface CreateItemProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  /**
   * Callback to populate store values
   *
   * */
  setData: (data: any) => void
}

/**
 * Describe your component here
 */
export const CreateItem = observer(function CreateItem(props: CreateItemProps) {
  const { style, setData } = props
  const $styles = [$container, style]

  const [name, setName] = React.useState("")
  const [category, setCategory] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [price, setPrice] = React.useState(0)
  const [calories, setCalories] = React.useState(0)
  React.useEffect(() => {
    setData({ name, category, description, price, calories })
  }, [name, category, description, price, calories])

  return (
    <View style={$styles}>
      {/* <Text style={$text}>Hello</Text> */}

      <TextInput label="Name" value={name} onChangeText={setName} />

      <CategoryList
        style={{ flex: 1 }}
        callback={(value) => {
          setCategory(value)
        }}
      />
      <TextInput label="Description" value={description} onChangeText={setDescription} />
      <TextInput
        label="Price"
        value={price.toString()}
        onChangeText={(value) => {
          const number = Number(value)
          setPrice(number)
        }}
        keyboardType="number-pad"
      />
      <TextInput
        label="Calories"
        value={calories.toString()}
        onChangeText={(value) => {
          const number = Number(value)
          setCalories(number)
        }}
        keyboardType="number-pad"
      />
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
  // alignItems: "center",
  // paddingHorizontal: spacing.xl,
}

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}
