import React, { FC } from "react";
import { ViewStyle } from "react-native";
// import { AppStackScreenProps } from "../../app/navigators"
import {
  Screen,
  Text,
  EmptyState,
  // AccountItem,
  Account as AccountComponent,
  ListItem,
} from "@/components";
// import { Collapsible } from "@/components/Collapsible";

import { useNavigation } from "@react-navigation/native";
import { useStores } from "../../models";
import { signIn, signOut } from "aws-amplify/auth";
import { Link, useLocalSearchParams } from "expo-router";
import { router } from "expo-router";
import { Divider } from "react-native-paper";

// interface AccountScreenProps extends AppStackScreenProps<"Account"> {}

export default function Settings() {
  const { accountID } = useLocalSearchParams<{ accountID: string }>();

  // Pull in one of our MST stores
  const {
    authenticationStore: { isAuthenticated, authEmail },
  } = useStores();
  console.log("slug", accountID, authEmail);
  console.log(isAuthenticated, "isAuthenticated");

  // Pull in navigation via hook
  const navigation = useNavigation();

  const signOutFunction = async () => {
    console.log("???");
    navigation.navigate("LoginScreen");
  };

  const signInFunction = async () => {
    console.log("???");
  };

  return (
    <Screen style={$root} preset="scroll">
      <Link href={"/(home)/account"}>
        <ListItem text="Account Info" leftIcon="person-circle" />
      </Link>
      <Divider />
      <Link href={"/(home)/account"}>
        <ListItem text="Sweetpass Membership" leftIcon="person-circle" />
      </Link>
      <Divider />
      <Link href={"/(home)/account"}>
        <ListItem text="Payments" leftIcon="person-circle" />
      </Link>
      <Divider />
      <Link href={"/(home)/account"}>
        <ListItem text="Crdit and promos" leftIcon="person-circle" />
      </Link>
      <Divider />
      <Link href={"/(home)/account"}>
        <ListItem text="Addresses" leftIcon="person-circle" />
      </Link>
      <Divider />
      <Link href={"/(home)/account"}>
        <ListItem text="Orders" leftIcon="person-circle" />
      </Link>
      <Divider />
      <Link href={"/(home)/account"}>
        <ListItem text="Favorites" leftIcon="person-circle" />
      </Link>
      <Divider />
      {/* <Link href={"/(home)/account"}> */}
      <ListItem
        text={isAuthenticated ? "Sign Out" : "Sign In"}
        leftIcon="person-circle"
        onPress={!isAuthenticated ? signOutFunction : signInFunction}
      />
      {/* </Link> */}
      <Divider />
    </Screen>
  );
}

const $root: ViewStyle = {
  flex: 1,
};
