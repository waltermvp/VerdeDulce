import React, { FC } from "react";
import { ViewStyle } from "react-native";
// import { AppStackScreenProps } from "../../app/navigators"
import { Screen, Text, Account, EmptyState } from "@/components";
// import { Collapsible } from "@/components/Collapsible";

// import { useNavigation } from "@react-navigation/native"
import { useStores } from "../models";

// interface AccountScreenProps extends AppStackScreenProps<"Account"> {}

export default function AccountScreen() {
  // Pull in one of our MST stores
  const {
    authenticationStore: { isAuthenticated, authEmail },
  } = useStores();

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll">
      {isAuthenticated ? (
        <Account email={authEmail} />
      ) : (
        <EmptyState
          headingTx="accountScreen.title" //contentTx="accountScreen.content"
          // buttonTx="accountScreen.signIn"
        />
      )}
      <Text text="test" />
    </Screen>
  );
}

const $root: ViewStyle = {
  flex: 1,
};
