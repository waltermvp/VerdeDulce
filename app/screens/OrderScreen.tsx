import React, { FC, useLayoutEffect } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, OrderButton, Screen, Text } from "app/components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"

interface OrderScreenProps extends AppStackScreenProps<"Order"> {}

export const OrderScreen: FC<OrderScreenProps> = observer(function OrderScreen() {
  const {} = useStores()
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Button
            tx="orderScreen.account"
            preset="link"
            onPress={() => navigation.navigate("Account")}
          />
        )
      },
    })
  }, [navigation])

  return (
    <Screen style={$root} preset="scroll">
      <Text tx="common.comingSoon" preset="idead" style={{ textAlign: "center" }} />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
