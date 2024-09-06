import * as React from "react";
import { StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { observer } from "mobx-react-lite";
import { colors, spacing, typography } from "../../app/theme";
import { Text } from "../../app/components/Text";
import { Newsletter } from "./Newsletter";
import { Bullets } from "./Bullets";
import { Bullet } from "./Bullet";

export interface FooterProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
}

/**
 * Describe your component here
 */
export const Footer = observer(function Footer(props: FooterProps) {
  const { style } = props;
  const $styles = [$container, style];

  return (
    <View style={$styles}>
      <View
        style={{
          flex: 1,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: colors.palette.greenFont,
          padding: spacing.xxxl,
        }}
      >
        <Newsletter />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.palette.footerGreen,
          alignItems: "flex-start",
          padding: spacing.xl,

          // borderTopWidth: 1,
          // borderBottomWidth: 1,
          // borderColor: colors.palette.greenFont,
        }}
      >
        <Bullet
          bullets={[
            {
              title: "Social",
              links: [
                {
                  title: "Facebook",
                  url: "https://www.facebook.com/profile.php?id=61564202236840",
                  icon: "logo-facebook",
                },
                {
                  title: "Instagram",
                  url: "https://www.instagram.com/verdedulce_",
                  icon: "logo-instagram",
                },
              ],
            },
          ]}
        />
        {/* add copyright information */}
        <Text
          style={{
            fontStyle: typography.fonts.poppins.light,
            alignSelf: "flex-end",
          }}
        >
          &copy; 2024 VerdeDulce. All rights reserved.
        </Text>
      </View>
    </View>
  );
});

const $container: ViewStyle = {
  justifyContent: "center",
  // flex: 1,
};
