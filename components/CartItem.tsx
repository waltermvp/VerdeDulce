import React, { useEffect, useState } from "react";
import {
  StyleProp,
  TouchableOpacityProps,
  View,
  ViewStyle,
  FlatList,
  Pressable,
} from "react-native";
import { colors, spacing } from "../app/theme";
import { Text, TextProps } from "./Text";
import { useStores } from "@/app/models";
import { Ionicons } from "@expo/vector-icons";
import { useMediaQuery } from "react-responsive";

import { ActivityIndicator } from "react-native-paper";
import { MenuHeader } from "./MenuHeader";
import { generateClient } from "aws-amplify/api";
import { Schema } from "@/amplify/data/resource";
import {
  CartItem,
  CartItem as CartItemCell,
} from "@/amplify/data/addToCart/graphql/API";
import { Image, ImageStyle } from "expo-image";

type Presets = keyof typeof $containerPresets;

interface CartItemProps extends TouchableOpacityProps {
  style?: ViewStyle;
  cartItem: CartItem;
  onPress?: () => void;
}

/**
 * Carts are useful for displaying related information in a contained way.
 * If a ListItem displays content horizontally, a Cart can be used to display content vertically.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/components/Cart/}
 * @param {CartItemProps} props - The props for the `Cart` component.
 * @returns {JSX.Element} The rendered `Cart` component.
 */
export function CartItem(props: CartItemProps) {
  const { style, cartItem, onPress } = props;

  const $containerStyle = [$containerBase, style];
  console.log(cartItem, "caritem");
  return (
    <View style={[$containerStyle]}>
      <View style={{ flex: 1, backgroundColor: "blue" }}>
        <Image style={{}} source={{ uri: cartItem.url }} />
      </View>
      <View style={{ flex: 5, backgroundColor: "red" }}>
        <Text>{cartItem.name}</Text>
      </View>
      <View style={{ flex: 5, backgroundColor: "red" }}>
        <Text>{cartItem.item.to}</Text>
        <Text>{cartItem.name}</Text>
      </View>
    </View>
  );
}

const $containerBase: ViewStyle = {
  // flex: 1,
  flexDirection: "row",
  // alignSelf: "flex-end",
  height: 75,
  // height: "100%",
  // borderRadius: spacing.md,
  // padding: spacing.xs,
  // borderWidth: 1,
  // shadowColor: colors.palette.neutral800,
  // shadowOffset: { width: 0, height: 12 },
  // shadowOpacity: 0.08,
  // shadowRadius: 12.81,
  // elevation: 16,
  // minHeight: 96,"
};
const $image: ImageStyle = {
  aspectRatio: 1,
  width: 80,
  height: 80,
  resizeMode: "cover",
};

const $containerPresets = {
  default: [
    $containerBase,
    {
      backgroundColor: colors.palette.neutral100,
      borderColor: colors.palette.neutral300,
    },
  ] as StyleProp<ViewStyle>,

  reversed: [
    $containerBase,
    {
      backgroundColor: colors.palette.neutral800,
      borderColor: colors.palette.neutral500,
    },
  ] as StyleProp<ViewStyle>,
};
