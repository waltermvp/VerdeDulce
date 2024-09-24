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

import Markdown from "react-native-markdown-display";
import { OrderButton } from "../components/OrderButton";
import { Ad, Screen, Text } from "@/components";
import { ImageBackground } from "expo-image";
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
  const { style, strategy = MarketingStrategy.SingleDish } = props;
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
          style={$imageBackground}
        >
          <View style={$leftContainer}>
            <View
              style={{
                marginHorizontal: spacing.lg,
              }}
            >
              <View style={$qrContainer}>
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
                    $subTitleText,
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
        <View style={$contentContainer}>
          <Text
            text={translate("adScreen.add1Title")}
            preset="heading"
            style={$titleText}
          ></Text>
          <Text
            text={dish.name + "?"}
            preset="heading"
            style={$dishNameText}
          ></Text>
          <View style={$bottonContainer}>
            <Text
              tx="adScreen.add1Subtitle"
              preset="heading"
              style={[$headerText, { marginBottom: spacing.sm }]}
            />
            <Text text="verdedulce.com" preset="heading" style={$yellowColor} />
            <Text text="o" preset="heading" style={$headerText} />

            <View style={$ionicon}>
              <Ionicons
                name="logo-whatsapp"
                size={spacing.xxl}
                color={colors.palette.lightYellowGreen}
                style={{ marginRight: spacing.md }}
              />
              <Text text="0963021783" preset="heading" style={$yellowColor} />
            </View>
          </View>
          <View style={$footerContentContainer}>
            <Text
              tx="adScreen.footerContent"
              preset="heading"
              style={[$headerText, $footerContent]}
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

import menu from "../menu-es.json";
const $contentContainer: ViewStyle = {
  flex: 1,
  paddingTop: spacing.xxl * 1.25,
};

const $titleText: TextStyle = {
  color: colors.palette.neutral100,
  textAlign: "center",
  fontSize: spacing.xxl,
  lineHeight: spacing.xxxl + spacing.sm,
  fontFamily: typography.fonts.poppins.Poppins_400Regular,
};

const $dishNameText: TextStyle = {
  color: colors.palette.lightYellowGreen,
  textAlign: "center",
  fontSize: spacing.xxl,
  lineHeight: spacing.xxxl + spacing.sm,
  fontFamily: typography.fonts.poppins.Poppins_400Regular,
};

const $footerContent: TextStyle = {
  marginHorizontal: spacing.xl,
  marginTop: spacing.lg,
  textAlign: "center",
  fontSize: spacing.xxl,
  letterSpacing: spacing.xxs,
};

const $imageBackground: ViewStyle = {
  // backgroundColor: "red",
  // height: "150%",
  width: height * 2,
  // height: 1000,
  aspectRatio: 1,
  flex: 1,
};
const $leftContainer: ViewStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.25)",
  flex: 1,
  justifyContent: "flex-end",
};

const $subTitleText: TextStyle = {
  letterSpacing: spacing.xxxs,
  lineHeight: spacing.xxl,
  fontSize: spacing.lg,
  color: colors.palette.neutral100,
  textAlign: "center",
};

const $qrContainer: ViewStyle = {
  flex: 1,
  alignItems: "center",
  marginBottom: spacing.lg,
};

const $ionicon: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  marginTop: spacing.sm,
};

const $footerContentContainer: ViewStyle = {
  flex: 1,
  height: "100%",
  alignItems: "center",
};

const $bottonContainer: ViewStyle = {
  flex: 1,
  alignItems: "center",
  paddingTop: spacing.xxl,
};
