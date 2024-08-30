import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, Linking } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Footer, OrderButton, Screen, Text } from "app/components"
import { colors, spacing, typography } from "app/theme"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"
import { translate } from "app/i18n"

interface FaqScreenProps extends AppStackScreenProps<"Faq"> {}

export const FaqScreen: FC<FaqScreenProps> = observer(function FaqScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerRight: () => {
          return (
            <OrderButton
              tx="landingScreen.order"
              icon="logo-whatsapp"
              onPress={() => {
                // navigation.navigate("OrderNav", { screen: "Home" })
                // return
                const phoneNumber = "+593963021783" // Replace with the actual phone number

                const message = translate("menuScreen.orderMessage") // Replace with the actual message
                const url = `whatsapp://send?text=${encodeURIComponent(
                  message,
                )}&phone=${encodeURIComponent(phoneNumber)}`
                Linking.openURL(url).catch((err) => console.error("Failed to open WhatsApp", err))
              }}
            />
          )
        },
      })
    }, [navigation]),
  )

  return (
    <Screen style={$root} preset="scroll">
      <View style={{ height: "100%" }}>
        <Text
          text="Preguntas Frecuentes"
          preset="heading"
          style={{
            fontFamily: typography.fonts.poppins.light,
            textAlign: "center",
            margin: spacing.md,
            color: colors.palette.greenFont,
          }}
        />

        <View style={$item}>
          <Text
            text="¿Qué es Verde Dulce?"
            preset="subheading"
            style={{ fontFamily: typography.fonts.poppins.light }}
          />
          <Text text="Verde Dulce es una empresa de alimentos que se dedica a la producción y venta de productos saludables y deliciosos." />
        </View>
        <View style={$item}>
          <Text
            text="Cuales son los metodos de pago?"
            preset="subheading"
            style={{ fontFamily: typography.fonts.poppins.light }}
          />
          <Text
            text="Aceptamos efectivo y tranferencia por Pichincha."
            style={{ fontFamily: typography.fonts.poppins.normal }}
          />
        </View>
      </View>
      <Footer />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.lightBackground,
}

const $item: ViewStyle = {
  flexDirection: "column",
  margin: spacing.md,
  borderBottomWidth: 0.5,
  borderBottomColor: colors.palette.veryDarkGreen,
  paddingBottom: spacing.md,
}
