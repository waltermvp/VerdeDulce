import * as React from "react"
import { StyleProp, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "app/theme"
import { Text } from "app/components/Text"
import { TextInput } from "react-native-paper"
import Ionicons from "@expo/vector-icons/Ionicons"
import { useStores } from "app/models"

export interface NewsletterProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const Newsletter = observer(function Newsletter(props: NewsletterProps) {
  const { style } = props
  const $styles = [$container, style]

  const { authenticationStore } = useStores()

  const [email, setEmail] = React.useState("")
  const [color, setColor] = React.useState(colors.palette.lightBackground)

  return (
    <View style={$styles}>
      <View>
        <Text preset="subheading">Join Our NewsLetter </Text>
        <Text preset="default">
          Sign up for exclusive promos, new menu drops, store openings, and more.
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            mode="outlined"
            outlineStyle={{
              borderColor: colors.palette.greenFont,
              borderWidth: 1.5,
              borderRadius: 14,
            }}
            theme={{
              colors: {
                primary: colors.palette.greenFont,
                background: color,
              },
            }}
            // style={{ borderColor: colors.palette.greenFont, borderWidth: 1 }}
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
            onFocus={({ nativeEvent }) => console.log("focused", nativeEvent)}
            // right={
            //   <Ionicons
            //     // style={{ marginRight: 10, flex: 1, height: 32, width: 32, backgroundColor: "red" }}
            //     name="arrow-forward-circle-sharp"
            //     size={32}
            //     color={colors.palette.greenFont}
            //   />
            // }
          ></TextInput>
          <TouchableOpacity onPress={() => console.log("pressed")}>
            <Ionicons
              // style={{ marginRight: 10, flex: 1, height: 32, width: 32, backgroundColor: "red" }}
              name="arrow-forward-circle-sharp"
              size={32}
              color={colors.palette.greenFont}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",

  // paddingBottom: spacing.xxxl * 1.5,
}
