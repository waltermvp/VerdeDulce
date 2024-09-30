import * as React from "react";
import {
  Dimensions,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import { observer } from "mobx-react-lite";
import { colors, spacing, typography } from "../app/theme";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";

import Constants from "expo-constants";
import Markdown from "react-native-markdown-display";
import { OrderButton } from "../components/OrderButton";
import { Marker } from "react-native-svg";
import { Ad, ListItem, Screen, Text, RnPaperDialog } from "@/components";
import { Image, ImageBackground } from "expo-image";
import { QrCodeSvg } from "react-native-qr-svg";
import { imageCDNURL } from "./utils/linkbuilder";
import { Ionicons } from "@expo/vector-icons";
import ITEMS from "../menu-es.json";
import ITEMS_LEFT from "../menu-es-left.json";
import ITEMS_RIGHT from "../menu-es-right.json";
import { transformDataForSectionList } from "./models/ItemStore";
import { Divider } from "react-native-paper";
import {
  useFocusEffect,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";
import { Input } from "@/components/Input";
import { generateClient } from "aws-amplify/api";
import { Schema } from "@/amplify/data/resource";

import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { translate } from "./i18n";
import { auth } from "@/amplify/auth/resource";
type AlertParams = {
  visible: boolean;
  title: string;
  message: string;
  buttons: { text: string; onPress: () => void }[];
};

Amplify.configure({
  ...outputs,
  Analytics: {
    Pinpoint: {
      appId: outputs.analytics.amazon_pinpoint.app_id,
      region: outputs.analytics.amazon_pinpoint.aws_region,
    },
  },
});

const darkMode = false;
const height = Dimensions.get("window").height;
const EXPO_PUBLIC_MARKETING_STRATEGY = "PDF";
const SIZE = 222;
const CONTENT = "https://wa.me/c/593963021783";
const FONT_COLOR = colors.palette.lightYellowGreen;
const ICON_SIZE = 75;

export interface CreateItemProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Function to handle the press event of the order button.
   *
   * @callback onPress
   * @returns {void}
   */
  onPress?: () => void;
}

/**
 * @file createItem.tsx
 * @description This screen allows authenticated admin users to create a new item by providing details such as name, description, price, and image URL.
 *
 * @component
 * @param {CreateItemProps} props - The properties passed to the CreateItem component.
 * @param {object} props.style - Custom styles to be applied to the container.
 * @param {function} props.onPress - Function to be called when the create item button is pressed.
 *
 * @returns {JSX.Element} The rendered CreateItem screen component.
 *
 * @example
 * <CreateItem style={customStyle} onPress={handlePress} />
 *
 * @remarks
 * This component uses the `useLocalSearchParams` hook to retrieve the type of item being created.
 * It also utilizes the `useFocusEffect` hook to set the navigation options, including a header button to trigger the item creation function.
 *
 * @function createItemFunction
 * @description An asynchronous function that handles the creation of a new item by calling the backend API with the provided item details.
 *
 * @hook useFocusEffect
 * @description Sets the navigation options to include a header button for creating the item.
 *
 * @hook useLocalSearchParams
 * @description Retrieves the type of item being created from the local search parameters.
 *
 * @hook useState
 * @description Manages the state for item name, description, price, and image URL.
 *
 * @requires generateClient
 * @requires Schema
 * @requires useNavigation
 * @requires Pressable
 * @requires Ionicons
 * @requires Screen
 * @requires View
 * @requires Text
 * @requires Input
 * @requires OrderButton
 * @requires colors
 * @requires spacing
 * @requires darkMode
 */
export default observer(function CreateItem(props: CreateItemProps) {
  const { style, onPress } = props;
  const $styles = [$container, style];
  const { type } = useLocalSearchParams<{ type: string }>();

  const [itemName, setItemName] = React.useState("");
  const [itemDescription, setItemDescription] = React.useState("");
  const [itemPrice, setItemPrice] = React.useState(0);
  const [itemurl, setSetItemurl] = React.useState("");
  const [itemImage, setItemImage] = React.useState("");
  const [sortIndex, setSortIndex] = React.useState(0);

  const navigation = useNavigation();

  // const [alertVisible, setAlertVisible] = React.useState(false);

  const [alert, setAlert] = React.useState<AlertParams>({
    visible: false,
    title: "",
    message: "",
    buttons: [],
  });

  const createItemFunction = async () => {
    try {
      const client = generateClient<Schema>();
      const createItemParams = {
        name: itemName,
        description: itemDescription,
        price: itemPrice,
        url: itemurl,
        sortIndex: sortIndex,
      };
      await client.models.Item.create(createItemParams, {
        authMode: "userPool",
      });
      setAlert({
        visible: true,
        title: translate("createScreen.saveConfirm"),
        message: translate("createScreen.saveConfirm"),
        buttons: [],
      });

      // const lazy = await result.data?.ingredients();
    } catch (error) {
      console.log(JSON.stringify(error, null, 2), "error");
      setAlert({
        visible: true,
        title: translate("createScreen.errorTitle"),
        message: JSON.stringify(error, null, 2),
        buttons: [
          {
            text: translate("createScreen.ok"),
            onPress: () => {
              setAlert({ visible: false, title: "", message: "", buttons: [] });
            },
          },
        ],
      });
    }
  };

  useFocusEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={createItemFunction}>
          <Ionicons
            style={{ marginRight: spacing.md }}
            name="add"
            size={24}
            color={colors.palette.darkKale}
          />
        </Pressable>
      ),
    });
  });

  console.log(type, "type");
  return (
    <Authenticator.Provider>
      <Authenticator>
        <Screen style={$styles} preset="fixed">
          <RnPaperDialog
            title={alert.title}
            subtitle={alert.title}
            visible={alert.visible}
            onDismiss={() => {
              // setAlertVisible(false);
            }}
            buttons={alert.buttons}
          />
          <View
            style={{
              flex: 1,
              height,
              margin: spacing.md,
              backgroundColor: darkMode
                ? colors.palette.greenFont
                : colors.palette.lightBackground,
            }}
          >
            <Input
              label="Item Name"
              value={itemName}
              onChangeText={setItemName}
              style={{ marginBottom: spacing.md }}
            />
            <Input
              label="Item Description"
              value={itemDescription}
              onChangeText={setItemDescription}
              style={{ marginBottom: spacing.md }}
            />
            <Input
              label="Item Price"
              value={itemPrice.toString()}
              onChangeText={setItemPrice}
              keyboardType="numeric"
              style={{ marginBottom: spacing.md }}
            />
            <Input
              label="Item Image URL"
              value={itemImage}
              onChangeText={setItemImage}
              style={{ marginBottom: spacing.md }}
            />
            <Input
              label="Sort Index"
              value={sortIndex.toString()}
              onChangeText={setSortIndex}
              keyboardType="numeric"
              style={{ marginBottom: spacing.md }}
            />
            <OrderButton text="Create Item" onPress={createItemFunction} />
          </View>
        </Screen>
      </Authenticator>
    </Authenticator.Provider>
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
    alignItems: "center",
  },
});
const $image = {
  height: "100%",
  aspectRatio: 1,
  // width: 75,
  // alignSelf: "center",
};
/*
¡Compra 9 ensaladas y la 10ª es gratis!

En Verde Dulce, queremos premiar tu fidelidad. Por cada ensalada que compres, acumularás puntos automáticamente en tu cuenta. ¡Al llegar a 9 ensaladas, la décima es completamente gratis!

¿Cómo funciona?

    1.    Compra tu ensalada favorita: Cada vez que realices una compra, los puntos se añadirán a tu cuenta.
    2.    Acumula puntos: Por cada ensalada que compres, obtendrás 1 punto.
    3.    Lleva la 10ª ensalada gratis: Cuando hayas acumulado 9 puntos, recibirás una ensalada gratis en tu próxima compra.
    4.    Revisa tu progreso: Inicia sesión en tu cuenta en nuestro sitio web y revisa cuántos puntos llevas acumulados.

Haz tu pedido ahora!

Visítanos en VerdeDulce.com, pide tu ensalada y comienza a acumular tus puntos hoy mismo.

*/

function OrdenaYa() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: spacing.xxl,
      }}
    >
      <Text
        text="Ordena ahora en"
        preset="heading"
        style={[$headerText, { marginBottom: spacing.sm }]}
      />
      <Text text="verdedulce.com" preset="heading" style={$yellowColor} />
      <Text text="o" preset="heading" style={$headerText} />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: spacing.sm,
        }}
      >
        <Ionicons
          name="logo-whatsapp"
          size={spacing.xxl}
          color={colors.palette.lightYellowGreen}
          style={{ marginRight: spacing.md }}
        />
        <Text text="0963021783" preset="heading" style={$yellowColor} />
      </View>
    </View>
  );
}
