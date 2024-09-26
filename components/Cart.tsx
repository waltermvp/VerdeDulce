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
import { ActivityIndicator, Divider } from "react-native-paper";
import { MenuHeader } from "./MenuHeader";
import { generateClient } from "aws-amplify/api";
import { Schema } from "@/amplify/data/resource";
import { ListItem } from "./ListItem";
import { Image, ImageStyle } from "expo-image";

type Presets = keyof typeof $containerPresets;

interface CartProps extends TouchableOpacityProps {
  /**
   * One of the different types of text presets.
   */
  preset?: Presets;
  /**
   * How the content should be aligned vertically. This is especially (but not exclusively) useful
   * when the cart is a fixed height but the content is dynamic.
   *
   * `top` (default) - aligns all content to the top.
   * `center` - aligns all content to the center.
   * `space-between` - spreads out the content evenly.
   * `force-footer-bottom` - aligns all content to the top, but forces the footer to the bottom.
   */
  /**
   * The content text to display if not using `contentTx`.
   */
  content?: TextProps["text"];
  /**
   * Content text which is looked up via i18n.
   */
  contentTx?: TextProps["tx"];

  /**
   * CartId
   */

  cartId: string;
  /**
   * Funciton to call to dismiss modal cart
   * @returns
   */
  dismiss: () => void;
}

/**
 * Carts are useful for displaying related information in a contained way.
 * If a ListItem displays content horizontally, a Cart can be used to display content vertically.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/components/Cart/}
 * @param {CartProps} props - The props for the `Cart` component.
 * @returns {JSX.Element} The rendered `Cart` component.
 */
export function Cart(props: CartProps) {
  const { style: $containerStyleOverride, dismiss, cartID } = props;
  const {
    // cartStore: {
    //   cartId,
    //   cartItems,
    //   totalAmount,
    //   isLoading,
    //   errorMessage,
    //   fetchCart,
    // },
    authenticationStore: { subjectID },
  } = useStores();
  const [cartItems, setCartItems] = useState<Schema["CartItem"][]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const fullscreen = useMediaQuery({ minWidth: 720 });
  const client = generateClient<Schema>();

  useEffect(() => {
    if (!subjectID) {
      console.log("no subjectID");
      return;
    }

    const sub = client.models.CartItem.observeQuery({
      filter: { userId: { eq: subjectID } },
      authMode: subjectID ? "userPool" : "apiKey",
      // selectionSet: ["item.*"],
    }).subscribe({
      next: ({ items, isSynced }) => {
        setIsLoading(!isSynced);

        if (isSynced) {
          console.log("items!!", items);
          setCartItems(items);
        }
      },
    });
    return () => {
      sub.unsubscribe();
    };
  }, []);

  const $containerStyle = [$containerBase, $containerStyleOverride];

  const renderCartItem = ({ item }) => {
    // console.log("itemss, ", item);

    return (
      <ListItem
        LeftComponent={<Image style={$image} source={{ uri: item.url }} />}
        RightComponent={
          <View style={{ backgroundColor: "blue", flex: 1 }}>
            {/* <Text>{item.name}</Text>
            <Text>{item}</Text> */}
          </View>
        }
      />
    );
  };

  function CartHeader() {
    return (
      <View
        style={{
          backgroundColor: "red",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: spacing.md,
        }}
      >
        <Pressable onPress={dismiss}>
          <Ionicons name="arrow-back-outline" size={44} />
        </Pressable>
        <Pressable onPress={dismiss}>
          <Ionicons name="close-outline" size={44} />
        </Pressable>
      </View>
    );
  }

  console.log("isLoading", isLoading);
  if (isLoading) {
    return (
      <View style={[$containerStyle, {}]}>
        <MenuHeader />
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View
      style={[$containerStyle, { width: !fullscreen ? "100%" : undefined }]}
    >
      <CartHeader />
      <FlatList
        style={{ borderColor: "red", borderWidth: 1 }}
        ListHeaderComponent={<Text>Your Order</Text>}
        data={cartItems}
        renderItem={renderCartItem}
        ItemSeparatorComponent={Divider}
      />
    </View>
  );
}

const $containerBase: ViewStyle = {
  // flex: 1,
  // flexDirection: "column",
  alignSelf: "flex-end",
  height: "100%",
  // borderRadius: spacing.md,
  padding: spacing.xs,
  borderWidth: 1,
  shadowColor: colors.palette.neutral800,
  shadowOffset: { width: 0, height: 12 },
  shadowOpacity: 0.08,
  shadowRadius: 12.81,
  elevation: 16,
  minHeight: 96,
  backgroundColor: colors.palette.lightBackground,
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
const $image: ImageStyle = {
  aspectRatio: 1,
  width: 80,
  height: 80,
  resizeMode: "cover",
};
