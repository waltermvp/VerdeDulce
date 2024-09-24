import * as React from "react";
import {
  Dimensions,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
  StyleSheet,
} from "react-native";
import { observer } from "mobx-react-lite";
import { colors, spacing, typography } from "../app/theme";

import Constants from "expo-constants";
import Markdown from "react-native-markdown-display";
import { OrderButton } from "../components/OrderButton";
import { Marker } from "react-native-svg";
import { Ad, Screen, Text } from "@/components";
import { Image, ImageBackground } from "expo-image";
import { QrCodeSvg } from "react-native-qr-svg";
import { imageCDNURL } from "./utils/linkbuilder";
import { Ionicons } from "@expo/vector-icons";
import { translate } from "./i18n";
const height = Dimensions.get("window").height;

enum MarketingStrategy {
  whatsapp = "whatsapp",
  sweetgreen = "sweetgreen",
  AD = "AD",
  SingleDish = "SingleDish",
}
const EXPO_PUBLIC_MARKETING_STRATEGY = MarketingStrategy.SingleDish;
const SIZE = 225;
const CONTENT = "https://wa.me/c/593963021783";

const FONT_COLOR = colors.palette.lightYellowGreen;

export interface IntroEmailProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;

  strategy?: MarketingStrategy;

  /**
   * Function to handle the press event of the order button.
   *
   * @callback onPress
   * @returns {void}
   */
  onPress?: () => void;
}

/**
 * Describe your component here
 */
export default observer(function IntroEmail(props: IntroEmailProps) {
  const { style, onPress, strategy = MarketingStrategy.SingleDish } = props;
  const $styles = [$container, style];
  const dish = menu[1];

  return (
    <Screen style={$styles} preset="scroll">
      <View
        style={{
          flexDirection: "row",
          height,
        }}
      >
        <ImageBackground
          source={
            strategy === MarketingStrategy.SingleDish
              ? { uri: imageCDNURL(dish.url) }
              : require("../assets/images/clipped.png")
          }
          // export type ImageContentFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';

          contentFit="cover"
          transition={1000}
          style={{
            // backgroundColor: "red",
            // height: "150%",
            width: height * 2,
            // height: 1000,
            aspectRatio: 1,
            flex: 1,
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.25)",
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                // alignItems: "center",
                marginHorizontal: spacing.lg,
                // backgroundColor: "red",
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  marginBottom: spacing.lg,
                }}
              >
                <QrCodeSvg
                  style={styles.qr}
                  value={CONTENT}
                  frameSize={SIZE}
                  gradientColors={[
                    colors.palette.lightYellowGreen,
                    colors.palette.lightYellowGreen,
                  ]}
                  contentCells={5}
                  // content={
                  //   <Image
                  //     style={{ width: ICON_SIZE, height: ICON_SIZE }}
                  //     source={require("../assets/images/VerdeDulce_logo.png")}
                  //   />
                  // }
                  backgroundColor={colors.palette.greenFont}
                  dotColor="#ffff"
                  contentStyle={styles.box}
                />
                <Text
                  text="Entregas a Domicilio - Portoviejo"
                  preset="bold"
                  style={[
                    // $yellowColor,
                    {
                      letterSpacing: spacing.xxxs,
                      lineHeight: spacing.xxl,
                      fontSize: spacing.lg,
                      color: colors.palette.neutral100,
                      textAlign: "center",
                    },
                  ]}
                ></Text>
              </View>

              {/* <Text
                  text="(por App)"
                  preset="default"
                  style={{
                    color: "white",
                    fontSize: spacing.md,
                    textAlign: "center",

                    lineHeight: spacing.xxxl,
                  }}
                /> */}
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            // height: "100%",
            flex: 1,
            // height: "75%",
            // alignItems: "center",
            // paddingVertical: spacing.xxl,
            paddingTop: spacing.xxl * 1.25,
            // justifyContent: "space-between",
            // paddingVertical: spacing.xxl,
            // backgroundColor: "red",
            // paddingHorizontal: spacing.xxl,
          }}
        >
          <Text
            text={translate("adScreen.add1Title")}
            preset="heading"
            style={{
              // color: colors.palette.greenFont,
              color: colors.palette.neutral100,
              textAlign: "center",
              fontSize: spacing.xxl,
              lineHeight: spacing.xxxl + spacing.sm,
              fontFamily: typography.fonts.poppins.Poppins_400Regular,
              // paddingHorizontal: spacing.,
            }}
          ></Text>
          <Text
            text={dish.name + "?"}
            preset="heading"
            style={{
              // color: colors.palette.greenFont,
              color: colors.palette.lightYellowGreen,
              textAlign: "center",
              fontSize: spacing.xxl,
              lineHeight: spacing.xxxl + spacing.sm,
              fontFamily: typography.fonts.poppins.Poppins_400Regular,
              // paddingHorizontal: spacing.,
            }}
          ></Text>

          <View
            style={{
              flex: 1,
              alignItems: "center",
              paddingTop: spacing.xxl,
            }}
          >
            <Text
              tx="adScreen.add1Subtitle"
              preset="heading"
              style={[$headerText, { marginBottom: spacing.sm }]}
            />
            <Text text="verdedulce.com" preset="heading" style={$yellowColor} />
            <Text text="o" preset="heading" style={$headerText} />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: spacing.sm,
              }}
            >
              <Ionicons
                name="logo-whatsapp"
                size={spacing.xxl}
                color={colors.palette.lightYellowGreen}
                style={{ marginRight: spacing.md }}
              />
              <Text text="0963021783" preset="heading" style={$yellowColor} />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              height: "100%",
              alignItems: "center",
            }}
          >
            {/* <Text
                text="Ordena ahora en"
                preset="heading"
                style={$headerText}
              />
              <Text
                text="verdedulce.com"
                preset="heading"
                style={$yellowColor}
              /> */}
            <Text
              tx="adScreen.footerContent"
              preset="heading"
              style={[
                $headerText,
                {
                  marginHorizontal: spacing.xl,
                  marginTop: spacing.lg,
                  textAlign: "center",
                  fontSize: spacing.xxl,
                  letterSpacing: spacing.xxs,
                },
              ]}
            />
          </View>

          {/* <View
              style={{
                flex: 1,
                alignItems: "center",
                marginBottom: spacing.lg,
              }}
            >
              <QrCodeSvg
                style={styles.qr}
                value={CONTENT}
                frameSize={SIZE}
                gradientColors={[
                  colors.palette.lightYellowGreen,

                  "#ffff",
                  // "#3b4423",
                  // colors.palette.lightYellowGreen,
                ]}
                contentCells={5}
                content={
                  <Image
                    style={{ width: ICON_SIZE, height: ICON_SIZE }}
                    source={require("../assets/images/VerdeDulce_logo.png")}
                  />
                }
                backgroundColor={colors.palette.greenFont}
                dotColor="#ffff"
                contentStyle={styles.box}
              />
              <Text
                text="Entregas a Domicilio - Portoviejo"
                preset="bold"
                style={[$yellowColor, { letterSpacing: spacing.xxs }]}
              ></Text>
            </View> */}
        </View>
      </View>
    </Screen>
  );
});

