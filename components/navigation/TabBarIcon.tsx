// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";

export function TabBarIcon({
  type,
  style,
  ...rest
}: IconProps<ComponentProps<typeof Ionicons>["name"]>) {
  if (type === "FontAwesome6") {
    return (
      <FontAwesome6
        size={28}
        // color="black"
        style={[{ marginBottom: -3 }, style]}
        {...rest}
        name="bowl-food"
      />
    );
  }

  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}
