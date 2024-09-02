import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { IntroEmail, Screen, Text } from "app/components"
import { colors } from "app/theme"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface ViewerScreenProps extends AppStackScreenProps<"Viewer"> {}

export const ViewerScreen: FC<ViewerScreenProps> = observer(function ViewerScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll">
      <IntroEmail onPress={() => navigation.navigate("MenuNav", { screen: "Menu" })} />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.greenFont,
}
