import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { ViewStyle } from "react-native";
// import { AppStackScreenProps } from "../../app/navigators"
import { Account, EmptyState, Screen, Text } from "../../app/components";
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../app/models";

interface AccountScreenProps extends AppStackScreenProps<"Account"> {}

export const AccountScreen: FC<AccountScreenProps> = observer(
  function AccountScreen() {
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
            buttonTx="accountScreen.signIn"
          />
        )}
        <Text text="account" />
      </Screen>
    );
  }
);

const $root: ViewStyle = {
  flex: 1,
};
