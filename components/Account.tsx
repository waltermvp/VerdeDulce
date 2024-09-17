import * as React from "react";
import { StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { observer } from "mobx-react-lite";
import { colors, typography } from "../app/theme";
import { Text } from "./Text";
import { AccountItem } from "./AccountItem";
import { useStores } from "@/app/models";
import { LineItem } from "./LineItem";
import { MenuItemSmall } from "./MenuItemSmall";
import { ListItem } from "./ListItem";

export interface AccountProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;

  email: string;
}

/**
 * Describe your component here
 */
export const Account = function Account(props: AccountProps) {
  const { style, email } = props;
  const $styles = [$container, style];
  const {
    authenticationStore: { isAuthenticated, authEmail },
  } = useStores();

  return (
    <View style={$styles}>
      <View style={{ flex: 1 }}>
        {/* <MenuItemSmall description="ddd" /> */}
        <ListItem text="ddd" />
      </View>
      <View style={{ flex: 1 }}>
        {/* <AccountItem title="Account" icon="person" /> */}
        <Text style={$text}>{email}</Text>
      </View>
    </View>
  );
};

const $container: ViewStyle = {
  justifyContent: "center",
  flexDirection: "row",
};

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
};
