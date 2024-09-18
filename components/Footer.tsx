import * as React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { observer } from "mobx-react-lite";
import { colors, spacing, typography } from "../app/theme";
import { Text } from "./Text";
import { Newsletter } from "./Newsletter";
import { Bullet } from "./Bullet";
import { QrCodeSvg } from "react-native-qr-svg";
import { Image } from "expo-image";
import { imageCDNURL } from "../app/utils/linkbuilder";
import { useMediaQuery } from "react-responsive";
import { Marquee } from "./Marquee";
import { Href, Link } from "expo-router";
import Config from "@/app/config";

const strategy = Config.MARKETING_STRATEGY;
const URL = Config.WHATSAPP_CATALOG_URL as Href;

const SIZE = 125;
const SIZE_SMALL = SIZE / 2;
const ICON_SIZE = SIZE / 4.75;
const ICON_SIZE_SMALL = ICON_SIZE / 2;

export interface FooterProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
}

/**
 * Describe your component here
 */
export const Footer = observer(function Footer(props: FooterProps) {
  const { style } = props;
  const $styles = [$container, style];
  const isSmallScreen = useMediaQuery({ query: "(max-width: 430px)" });
  const [hovering, setHovering] = React.useState(false);
  const whatsappStrategy = strategy === "whatsapp";

  return (
    <View style={$styles}>
      <View style={$newsletterContainer}>
        <Newsletter />
      </View>
      <View style={{ backgroundColor: colors.palette.footerGreen }}>
        <Link href={!whatsappStrategy ? URL : "/(tabs)"} asChild>
          <Pressable
            onHoverIn={() => setHovering(true)}
            onHoverOut={() => setHovering(false)}
          >
            <View style={$marquee}>
              <Marquee duration={20000} reverse>
                <Text
                  preset="heading"
                  style={hovering ? $marqueeTextUL : $marqueeText}
                >
                  Presentamos el Bistec con Ajo Caramelizado. Pruébalo hoy en
                  uno de nuestros tres nuevos platos del menú.​
                </Text>
              </Marquee>
            </View>
          </Pressable>
        </Link>
        <View
          style={{
            alignItems: "flex-start",
            padding: spacing.md,
          }}
        >
          <Bullet
            bullets={[
              {
                title: "Social",
                links: [
                  {
                    title: "Facebook",
                    url: "https://www.facebook.com/profile.php?id=61564202236840",
                    icon: "logo-facebook",
                  },
                  {
                    title: "Instagram",
                    url: "https://www.instagram.com/verdedulce_",
                    icon: "logo-instagram",
                  },
                ],
              },
            ]}
          />
          {/* add copyright information */}
          <View style={{ flex: 1 }}>
            <Link href={URL} asChild>
              <Pressable>
                <QrCodeSvg
                  style={
                    isSmallScreen
                      ? { padding: spacing.xs, alignSelf: "flex-end" }
                      : styles.qr
                  }
                  value={URL}
                  frameSize={isSmallScreen ? SIZE_SMALL : SIZE}
                  contentCells={5}
                  content={
                    <Image
                      style={{
                        width: isSmallScreen ? ICON_SIZE_SMALL : ICON_SIZE,
                        height: isSmallScreen ? ICON_SIZE_SMALL : ICON_SIZE,
                      }}
                      source={{ uri: imageCDNURL("VerdeDulce_logo.png") }}
                    />
                  }
                  backgroundColor={colors.palette.greenFont}
                  dotColor="#ffff"
                  contentStyle={styles.box}
                />
                <Text style={$reserved}>&copy; 2024 {Config.APP_NAME}</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
});

const $container: ViewStyle = {
  justifyContent: "center",
  // alignItems: "center",
  // flex: 1,
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
    alignSelf: "flex-end",
  },
});

const $reserved: TextStyle = {
  fontFamily: typography.fonts.poppins.light,
  alignSelf: "flex-end",
  paddingTop: spacing.sm,
  textAlign: "right",
};
const $newsletterContainer: ViewStyle = {
  flex: 1,
  borderTopWidth: 1,
  // borderBottomWidth: 1,
  borderColor: colors.palette.greenFont,
  padding: spacing.xxxl,
};
const $marquee: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  paddingVertical: spacing.lg,
  // borderColor: "red",
  // borderWidth: 2,
};
const $marqueeText: TextStyle = {
  fontSize: spacing.xl + spacing.sm,
  fontFamily: typography.fonts.poppins.normal,
  letterSpacing: -spacing.xxxs,
  // Margin whitsepace
  marginRight: spacing.xxl,
  color: colors.palette.darkKale,
};
const $marqueeTextUL: TextStyle = {
  // flex: 1,
  fontSize: spacing.xl + spacing.sm,
  fontFamily: typography.fonts.poppins.normal,
  letterSpacing: -spacing.xxxs,
  // Margin whitsepace
  marginRight: spacing.xxl,
  color: colors.palette.darkKale,
  textDecorationLine: "underline",
};
