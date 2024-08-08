import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle ,View} from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { MenuHeader, MenuItem, Screen, Text } from "app/components"
import { FlashList } from "@shopify/flash-list"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface MenuScreenProps extends AppStackScreenProps<"Menu"> {}

export const MenuScreen: FC<MenuScreenProps> = observer(function MenuScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const DATA = [
    {
      id: "1",
      name: "Kale Caesar",
      description: "Organic baby kale, shaved parmesan, and house-made caesar dressing",
      price: "$9.99",
    },
    {
      id: "2",
      name: "Harvest Bowl",
      description: "Roasted brussels sprouts, roasted sweet potatoes, and wild rice",
      price: "$10.99",
    },
    {
      id: "3",
      name: "Spicy Thai Salad",
      description: "Organic arugula, spicy cashew dressing, and sesame tofu",
      price: "$11.99",
    },
    // Add more menu items here
  ];

  const renderMenuItem = ({ item }) => <MenuItem item={item} />;




  return (
    <Screen style={$root} preset="scroll">
      <FlashList

      ListHeaderComponent={MenuHeader}
      data={DATA}
      renderItem={renderMenuItem}/>
    </Screen>

    )
  
})

const $root: ViewStyle = {
  flex: 1,
}