const $container: ViewStyle = {
  // flex: 1,
  height,
  // justifyContent: "center",

  backgroundColor: colors.palette.greenFont,
};

const $headerText: TextStyle = {
  // textAlign: "center",
  color: colors.palette.neutral100,
  fontFamily: typography.fonts.poppins.light,
  lineHeight: spacing.xxl,
  // padding: spacing.xs,
};

const $yellowColor: TextStyle = {
  textAlign: "center",
  color: FONT_COLOR,
  fontFamily: typography.fonts.poppins.normal,
  letterSpacing: spacing.xxs,
  fontSize: spacing.xxl,
  fontWeight: "bold",
  // textDecorationLine: "underline",
  // padding: spacing.xxs,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 20,
  },
  qr: {
    padding: 15,
  },
});
/*
¡Compra 9 ensaladas y la 10ª es gratis!

En Verde Dulce, queremos premiar tu fidelidad. Por cada ensalada que compres, acumularás puntos automáticamente en tu cuenta. ¡Al llegar a 9 ensaladas, la décima es completamente gratis!

¿Cómo funciona?

    1.    Compra tu ensalada favorita: Cada vez que realices una compra, los puntos se añadirán a tu cuenta.
    2.    Acumula puntos: Por cada ensalada que compres, obtendrás 1 punto.
    3.    Lleva la 10ª ensalada gratis: Cuando hayas acumulado 9 puntos, recibirás una ensalada gratis en tu próxima compra.
    4.    Revisa tu progreso: Inicia sesión en tu cuenta en nuestro sitio web y revisa cuántos puntos llevas acumulados.

Haz tu pedido ahora!

Visítanos en VerdeDulce.com, pide tu ensalada y comienza a acumular tus puntos hoy mismo.

*/
import menu from "../menu-es.json";

// <View style={$styles}>
// <Markdown
//   style={{
//     heading1: { fontSize: spacing.xxxl },
//     heading3: { fontSize: spacing.xxl },
//     body: {
//       fontSize: spacing.lg,
//       fontFamily: typography.fonts.poppins.semiBold,
//       color: colors.palette.neutral100,
//     },
//     text: {
//       color: "white",
//       fontFamily: typography.fonts.poppins.light,
//     },

//     list_item: {
//       paddingVertical: spacing.xxs,
//       fontFamily: typography.fonts.poppins.semiBold,
//     },
//     // inline: { backgroundColor: "red", color: "red" },
//     ordered_list: {
//       color: "white",
//       paddingVertical: spacing.sm,
//       fontFamily: typography.fonts.poppins.semiBold,
//     },
//     bullet_list: {
//       backgroundColor: "red",
//       color: "red",
//       fontFamily: typography.fonts.poppins.semiBold,
//     },
//     // heading1: { color: "white" },
//     // heading2: { color: "white" },
//     // strong: { color: "white" },
//   }}
// >
//   {copy}
//   {/* <OrderButton text="/???" /> */}
// </Markdown>
// <OrderButton
//   style={{
//     backgroundColor: colors.palette.lightYellowGreen,
//     borderRadius: 13,
//   }}
//   text="Ordena Ya"
//   textStyle={{ color: colors.palette.greenFont }}
//   onPress={onPress}
// />
// </View>
