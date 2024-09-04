import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "app/theme"

import Constants from "expo-constants"
import Markdown from "react-native-markdown-display"
import { OrderButton } from "./OrderButton"
const copy = `# ¡Bienvenido a verdedulce.com!
## **Fresco, Rápido, Sabroso – Tu Verde Diario**


En Verde Dulce, creemos en ofrecer comidas frescas, saludables y deliciosas que te harán sentir bien. Nuestro menú está diseñado para brindarte opciones nutritivas y llenas de sabor, perfectas para un almuerzo rápido o una cena satisfactoria.

### Nuestro Compromiso con la Sostenibilidad:

Nos importa nuestro planeta tanto como tu salud. Por eso usamos empaques ecológicos, incluyendo bowls de cartón reciclado y bolsas sostenibles. Cada comida que disfrutas en Verde Dulce ayuda a tener un impacto positivo.

### Cómo Funciona:

1. Ve a [verdedulce.com](https://verdedulce.com/)  y pide tu ensalada: Explora nuestro menú y personaliza tu comida según tus gustos y necesidades dietéticas.
2.	Mezcla Tu Ensalada: Agita bien con nuestros ingredientes frescos y aderezos.
3.	Disfruta Tu Ensalada: Saborea los sabores de Verde Dulce, sabiendo que estás haciendo una elección saludable y sostenible.

¡Únete a Nosotros Hoy!

Visita verdedulce.com para hacer tu pedido y haz que tu próxima comida sea una experiencia fresca y sabrosa.
`

export interface IntroEmailProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  /**
   * Function to handle the press event of the order button.
   *
   * @callback onPress
   * @returns {void}
   */
  onPress?: () => void
}

/**
 * Describe your component here
 */
export const IntroEmail = observer(function IntroEmail(props: IntroEmailProps) {
  const { style, onPress } = props
  const $styles = [$container, style]
  console.log(Constants.expoConfig)

  return (
    <View style={$styles}>
      <Markdown
        style={{
          heading1: { fontSize: spacing.xxxl },
          heading3: { fontSize: spacing.xxl },
          body: { fontSize: spacing.lg, fontFamily: typography.fonts.poppins.semiBold },
          text: { color: "white", fontFamily: typography.fonts.poppins.light },

          list_item: {
            paddingVertical: spacing.xxs,
            fontFamily: typography.fonts.poppins.semiBold,
          },
          // inline: { backgroundColor: "red", color: "red" },
          ordered_list: {
            color: "white",
            paddingVertical: spacing.sm,
            fontFamily: typography.fonts.poppins.semiBold,
          },
          bullet_list: {
            backgroundColor: "red",
            color: "red",
            fontFamily: typography.fonts.poppins.semiBold,
          },
          // heading1: { color: "white" },
          // heading2: { color: "white" },
          // strong: { color: "white" },
        }}
      >
        {copy}
        {/* <OrderButton text="/???" /> */}
      </Markdown>
      <OrderButton
        style={{ backgroundColor: colors.palette.lightYellowGreen, borderRadius: 13 }}
        text="Ordena Ya"
        textStyle={{ color: colors.palette.greenFont }}
        onPress={onPress}
      />
      {/* <Text style={[$text, { alignSelf: "center" }]} preset="heading">
        {Constants.expoConfig?.name}
      </Text>
      <Text style={$headerText} preset="subheading">
        ¡Bienvenido a Verde Dulce!
      </Text>
      <Text preset="default" style={$text}>
        En Verde Dulce, creemos en ofrecer comidas frescas, saludables y deliciosas que te harán
        sentir bien. Nuestro menú está diseñado para brindarte opciones nutritivas y llenas de
        sabor, perfectas para un almuerzo rápido o una cena satisfactoria.
      </Text>
      <Text style={$headerText} preset="subheading">
        Lo Que Ofrecemos:
      </Text>
      <Text preset="default" style={$text}>
        • El Bowl Diosa Verde: Una mezcla vibrante de col rizada, aguacate y pollo a la parrilla,
        todo cubierto con nuestra aderezo especial Diosa Verde. • Ensalada Poderosa de Quinoa: Llena
        de quinoa rica en proteínas, vegetales frescos y un aderezo de limón.
      </Text>
      <Text style={$headerText} preset="subheading">
        Nuestro Compromiso con la Sostenibilidad:
      </Text>
      <Text preset="default" style={$text}>
        Nos importa nuestro planeta tanto como tu salud. Por eso usamos empaques ecológicos,
        incluyendo bowls de cartón reciclado y bolsas sostenibles. Cada comida que disfrutas en
        Verde Dulce ayuda a tener un impacto positivo.
      </Text>
      <Text style={$headerText} preset="subheading">
        Cómo Funciona:
      </Text>
      <Text preset="default" style={$text}>
        `1. Ve a verdedulce.com y pide tu ensalada: Explora nuestro menú y personaliza tu comida
        según tus gustos y necesidades dietéticas. 2. Mezcla Tu Ensalada: Agita bien con nuestros
        ingredientes frescos y aderezos. 3. Disfruta Tu Ensalada: Saborea los sabores de Verde
        Dulce, sabiendo que estás haciendo una elección saludable y sostenible.`
      </Text>
      <Text style={$headerText} preset="subheading">
        ¡Únete a Nosotros Hoy!
      </Text>
      <Text preset="default" style={$text}>
        Visita verdedulce.com para hacer tu pedido y haz que tu próxima comida sea una experiencia
        fresca y sabrosa.
      </Text> */}
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
  padding: spacing.sm,
}

const $headerText: TextStyle = {
  // textAlign: "center",
  color: colors.palette.neutral100,
  padding: spacing.xs,
}

const $text: TextStyle = {
  // textAlign: "center",
  color: colors.palette.neutral100,
  // padding: spacing.xxs,
}
