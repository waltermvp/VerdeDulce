import * as React from "react";
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { observer } from "mobx-react-lite";
import { colors, spacing, typography } from "../app/theme";
import { Text } from "./Text";
import { ActivityIndicator, Snackbar, TextInput } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useStores } from "../app/models";

export interface NewsletterProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
}

/**
 * Describe your component here
 */
export const Newsletter = observer(function Newsletter(props: NewsletterProps) {
  const { style } = props;
  const $styles = [$container, style];

  const {
    createSignUpStore: {
      isSignInEnabled,
      signUp,
      email,
      setEmail,
      signUpLoading,
      status,
    },
  } = useStores();

  const [color, setColor] = React.useState(colors.palette.lightBackground);
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const saveSignUp = async () => {
    try {
      await signUp(email);
      setEmail("");
      setColor(colors.palette.lightBackground);
    } catch (error) {
      console.log("error", error);
      setVisible(true);
      setColor(colors.palette.angry100);
    }
  };
  return (
    <View style={$styles}>
      {/* <Snackbar
        visible={visible}
        // onDismiss={onDismissSnackBar}
        action={{
          label: "Undo",
          onPress: () => {
            // Do something
          },
        }}
      >
        Hey there! I'm a Snackbar.
      </Snackbar> */}

      <View>
        <Text preset="subheading" style={{ paddingBottom: spacing.md }}>
          {/* Join Our NewsLetter */}
          Únete a Nuestro Boletín
        </Text>
        <Text preset="default" style={{ paddingBottom: spacing.sm }}>
          {/* Sign up for exclusive promos, new menu drops, store openings, and more. */}
          Regístrate para recibir promociones exclusivas, lanzamientos de nuevos
          menús, aperturas de tiendas y más
        </Text>
        {(status === "idle" || status === "error") && (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              mode="outlined"
              placeholderTextColor={colors.palette.neutral400}
              textColor={colors.palette.greenFont}
              outlineStyle={{
                borderColor: colors.palette.greenFont,
                borderWidth: 1.5,
                borderRadius: 14,
              }}
              theme={{
                colors: {
                  primary: colors.palette.greenFont,
                  background: color,
                },
              }}
              // style={{ borderColor: colors.palette.greenFont, borderWidth: 1 }}
              placeholder="Email Address"
              value={email}
              onChangeText={setEmail}
              onFocus={({ nativeEvent }) => console.log("focused", nativeEvent)}
              onSubmitEditing={saveSignUp}
              // right={
              //   <Ionicons
              //     // style={{ marginRight: 10, flex: 1, height: 32, width: 32, backgroundColor: "red" }}
              //     name="arrow-forward-circle-sharp"
              //     size={32}
              //     color={colors.palette.greenFont}
              //   />
              // }
            ></TextInput>
            {signUpLoading ? (
              <ActivityIndicator
                color={colors.palette.greenFont}
                style={{ paddingLeft: spacing.sm }}
              />
            ) : (
              <TouchableOpacity
                onPress={isSignInEnabled ? saveSignUp : undefined}
              >
                <Ionicons
                  // style={{ marginRight: 10, flex: 1, height: 32, width: 32, backgroundColor: "red" }}
                  name="arrow-forward-circle-sharp"
                  size={32}
                  color={
                    isSignInEnabled
                      ? colors.palette.greenFont
                      : colors.palette.neutral400
                  }
                />
              </TouchableOpacity>
            )}
          </View>
        )}
        {status === "success" && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: spacing.lg,
            }}
          >
            <Text preset="subheading">Gracias por registrarte.</Text>
            <Ionicons
              style={{ marginLeft: spacing.md }}
              name="checkmark-circle-sharp"
              size={44}
              color={colors.palette.greenFont}
            />
          </View>
        )}
        {status === "error" && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: spacing.lg,
            }}
          >
            <Text preset="default">Intenta Otra Vez</Text>
            <Ionicons
              style={{ marginLeft: spacing.md }}
              name="close-circle-sharp"
              size={32}
              color={colors.palette.angry500}
            />
          </View>
        )}
      </View>
    </View>
  );
});

const $container: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",

  // paddingBottom: spacing.xxxl * 1.5,
};
