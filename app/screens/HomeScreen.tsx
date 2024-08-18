import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { OrderButton, Screen, Text } from "app/components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface HomeScreenProps extends AppStackScreenProps<"Home"> {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll">
      <Text
        tx="homeScreen.welcome"
        txOptions={{
          name: "John Doe",
        }}
      />

      <OrderButton
        icon="logo-whatsapp"
        tx="homeScreen.order"
        onPress={() => {
          navigation.navigate("Menu")
        }}
      />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
