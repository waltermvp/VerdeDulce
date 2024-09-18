import {
  Text,
  type TextProps,
  StyleSheet,
  FlatList,
  View,
  ViewStyle,
  TextStyle,
  Dimensions,
} from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { string } from "mobx-state-tree/dist/internal";
import { imageCDNURL } from "@/app/utils/linkbuilder";
import { Image } from "expo-image";
import { colors, spacing } from "@/app/theme";
import { Link } from "expo-router";
import { Button } from "./Button";
const { width } = Dimensions.get("window");
export type ThemedIngredientListProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  data: { title: string; url: string }[];
};

export function ThemedIngredientList({
  style,
  lightColor,
  darkColor,
  type = "default",
  data = [
    {
      title: "Shredded Kale",
      url: imageCDNURL(
        "menu/ingredients-png/S423_OLO_ShreddedKale_800x800_cspcol.png"
      ),
    },
    {
      title: "Wild Rice",
      url: imageCDNURL(
        "menu/ingredients-png/S423_OLO_WildRice_800x800_mhyu2l.png"
      ),
    },
    {
      title: "Roasted Sweet Potato",
      url: imageCDNURL(
        "menu/ingredients-png/S423_OLO_RoastedSweetPotatoes_800x800_lnumy5.png"
      ),
    },
  ],
  ...rest
}: ThemedIngredientListProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const styles = [$container, style];
  const renderIngredient = ({ item }) => {
    return (
      <View style={$ingredient}>
        <Text style={[$text, { color }]}>{item.title}</Text>

        <Image source={{ uri: item.url }} style={$image} />
      </View>
    );
  };

  return (
    <FlatList
      // contentContainerStyle={[styles[type], { color }, style]}
      contentContainerStyle={styles}
      columnWrapperStyle={$columnContainer}
      numColumns={3}
      // horizontal
      data={data}
      // {...rest}
      renderItem={renderIngredient}
    />
  );
}

const editing = false;
// outline-color rgb(189, 189, 177)
// outline-offset 3px
const $container: ViewStyle = {
  flex: 1,
  borderRadius: spacing.md,
  alignItems: "center",

  rowGap: spacing.sm,
};
const $ingredient: ViewStyle = {
  flex: 1,
  backgroundColor: editing ? "rgb(216, 229, 214)" : "rgb(232, 220, 198)",
  borderRadius: spacing.md,
  alignItems: "center",
  width: width * 0.27,
  height: 130,
  justifyContent: "space-between",
};
const $text: TextStyle = {
  textAlign: "center",
  top: spacing.xs,
  lineHeight: 14,
  flex: 1,
  // backgroundColor: "red",
};
const $columnContainer: ViewStyle = {
  gap: spacing.sm,
};
const $image: ViewStyle = {
  flex: 3,
  margin: spacing.xs,
  aspectRatio: 1,
  width: "90%",
  // backgroundColor: "blue",
};
