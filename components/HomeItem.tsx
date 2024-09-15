import * as React from "react";
import {
  Dimensions,
  Pressable,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { observer } from "mobx-react-lite";
import { colors, spacing, typography } from "../app/theme";
import { Text } from "./Text";
import { Image } from "expo-image";
import { Bullets } from "./Bullets";
import { Badge } from "react-native-paper";
import { imageCDNURL } from "../app/utils/linkbuilder";
import { OrderButton } from "./OrderButton";
import { translate } from "../app/i18n";

type Presets = keyof typeof $presets;

// const minHeight = 775;
export interface HomeItemProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
  item: any;
  showDelete?: boolean;
  onDelete?: () => void;
  onPress?: () => void;
  preset: Presets;
}

/**
 * Describe your component here
 */
export const HomeItem = observer(function MenuItem(props: HomeItemProps) {
  const {
    style,
    item,
    showDelete = false,
    onDelete,
    onPress,
    preset = "default",
  } = props;

  const $styles = [$container, $presets[preset], style];

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
    <View
      // style={[$styles, { backgroundColor: pressed ? colors.palette.darkTeal : undefined }]}
      style={[
        $styles,
        {
          // minHeight: isSmallScreen ? 500 : minHeight,
        },
      ]}
    >
      <View
        style={{
          flex: 1,
          // alignItems: "center",
        }}
      >
        <Image
          style={{
            aspectRatio: 1,
            width: "100%",
            borderRadius: 9,
          }}
          source={{ uri: url }}
          onError={(e) => console.log("MenuItem.tsx: Image onError: ", e)}
          // placeHolder={() => <PlaceholderMenu />}
          contentFit="cover"
          transition={1000}
        />
        <View
          style={
            {
              // backgroundColor: "red",
              // flex: 1,
              // marginTop: spacing.md,
            }
          }
        >
          <Text
            preset="subheading"
            style={{
              fontFamily: typography.fonts.poppins.light,
              marginTop: spacing.md,
            }}
          >
            {item.name}
          </Text>
          <View
            style={{
              justifyContent: "space-evenly",
              // backgroundColor: "blue",
              flex: 1,
            }}
          >
            <Text
              preset="default"
              style={{ fontFamily: typography.fonts.poppins.light }}
            >
              {item.description}
            </Text>
            {/* <Text
                  style={{ alignSelf: "center", padding: spacing.md, fontSize: spacing.xl }}
                  preset="bold"
                >
                  {dollars}
                </Text> */}
            {showStats ? (
              <Bullets
                style={{ marginTop: spacing.md }}
                items={[
                  { title: item.calories, subtitle: "CALORIES" },
                  { title: item.carbs, subtitle: "CARBS" },
                  { title: item.protein, subtitle: "PROTEIN" },
                  { title: item.fat, subtitle: "GRASA" },
                  // { title: "860", subtitle: "CALORIES" },
                ]}
              />
            ) : (
              <View
                style={{
                  alignSelf: "flex-start",
                  // justifyContent: "center",
                  flexDirection: "row",
                  borderWidth: 1.5,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    fontFamily: typography.fonts.poppins.light,
                    fontSize: 16,
                    // color: colors.palette.greenFont,
                    marginVertical: spacing.xxs,
                  }}
                >
                  {dollars} - {item.calories} CAL
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
    //     );
    //   }}
    // </Pressable>
  );
});

const $container: ViewStyle = {
  flex: 1,
  // width: width,
  // width: "100%",
  // backgroundColor: "pink",
  // alignItems: "center",
  // paddingVertical: spacing.md,
  borderRadius: 13,
  marginBottom: spacing.xl,
  // maxWidth: width / 2 + spacing.md,
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
];

const $presets = {
  default: $baseStyle,
  menu: [
    $baseStyle,
    {
      backgroundColor: "rgba(232, 220, 198, 1)",
    },
    $fontWeightStyles.bold,
    // {
    //   width: 395,
    //   height: 502,
    // },
    ,
  ] as StyleProp<TextStyle>,
};
