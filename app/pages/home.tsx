import React, { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import {
  Dimensions,
  ViewStyle,
  View,
  SectionList,
  FlatList,
} from "react-native";
import {
  Footer,
  MenuHeader,
  HomeItem,
  OrderButton,
  Screen,
  Text,
} from "@/components";

import { colors, spacing, typography } from "../theme";
import { useMediaQuery } from "react-responsive";
import { useFocusEffect } from "@react-navigation/native";
import { Linking } from "react-native"; // Import Linking module
import { useNavigation } from "@react-navigation/native";
import Config from "../config";
import { transformData } from "../models/ItemStore";
import { Amplify } from "aws-amplify";
import { record } from "aws-amplify/analytics";
import outputs from "../../amplify_outputs.json";
import { Href, Link } from "expo-router";
const strategy = Config.MARKETING_STRATEGY;
console.log("strategy", strategy);
//TODO: - move to env fix env
const URL = (Config.WHATSAPP_CATALOG_URL as Href)
  ? (Config.WHATSAPP_CATALOG_URL as Href)
  : ("https://wa.me/c/593963021783" as Href);
console.log("process.env", process.env);
console.log("process.env", Config);
// TODO: - 768 contains two columns anything larger is three
Amplify.configure({
  ...Amplify.getConfig(),
  Analytics: {
    Pinpoint: {
      appId: outputs.analytics.amazon_pinpoint.app_id,
      region: outputs.analytics.amazon_pinpoint.aws_region,
    },
  },
});

const sweetgreenMenu = require("../../menu-es.json");

export const MenuScreen: FC = observer(function MenuScreen() {
  const [items, setItems] = useState(
    sweetgreenMenu.filter((item: { hidden: boolean }) => item.hidden !== true)
  );

  const navigation = useNavigation();
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 480px)" });
  const numColumns = isBigScreen ? 3 : isSmallScreen ? 1 : 2;

  //TODO: localize

  const whatsappStrategy = strategy === "whatsapp";
  console.log("whatsappStrategy", whatsappStrategy);
  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerRight: () => {
          return (
            <Link href={whatsappStrategy ? URL : "/(tabs)"} asChild>
              <OrderButton
                tx={
                  whatsappStrategy
                    ? "landingScreen.order"
                    : "landingScreen.order"
                }
                icon="arrow-forward"
                style={{ marginRight: spacing.sm }}
              />
            </Link>
          );
        },
      });
    }, [navigation])
  );
  const renderSection = ({ item }) => {
    return (
      <FlatList
        style={
          {
            // flex: 1,
            // borderWidth: 2,
            // backgroundColor: "brown",
            //MARK: Needed for 1 column state
            // alignItems: "center",
          }
        }
        contentContainerStyle={
          {
            // flex: 1,
            // width: "100%",
            // padding: spacing.md,
            // paddingTop: 100,
          }
        }
        columnWrapperStyle={
          numColumns > 1 && { rowGap: 50, columnGap: 50, gap: 50 }
        }
        key={numColumns}
        data={item.list}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <HomeItem
            preset="default"
            item={item}
            // showDelete={true}
            onPress={async () => {
              record({
                name: "orderNow",
                attributes: { name: item.name },
              });

              const url = item.itemURL;
              await Linking.openURL(url).catch((err) =>
                console.error("Failed to open WhatsApp", err)
              );
              // e.prevent
            }}
            onDelete={() => {
              // setItemIDToDelete(item.id)
              // showDialog()
            }}
          />
        )}
        keyExtractor={keyExtractor}
      />
    );
  };
  const keyExtractor = (item) => {
    return item.name;
  };

  const renderSectionTitle = ({ section }: { section: any }) => (
    <View
      style={{
        marginBottom: spacing.md,
      }}
    >
      <Text
        style={{
          fontSize: spacing.lg,
          fontFamily: typography.fonts.poppins.Poppins_200ExtraLight_Italic,
          fontWeight: "bold",
        }}
        preset="subheading"
      >
        {section.title.toUpperCase()}
      </Text>
    </View>
  );

  return (
    <Screen style={$root} preset="scroll">
      <MenuHeader />
      <SectionList
        stickySectionHeadersEnabled={true}
        contentContainerStyle={{
          marginHorizontal: numColumns > 1 ? spacing.xl : spacing.md,
          justifyContent: "center",
        }}
        sections={transformData(items)}
        renderItem={renderSection}
        renderSectionHeader={renderSectionTitle}
      />

      <Footer />
    </Screen>
  );
});

const $root: ViewStyle = {
  backgroundColor: colors.palette.lightBackground,
};
