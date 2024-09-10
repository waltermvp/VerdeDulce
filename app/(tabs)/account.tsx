import React, { FC } from "react";
import { ViewStyle } from "react-native";
// import { AppStackScreenProps } from "../../app/navigators"
import { Screen, Text, EmptyState } from "@/components";
// import { Collapsible } from "@/components/Collapsible";

import { useNavigation } from "@react-navigation/native";
import { useStores } from "../models";
import { signIn } from "aws-amplify/auth";

// interface AccountScreenProps extends AppStackScreenProps<"Account"> {}

export default function Account() {
  // Pull in one of our MST stores
  const {
    authenticationStore: { isAuthenticated, authEmail },
  } = useStores();

  // Pull in navigation via hook
  const navigation = useNavigation();
  return (
    <Screen style={$root} preset="scroll">
      {isAuthenticated ? (
        // <Account email={authEmail} />
        <Text text={authEmail}></Text>
      ) : (
        // <Text text={authEmail}></Text>
        <EmptyState
          headingTx="accountScreen.title" //contentTx="accountScreen.content"
          // buttonTx="accountScreen.signIn"
          buttonOnPress={() => {
            navigation.navigate("Login");
          }}
        />
      )}
      <Text text="account" />
    </Screen>
  );
}

const $root: ViewStyle = {
  flex: 1,
};
