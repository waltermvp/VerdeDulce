import { Text, type TextProps, StyleSheet, FlatList, View } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { string } from "mobx-state-tree/dist/internal";
import { imageCDNURL } from "@/app/utils/linkbuilder";
import { Image } from "expo-image";
import { colors } from "@/app/theme";
import { Link } from "expo-router";
import { Button } from "./Button";

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
      title: "WildRice",
      url: imageCDNURL(
        "menu/ingredients-png/S423_OLO_WildRice_800x800_mhyu2l.png"
      ),
    },
  ],
  ...rest
}: ThemedIngredientListProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  const renderIngredient = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: item.url }}
          style={{ width: 50, height: 50, flex: 1 }}
        />
        <Text style={[styles[type], { color }]}>{item.title}</Text>
      </View>
    );
  };

  return (
    <FlatList
      contentContainerStyle={[styles[type], { color }, style]}
      style={{ flex: 1 }}
      horizontal
      data={data}
      // {...rest}
      renderItem={renderIngredient}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});
