import * as React from "react";
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { observer } from "mobx-react-lite";
import { colors, spacing, typography } from "../../app/theme";
import { Text } from "../../app/components/Text";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { SimpleMenuItem } from "./SimpleMenuItem";

type Category = {
  id: string;
  title: string;
  data: [];
};
export interface CategoryProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
  category: Category;
}

/**
 * Describe your component here
 */
export const Category = observer(function Category(props: CategoryProps) {
  const { style, category } = props;
  const $styles = [$container, style];

  return (
    <View style={$styles}>
      <Text preset="subheading" style={styles.title}>
        {category.title}
      </Text>
      <View
        style={{
          flex: 1,
          alignContent: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        {category.data.map((item: any, index: number) => (
          <SimpleMenuItem
            key={item.name}
            title={item.name}
            price={item.price}
            description={item.description}
            index={index}
          />
        ))}
      </View>
    </View>
  );
});

const $container: ViewStyle = {
  flex: 1,
  // width: width / 2.75,
  // justifyContent: "flex-start",
  alignItems: "center",
  // backgroundColor: "red",
};

const styles = StyleSheet.create({
  title: {
    fontSize: RFValue(14), // second argument is standardScreenHeight(optional),
    lineHeight: RFValue(11), // second argument is standardScreenHeight(optional),
    // marginBottom: 12,÷
    color: colors.palette.greenFont,
    fontFamily: typography.fonts.poppins.semiBold,
    textAlign: "center",
    padding: spacing.xs,
  },
  description: {
    fontSize: RFValue(9), // second argument is standardScreenHeight(optional),
    lineHeight: RFValue(9),
    fontFamily: typography.fonts.poppins.Poppins_300Light,
    // letterSpacing: 0.15,
  },
  price: {
    fontSize: RFValue(13), // second argument is standardScreenHeight(optional),
    color: colors.palette.greenFont,
  },
});
