import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "app/theme"
import { StorageManager } from "@aws-amplify/ui-react-storage"
import { TextInput } from "react-native-paper"
import { CategoryList } from "./CategoryList"
import { imageCDNURL } from "app/utils/linkbuilder"

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
  const [url, setURL] = React.useState<string | null>(null)
  const [uploading, setUploading] = React.useState(false)

  React.useEffect(() => {
    setData({ name, category, description, price, calories, url })
  }, [name, category, description, price, calories, url])

  return (
    <View style={$styles}>
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
      <View style={{ width: 100, height: 100, borderColor: "black", borderWidth: 3 }}>
        <StorageManager
          // accessLevel="protected"
          acceptedFileTypes={["image/*"]}
          path="menu-pictures/"
          maxFileCount={1}
          onUploadError={(error) => console.log("error", error)}
          onUploadSuccess={(data) => {
            console.log("data", data)
            const url = imageCDNURL(data.key, "thumbnail", false, "cover", 0)
            console.log("url", url)
            setURL(url)

            setUploading(false)
          }}
          onUploadStart={() => setUploading(true)}
          isResumable
        />
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
  // alignItems: "center",
  // paddingHorizontal: spacing.xl,
}
