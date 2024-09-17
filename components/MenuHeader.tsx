import * as React from "react";
import { Pressable, StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { observer } from "mobx-react-lite";
import { colors, spacing, typography } from "../app/theme";
import { Text } from "./Text";
import { Image } from "expo-image";
import { Link } from "expo-router";
// import TypeWriterEffect from "react-native-typewriter-effect"

const HEIGHT = 275;
export interface MenuHeaderProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

/**
 * Describe your component here
 */
export const MenuHeader = observer(function MenuHeader(props: MenuHeaderProps) {
  const { style, onPress } = props;
  const $styles = [$container, style];
  const showImage = false;
  return (
    <Link href={"/"} asChild>
      <Pressable>
        <View style={$styles}>
          {/* <View style={{ flexDirection: "row" }}> */}
          {/* {showImage && (
          <View style={{ flex: 1, height: HEIGHT }}>
            <Image
              style={{ flex: 1 }}
              source={require("../../assets/images/VerdeDulce_logo.svg")}
            />
          </View>
        )} */}
          {/* <View style={{ flex: 1, justifyContent: "center" }}> */}
          <Text
            tx="landingScreen.prompt"
            preset="headingLG"
            style={{
              textAlign: "center",
              paddingVertical: spacing.xxl,
              maxWidth: "75%",
              alignSelf: "center",
              fontSize: 40,
              lineHeight: 44,
              fontFamily: typography.fonts.poppins.Poppins_300Light,
              fontWeight: "thin",
              // fontStyle: "poppins",
              // paddingBottom: -20,
              // marginBottom: -20,
            }}
          ></Text>
          {/* <TypeWriterEffect
            style={typography.primary}
            content="Verde Dulce! Comida de alta sostenible, y de alta calidad."
          /> */}
          {/* </View> */}
          {/* </View> */}
        </View>
      </Pressable>
    </Link>
  );
});

const $container: ViewStyle = {
  justifyContent: "center",
  // height: HEIGHT,
  // backgroundColor: "red",
};
