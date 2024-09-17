import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, View, Pressable } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link, useFocusEffect, useNavigation } from "expo-router";
import { OrderButton, Text } from "@/components";
import { colors, spacing, typography } from "../../theme";
import { ImageBackground } from "expo-image";
import { imageCDNURL } from "@/app/utils/linkbuilder";
// import { imageCDNURL } from "@/app/utils/linkbuilder";

export default function Home() {
  const navigation = useNavigation();
  // useFocusEffect(() => {
  //   console.log("Home focused");
  //   navigation.setOptions({
  //     // title: "kkk",
  //     headerRight: () => (
  //       <Link href={"/(home)/settings"}>
  //         <Ionicons
  //           name="person-circle"
  //           size={24}
  //           style={{ marginRight: 16 }}
  //           // onPress={() => navigation.navigate("SettingsScreen")}
  //         />
  //       </Link>
  //     ),
  //   });
  // });

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={{ uri: imageCDNURL("menu/IMG_2671.jpeg", "none") }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <View style={{ margin: spacing.md, flex: 4 }}>
          <Text
            text="De la finca a tu plato."
            // preset="heading"
            style={{
              color: colors.palette.neutral100,
              fontFamily: typography.fonts.poppins.Poppins_500Medium,
            }}
          ></Text>
          <Text
            text="Di Hola a lo fresco."
            preset="heading"
            style={{
              color: colors.palette.neutral100,
              fontFamily: typography.fonts.poppins.semiBold,
            }}
          ></Text>
          <Link href={"/(tabs)/menu"} asChild>
            <OrderButton
              text="Ordena Ya"
              textStyle={{
                color: colors.palette.greenFont,
                fontFamily: typography.fonts.poppins.Poppins_600SemiBold,
              }}
              style={{
                backgroundColor: colors.palette.lightYellowGreen,
                borderRadius: 13,
                alignSelf: "flex-start",
                borderWidth: 2,
                borderColor: colors.palette.greenFont,
              }}
            />
          </Link>
        </View>

        <View
          style={{
            flex: 1,
            margin: spacing.sm,

            alignItems: "flex-end",
          }}
        >
          <Link href={"/(tabs)/settings"} asChild>
            <Pressable>
              <Ionicons
                color={colors.palette.neutral100}
                name="person-circle"
                size={44}
                style={{ marginRight: 16 }}
                // onPress={() => {
                //   console.log("pressed");
                // }}
              />
            </Pressable>
          </Link>
        </View>
      </View>
    </ImageBackground>
  );
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Di hola a lo fresco.</ThemedText>
      </ThemedView>
      <ThemedText>
        This app includes example code to help you get started.
      </ThemedText>

      <OrderButton
        text="Ordena Ya"
        textStyle={{
          color: colors.palette.greenFont,
          fontFamily: typography.fonts.poppins.Poppins_600SemiBold,
        }}
        style={{
          alignSelf: "flex-start",
          backgroundColor: colors.palette.lightYellowGreen,
          borderRadius: 13,
        }}
      />
      <Collapsible title="File-based routing">
        <ThemedText>
          This app has two screens:{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
          and{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{" "}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the
          web version, press <ThemedText type="defaultSemiBold">w</ThemedText>{" "}
          in the terminal running this project.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Images">
        <ThemedText>
          For static images, you can use the{" "}
          <ThemedText type="defaultSemiBold">@2x</ThemedText> and{" "}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to
          provide files for different screen densities
        </ThemedText>
        <Image
          source={require("@/assets/images/react-logo.png")}
          style={{ alignSelf: "center" }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Custom fonts">
        <ThemedText>
          Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText>{" "}
          to see how to load{" "}
          <ThemedText style={{ fontFamily: "SpaceMono" }}>
            custom fonts such as this one.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{" "}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook
          lets you inspect what the user's current color scheme is, and so you
          can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{" "}
          <ThemedText type="defaultSemiBold">
            components/HelloWave.tsx
          </ThemedText>{" "}
          component uses the powerful{" "}
          <ThemedText type="defaultSemiBold">
            react-native-reanimated
          </ThemedText>{" "}
          library to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The{" "}
              <ThemedText type="defaultSemiBold">
                components/ParallaxScrollView.tsx
              </ThemedText>{" "}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
