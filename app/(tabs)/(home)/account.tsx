import React, { FC } from "react";
import { View, ViewStyle } from "react-native";
// import { AppStackScreenProps } from "../../app/navigators"
import {
  Screen,
  Text,
  EmptyState,
  // AccountItem,
  Account as AccountComponent,
  Button,
} from "@/components";
// import { Collapsible } from "@/components/Collapsible";

import { useNavigation } from "@react-navigation/native";
import { useStores } from "../../models";
import { signIn } from "aws-amplify/auth";
import { useLocalSearchParams } from "expo-router";
import { router } from "expo-router";
import { TextInput } from "react-native-paper";

// interface AccountScreenProps extends AppStackScreenProps<"Account"> {}

export default function Account() {
  const { accountID } = useLocalSearchParams<{ accountID: string }>();

  // Pull in one of our MST stores
  const {
    authenticationStore: { isAuthenticated, authEmail },
  } = useStores();
  console.log("slug", accountID, authEmail);
  console.log(isAuthenticated, "isAuthenticated");

  // Pull in navigation via hook
  const navigation = useNavigation();
  return (
    <Screen style={$root} preset="scroll">
      <View>
        <TextInput placeholder="First Name" value={authEmail} />
        <TextInput placeholder="Last Name" />
        <TextInput placeholder="email" />
        <TextInput placeholder="Phone number" />
      </View>
      <View style={{ justifyContent: "center" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Button text="Cancelar" style={{ flex: 1 }} />
          <Button text="Save" style={{ flex: 1 }} />
        </View>
        <Button preset="link" text="Borrar Cuenta" />
      </View>
    </Screen>
  );
}

const $root: ViewStyle = {
  flex: 1,
};
