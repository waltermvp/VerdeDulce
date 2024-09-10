import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { PaperProvider } from "react-native-paper";
import { useStores } from "./models";
import { customFontsToLoad } from "./theme";

// import { ProfileScreen } from "@/screens/ProfileScreen";
// import { SettingsScreen } from "@/screens/SettingsScreen";

// const Stack = createStackNavigator();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  // const [loaded] = useFonts({
  //   SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  // });
  const [areFontsLoaded] = useFonts(customFontsToLoad);

  const {
    authenticationStore: { isAuthenticated, authEmail, refreshAuthStatus },
  } = useStores();

  useEffect(() => {
    if (areFontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [areFontsLoaded]);

  useEffect(() => {
    refreshAuthStatus();
  }, []);

  if (!areFontsLoaded) {
    return null;
  }

  return (
    <PaperProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

          <Stack.Screen name="+not-found" />
          <Stack.Screen
            name="LoginScreen"
            options={{
              presentation: "modal",
            }}
          />

          <Stack.Screen
            name="account"
            initialParams={{ accountID: "123456789" }}
            options={{
              title: "Account Info",
            }}
          />
        </Stack>
      </ThemeProvider>
    </PaperProvider>
  );
}
