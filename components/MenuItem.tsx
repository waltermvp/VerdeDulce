import * as React from "react";
import { Pressable, StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { observer } from "mobx-react-lite";
import { colors, spacing, typography } from "../app/theme";
import { Text } from "./Text";
import { Image } from "expo-image";
import { Bullets } from "./Bullets";
import { Badge } from "react-native-paper";
import { imageCDNURL } from "../app/utils/linkbuilder";
import { OrderButton } from "./OrderButton";
import { useMediaQuery } from "react-responsive";
import { translate } from "../app/i18n";
import { Href, Link } from "expo-router";

type Presets = keyof typeof $presets;

const minHeight = 775;
export interface MenuItemProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
  item: any;
  showDelete?: boolean;
  onDelete?: () => void;
  onPress?: () => void;
  preset: Presets;
  href: Href;
}

/**
 * Describe your component here
 */
export const MenuItem = observer(function MenuItem(props: MenuItemProps) {
  const {
    style,
    item,
    showDelete = false,
    onDelete,
    onPress,
    preset = "default",
    href = "/",
  } = props;

  const $styles = [$container, $presets[preset], style];

  const isSmallScreen = useMediaQuery({ query: "(max-width: 430px)" });
  const url = imageCDNURL(item.url, "none");

  const activated = item.activated;
  const number = item.price;
  const dollars = (number / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const CTA = activated
    ? translate("landingScreen.order") + " " + dollars
    : translate("landingScreen.comingSoon") + dollars;

  const showStats = preset !== "menu" ? true : false;
  return (
    <Link href={href} asChild push>
      <Pressable
        style={({ pressed }) => {
          return {
            backgroundColor: pressed ? colors.palette.neutral400 : undefined,
            opacity: activated ? 1 : 0.5,
          };
        }}
      >
        {({}) => {
          return (
            <View
              // style={[$styles, { backgroundColor: pressed ? colors.palette.darkTeal : undefined }]
              style={[
                $styles,
                {
                  minHeight: isSmallScreen ? 500 : minHeight,
                },
              ]}
            >
              <View style={{ flex: 1, alignItems: "center" }}>
                <Image
                  style={{
                    // height: SIZE,
                    aspectRatio: 1,
                    width: "70%",
                    borderRadius: 13,
                    // borderColor: "red",  borderWidth: 2
                  }}
                  source={{ uri: url }}
                  onError={(e) =>
                    console.log("MenuItem.tsx: Image onError: ", e)
                  }
                  // placeHolder={() => <PlaceholderMenu />}
                  contentFit="cover"
                  transition={1000}
                />
                <View
                  style={{
                    marginTop: spacing.md,
                    paddingHorizontal: spacing.xxl,
                    flex: 1,
                  }}
                >
                  <Text
                    preset="subheading"
                    // numberOfLines={1}
                    style={{
                      fontFamily: typography.fonts.poppins.light,
                      fontSize: 18,
                      // NUMBER,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    preset="default"
                    style={{
                      fontFamily: typography.fonts.poppins.light,
                      marginTop: spacing.sm,
                      fontSize: 14,
                      // minHeight: spacing.xxl * 1.75,
                      // minHeight: 525 / 2.5,
                    }}
                  >
                    {item.description}
                  </Text>
                  <View
                    style={{
                      alignSelf: "flex-start",
                      // justifyContent: "center",
                      flexDirection: "row",
                      borderWidth: 1.5,
                      borderRadius: 5,
                      marginTop: spacing.sm,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: typography.fonts.poppins.light,
                        fontSize: 16,
                        padding: spacing.xxs,
                        // color: colors.palette.greenFont,
                      }}
                    >
                      {dollars} - {item.calories} CAL
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      </Pressable>
    </Link>
  );
});

const $container: ViewStyle = {
  flex: 1,
  alignItems: "center",
  paddingVertical: spacing.lg,
  // paddingHorizontal: spacing.xxl,
  borderRadius: 13,
  //TODO: decresase hieight for smaller breakpoints
  // margin:200
  // backgroundColor: "red",
};

const $fontWeightStyles = Object.entries(typography.primary).reduce(
  (acc, [weight, fontFamily]) => {
    return { ...acc, [weight]: { fontFamily } };
  },
  {}
) as Record<Weights, TextStyle>;

const $sizeStyles = {
  xxxl: { fontSize: 52, lineHeight: 52 } satisfies TextStyle,
  xxl: { fontSize: 36, lineHeight: 44 } satisfies TextStyle,
  xl: { fontSize: 24, lineHeight: 34 } satisfies TextStyle,
  lg: { fontSize: 20, lineHeight: 32 } satisfies TextStyle,
  md: { fontSize: 18, lineHeight: 26 } satisfies TextStyle,
  sm: { fontSize: 16, lineHeight: 24 } satisfies TextStyle,
  xs: { fontSize: 14, lineHeight: 21 } satisfies TextStyle,
  xxs: { fontSize: 12, lineHeight: 18 } satisfies TextStyle,
};

const $baseStyle: StyleProp<ViewStyle> = [
  // $sizeStyles.sm,
  // $fontWeightStyles.normal,
  // backgr

  {
    backgroundColor: "transparent",
    flex: 1,
    // color: colors.text,
    // lineHeight: 18,
    // fontFamily: typography.fonts.poppins.normal,
  },
];

const $presets = {
  default: $baseStyle,
  menu: [
    $baseStyle,
    { backgroundColor: "rgba(232, 220, 198, 1)" },
    $fontWeightStyles.bold,
  ] as StyleProp<TextStyle>,
};
