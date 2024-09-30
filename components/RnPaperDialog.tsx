import * as React from "react";
import { Button, Dialog, Portal, Text } from "react-native-paper";
import { StyleProp, View, ViewStyle } from "react-native";
import { observer } from "mobx-react-lite";
import { colors } from "../app/theme";

export interface RnPaperDialogProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
  title: string;
  subtitle: string;
  buttons: { text: string; desctructive?: boolean; onPress: () => void }[];
  visible: boolean;
  onDismiss: () => void;
}

/**
 * Describe your component here
 */
export const RnPaperDialog = observer(function RnPaperDialog(
  props: RnPaperDialogProps
) {
  const { style, title, subtitle, buttons = [], visible, onDismiss } = props;
  const $styles = [$container, style];

  // const showDialog = () => setVisible(true)

  // const hideDialog = () => setVisible(false)

  return (
    <View style={$styles}>
      <Portal>
        <Dialog visible={visible} onDismiss={onDismiss}>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">{subtitle}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            {buttons.map((button) => (
              <Button
                textColor={
                  button.desctructive ? colors.palette.angry500 : undefined
                }
                key={button.text}
                onPress={button.onPress}
              >
                {button.text}
              </Button>
            ))}
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
});

const $container: ViewStyle = {
  justifyContent: "center",
};
