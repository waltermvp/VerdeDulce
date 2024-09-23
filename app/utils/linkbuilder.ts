import amplifyOutputs from "../../amplify_outputs.json";
import { colors, typography } from "../../app/theme";
import { ImageStyle } from "expo-image";
import { Linking, StyleProp, type TextStyle } from "react-native";
import { translate } from "../i18n";
import Config from "../config";
//TODO: review presets
const cloudfrontCDN = "https://dta56yysqj9ke.cloudfront.net";

const $sizeStyles = {
  xxl: { width: 200, height: 200 } satisfies ImageStyle,
  xl: { width: 200, height: 200 } satisfies ImageStyle,
  lg: { width: 200, height: 200 } satisfies ImageStyle,
  md: { width: 200, height: 200 } satisfies ImageStyle,
  sm: { width: 200, height: 200 } satisfies ImageStyle,
  xs: { width: 200, height: 200 } satisfies ImageStyle,
  xxs: { width: 200, height: 200 } satisfies ImageStyle,
};

const $fontWeightStyles = Object.entries(typography.primary).reduce(
  (acc, [weight, fontFamily]) => {
    return { ...acc, [weight]: { fontFamily } };
  },
  {}
) as Record<Weights, TextStyle>;

const $baseStyle: StyleProp<ImageStyle> = [
  $sizeStyles.sm,
  $fontWeightStyles.normal,
  { color: colors.text },
];

const $presets = {
  default: $baseStyle,
  defaultLight: [
    $baseStyle,
    { color: colors.palette.neutral200 } as ImageStyle,
  ] as StyleProp<ImageStyle>,

  thumbnail: [$baseStyle, $fontWeightStyles.bold] as StyleProp<ImageStyle>,
  tv: [$baseStyle, { height: 16, width: 9 }] as StyleProp<ImageStyle>,
  og: [$baseStyle] as StyleProp<ImageStyle>,
  none: [],
  // heading: [$baseStyle, $sizeStyles.xxl, $fontWeightStyles.bold] as StyleProp<ImageStyle>,

  // subheading: [$baseStyle, $sizeStyles.lg, $fontWeightStyles.medium] as StyleProp<ImageStyle>,

  // formLabel: [$baseStyle, $fontWeightStyles.medium] as StyleProp<ImageStyle>,

  // formHelper: [$baseStyle, $sizeStyles.sm, $fontWeightStyles.normal] as StyleProp<ImageStyle>,
  // verySmall: [$baseStyle, $sizeStyles.xs, $fontWeightStyles.normal] as StyleProp<ImageStyle>,
};

type ThumbnailPresets = keyof typeof $presets;

export const imageCDNURL = (
  thumbnailURL: string,
  preset = "thumbnail" as ThumbnailPresets,
  moderated = false,
  contentFit = "cover",
  rotation = 0 //(0-360)
) => {
  let width = 200;
  let height = 200;
  switch (preset) {
    case "thumbnail":
      width = 200;
      height = 200;
      break;
    case "tv":
      width = 16 * 100;
      height = 9 * 100;
      break;
    case "og":
      width = 300;
      height = 200;
      break;
    case "none":
      break;
    default:
      width = 200;
      height = 200;
      break;
  }

  let variables = {
    bucket: "amplify-d1ptvrvloahojd-ma-dulcedrivebucketa0ac03f2-yskoeldyixir", //amplifyOutputs.storage.bucket_name,
    key: thumbnailURL,
    edits: {
      contentModeration: moderated,
      resize: {
        width,
        height,
        //  cover, contain, fill, inside, and outside
        fit: contentFit,
      },
      rotate: Number(rotation),
    },
  };

  if (preset == "none") {
    delete variables?.edits?.resize;
  }

  const imageRequest = JSON.stringify(variables);
  const encodedObject = btoa(imageRequest);
  const url = `${cloudfrontCDN}/${encodedObject}`;

  return url;
};

export const moderatedURL = (urlString: string) => {
  const imageRequest = JSON.stringify({
    bucket: amplifyOutputs.storage.bucket_name,
    key: urlString,
    edits: { contentModeration: true },
  });
  const encodedObject = btoa(imageRequest);
  const url = `${cloudfrontCDN}/${encodedObject}`;
  return url;
};

export const linkToWhatsApp = () => {
  // navigation.navigate("OrderNav", { screen: "Home" })
  // return
  const phoneNumber = "+593963021783"; // Replace with the actual phone number

  const message = translate("menuScreen.orderMessage"); // Replace with the actual message
  const url = `whatsapp://send?text=${encodeURIComponent(
    message
  )}&phone=${encodeURIComponent(phoneNumber)}`;
  Linking.openURL(url).catch((err) =>
    console.error("Failed to open WhatsApp", err)
  );
};
export const linkToWhatsAppCatalog = () => {
  Linking.openURL(Config.WHATSAPP_CATALOG_URL);
};
