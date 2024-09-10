import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { StyleSheet, ViewStyle } from "react-native";
import { Screen } from "../../components";
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"
import { QrCodeSvg } from "react-native-qr-svg";
import { Image } from "expo-image";
import { imageCDNURL } from "../../app/utils/linkbuilder";
import { colors } from "../../app/theme";
const SIZE = 300;
const ICON_SIZE = SIZE / 4.75;
const CONTENT = "https://wa.me/c/593963021783";

interface QrScreenProps extends AppStackScreenProps<"Qr"> {}

export const QrScreen: FC<QrScreenProps> = observer(function QrScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll">
      {/* <Text text="qr" /> */}
      {/* <QrCodeSvg
        style={styles.qr}
        value={CONTENT}
        frameSize={SIZE}
        contentCells={5}
        content={<Text style={styles.icon}>👋</Text>}
        contentStyle={styles.box}
      />
      <QrCodeSvg
        style={styles.qr}
        gradientColors={["#0800ff", "#ff0000"]}
        value={CONTENT}
        frameSize={SIZE}
      />
      <QrCodeSvg
        style={styles.qr}
        value={CONTENT}
        frameSize={SIZE}
        contentCells={5}
        content={<Text style={styles.icon}>💻</Text>}
        dotColor="#ffffff"
        backgroundColor="#000000"
        contentStyle={styles.box}
      /> */}
      <QrCodeSvg
        style={styles.qr}
        value={CONTENT}
        frameSize={SIZE}
        contentCells={5}
        content={
          <Image
            style={{ width: ICON_SIZE, height: ICON_SIZE }}
            source={{ uri: imageCDNURL("VerdeDulce_logo.png") }}
          />
        }
        backgroundColor={colors.palette.greenFont}
        dotColor="#ffff"
        contentStyle={styles.box}
      />
      {/* <QrCodeSvg style={styles.qr} renderer={plainRenderer} value={CONTENT} frameSize={SIZE} /> */}
      {/* <QrCodeSvg style={styles.qr} renderer={customRenderer} value={CONTENT} frameSize={SIZE} /> */}
    </Screen>
  );
});

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.greenFont,
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
  },
});
