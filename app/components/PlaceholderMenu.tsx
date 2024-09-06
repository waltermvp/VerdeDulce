import * as React from "react";
import { StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { observer } from "mobx-react-lite";
import { colors, typography } from "../../app/theme";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from "rn-placeholder";

export interface PlaceholderMenuProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
}

/**
 * Describe your component here
 */
export const PlaceholderMenu = observer(function PlaceholderMenu(
  props: PlaceholderMenuProps
) {
  const { style } = props;
  const $styles = [$container, style];

  return (
    <View style={$styles}>
      <View style={{ flexDirection: "row" }}>
        <Placeholder
          style={{ width: "33%" }}
          Animation={Fade}
          Left={PlaceholderMedia}
          Right={PlaceholderMedia}
        >
          <PlaceholderLine width={80} />
          <PlaceholderLine />
          <PlaceholderLine width={30} />
        </Placeholder>
        <Placeholder
          style={{ width: "33%" }}
          Animation={Fade}
          Left={PlaceholderMedia}
          Right={PlaceholderMedia}
        >
          <PlaceholderLine width={80} />
          <PlaceholderLine />
          <PlaceholderLine width={30} />
        </Placeholder>
        <Placeholder
          style={{ width: "33%" }}
          Animation={Fade}
          Left={PlaceholderMedia}
          Right={PlaceholderMedia}
        >
          <PlaceholderLine width={80} />
          <PlaceholderLine />
          <PlaceholderLine width={30} />
        </Placeholder>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Placeholder
          style={{ width: "33%" }}
          Animation={Fade}
          Left={PlaceholderMedia}
          Right={PlaceholderMedia}
        >
          <PlaceholderLine width={80} />
          <PlaceholderLine />
          <PlaceholderLine width={30} />
        </Placeholder>
        <Placeholder
          style={{ width: "33%" }}
          Animation={Fade}
          Left={PlaceholderMedia}
          Right={PlaceholderMedia}
        >
          <PlaceholderLine width={80} />
          <PlaceholderLine />
          <PlaceholderLine width={30} />
        </Placeholder>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Placeholder
          style={{ width: "33%" }}
          Animation={Fade}
          Left={PlaceholderMedia}
          Right={PlaceholderMedia}
        >
          <PlaceholderLine width={80} />
          <PlaceholderLine />
          <PlaceholderLine width={30} />
        </Placeholder>
        <Placeholder
          style={{ width: "33%" }}
          Animation={Fade}
          Left={PlaceholderMedia}
          Right={PlaceholderMedia}
        >
          <PlaceholderLine width={80} />
          <PlaceholderLine />
          <PlaceholderLine width={30} />
        </Placeholder>
      </View>
    </View>
  );
});

const $container: ViewStyle = {
  justifyContent: "center",
};

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
};
