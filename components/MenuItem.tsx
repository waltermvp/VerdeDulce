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
  const { style, item, preset = "default", href = "/" } = props;

  const $styles = [$container, $presets[preset], style];

  const isBigScreen = useMediaQuery({ minWidth: 720 });
  const isMediumScreen = useMediaQuery({ minWidth: 1024 });
  const isLargeScreen = useMediaQuery({ minWidth: 1440 });

  let numberOfColumns;
  if (isLargeScreen) {
    numberOfColumns = 4;
  } else if (isMediumScreen) {
    numberOfColumns = 3;
  } else if (isBigScreen) {
    numberOfColumns = 2;
  } else {
    numberOfColumns = 1;
  }
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
              style={[
                $styles,
                {
                  minHeight: isLargeScreen ? 600 : 531 / 2,
                },
              ]}
            >
              <View style={{ flex: 1, alignItems: "center", minWidth: "95%" }}>
                <Image
                  style={{
                    // height: SIZE,
                    aspectRatio: 1,
                    width: "75%",
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
                    paddingHorizontal: spacing.md,
                    flex: 1,
                    // backgroundColor: "red",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      // backgroundColor: "purple",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Text
                      preset="subheading"
                      // numberOfLines={1}
                      style={{
                        fontFamily: typography.fonts.poppins.light,
                        fontSize: 18,
                        lineHeight: spacing.lg,
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
                  </View>

                  <View
                    style={{
                      alignSelf: "flex-start",
                      // justifyContent: "center",
                      flexDirection: "row",
                      borderWidth: 0.75,
                      borderRadius: 5,
                      marginTop: spacing.sm,
                      // backgroundColor: "brown",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: typography.fonts.poppins.light,
                        fontSize: 14,
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
  ] as StyleProp<TextStyle>,
};
