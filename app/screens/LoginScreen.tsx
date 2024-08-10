import { observer } from "mobx-react-lite"
import React, { type ComponentType, type FC, useEffect, useMemo, useRef, useState } from "react"
import { Alert, TextInput, type TextStyle, type ViewStyle } from "react-native"
import {
  Button,
  Icon,
  Screen,
  Text,
  TextField,
  // TextFieldAccessoryProps,
} from "../components"
import { useStores } from "../models"
import {  AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import { useRoute } from "@react-navigation/native"
import type { TextFieldAccessoryProps } from "../components/TextField"
// import { resendSignUpCode } from 'aws-amplify/auth';

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

enum LoginMode {
  LOGIN = "login",
  SIGNUP = "signup",
  CONFIRM = "confirm",
}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen(_props) {
  // const route = useRoute<RouteProp<AppStackParamList, 'Login'>>();
  const route: { params?: { mode?: LoginMode } } = useRoute()
  const mode = route.params?.mode === LoginMode.LOGIN ? LoginMode.LOGIN : LoginMode.SIGNUP
  const [loginMode, setLoginMode] = useState<LoginMode>(mode)
  const authPasswordInput = useRef<TextInput>(null)
  const authConfirmPasswordInput = useRef<TextInput>(null)
  // const authVenueNameInput = useRef<TextInput>(null)

  const authConfirmCodeInput = useRef<TextInput>(null)

  // const [authPassword, setAuthPassword] = useState("")
  // const [authConfirmPassword, setAuthConfirmPassword] = useState("")
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [attemptsCount, setAttemptsCount] = useState(0)
  const {
    authenticationStore: {
      // Sign In
      authEmail,
      setAuthEmail,
      authPassword,
      setAuthPassword,
      zoneinfo,
      setZoneInfo,

      handleLogin,
      isSignInEnabled,
      signInLoading,
      loginValidationError,

      authConfirmPassword,
      setAuthConfirmPassword,
      authConfirmCode,
      confirmLoading,

      setAuthConfirmCode,
      handleConfirmCode,
      signUpLoading,
      isSignUpEnabled,
      signUpValidationError,

      refreshAuthStatus,
      handleSignUp,

      //
      resendLoading,
      handleResendConfirmCode, // Currently used for inviting users to the app via a share/ invite
    },
  } = useStores()

  useEffect(() => {
    // Here is where you could fetch credentials from keychain or storage
    // and pre-fill the form fields.
    try {
      refreshAuthStatus()
    } catch (error) {
      console.log("error", error)
    }

    // if (route.params?.shareid) {
    //   setZoneInfo(route.params?.shareid || '');
    // }

    return () => {
      // setAuthPassword("")
      // setAuthEmail("")
    }
  }, [refreshAuthStatus])

  useEffect(() => {
    if (loginMode === LoginMode.CONFIRM) {
      authConfirmCodeInput.current?.focus()
    }
  }, [loginMode])

  useEffect(() => {
    if (loginMode == LoginMode.CONFIRM && authConfirmCode?.length == 6) {
      confirmCode()
    }
  }, [authConfirmCode])

  const error = isSubmitted ? loginValidationError : ""
  // var errors = [];

  async function login() {
    console.log("login called")
    setIsSubmitted(true)
    setAttemptsCount(attemptsCount + 1)

    if (loginValidationError) return

    // Make a request to your server to get an authentication token.
    // If successful, reset the fields and set the token.
    try {
      await handleLogin()
    } catch (error) {
      Alert.alert("Whoops", JSON.stringify(error || "An error occurred"))
    }
  }

  async function signUp() {
    if (signUpValidationError) return
    try {
      await handleSignUp()
      setLoginMode(LoginMode.CONFIRM)
    } catch (errorr) {
      // Remove the type annotation from the catch clause variable
      Alert.alert("Whoops", JSON.stringify(errorr || "An error occurred"))
    }
  }

  async function confirmCode() {
    console.log("confirmCode")
    try {
      await handleConfirmCode()
    } catch (error) {
      console.log("error", error)
      // console.log('error', error.message);
      Alert.alert("Whoops", JSON.stringify(error || "An error occurred"))
    }
  }

  const PasswordRightAccessory: ComponentType<TextFieldAccessoryProps> = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={isAuthPasswordHidden ? "view" : "hidden"}
            color={colors.palette.neutral800}
            containerStyle={props.style}
            size={20}
            onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
          />
        )
      },
    [isAuthPasswordHidden],
  )
  // const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  return (
    <Screen
      preset="scroll"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["bottom"]}
      KeyboardAvoidingViewProps={{
        behavior: "padding",
        enabled: true,
        // keyboardVerticalOffset,
      }}
      // keyboardOffset={keyboardVerticalOffset}
    >
      {loginMode === LoginMode.LOGIN && (
        <>
          <Text testID="login-heading" tx="loginScreen.signIn" preset="heading" style={$signIn} />
          <Text tx="loginScreen.enterDetails" preset="subheading" style={$enterDetails} />
          {attemptsCount > 2 && (
            <Text tx="loginScreen.hint" size="sm" weight="light" style={$hint} />
          )}

          <TextField
            value={authEmail}
            onChangeText={setAuthEmail}
            containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            keyboardType="email-address"
            labelTx="loginScreen.emailFieldLabel"
            placeholderTx="loginScreen.emailFieldPlaceholder"
            helper={error}
            status={error ? "error" : undefined || !signInLoading ? undefined : "disabled"}
            onSubmitEditing={() => authPasswordInput.current?.focus()}
            returnKeyType="next"
          />

          <TextField
            ref={authPasswordInput}
            value={authPassword}
            onChangeText={setAuthPassword}
            containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            secureTextEntry={isAuthPasswordHidden}
            labelTx="loginScreen.passwordFieldLabel"
            placeholderTx="loginScreen.passwordFieldPlaceholder"
            onSubmitEditing={login}
            RightAccessory={PasswordRightAccessory}
            status={error ? "error" : undefined || !signInLoading ? undefined : "disabled"}
            returnKeyType="done"
          />

          <Button
            testID="login-button"
            tx="loginScreen.signIn"
            style={$tapButton}
            onPress={login}
            disabled={!isSignInEnabled}
            loading={signInLoading}
            preset={isSignInEnabled ? "default" : "disabled"}
          />

          <>
            <Button
              preset="link"
              tx="loginScreen.tapSignUp"
              style={$linkButton}
              onPress={() => setLoginMode(LoginMode.SIGNUP)}
            />
          </>
        </>
      )}
      {loginMode === LoginMode.SIGNUP && (
        <>
          {/* <Button
            text="Auto Fill"
            onPress={() => {
              console.log("Auto Fill")
              setAuthEmail("walter+" + makeid(4) + "@epiphanyapps.com")
              setAuthPassword("Chacalona87!")
              setAuthConfirmPassword("Chacalona87!")
              setZoneInfo("Walter's")
            }}
          /> */}

          <Text testID="login-heading" tx="signUpScreen.signIn" preset="heading" style={$signIn} />
          <Text tx="signUpScreen.enterDetailsSignUp" preset="subheading" style={$enterDetails} />
          {/* // {attemptsCount > 2 && (
          //   <Text tx="loginScreen.hint" size="sm" weight="light" style={$hint} />
          // )} */}

          <TextField
            value={authEmail}
            onChangeText={setAuthEmail}
            containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            keyboardType="email-address"
            labelTx="loginScreen.emailFieldLabel"
            placeholderTx="loginScreen.emailFieldPlaceholder"
            helper={error}
            onSubmitEditing={() => authPasswordInput.current?.focus()}
            status={error ? "error" : undefined || signUpLoading ? "disabled" : undefined}
          />
          {/* <TextField
            ref={authVenueNameInput}
            value={zoneinfo}
            onChangeText={setZoneInfo}
            containerStyle={$textField}
            autoCapitalize="words"
            autoComplete="password"
            autoCorrect={true}
            labelTx="loginScreen.venueName"
            placeholderTx="loginScreen.venueNamePlaceholder"
            status={signUpLoading ? "disabled" : undefined}
          /> */}

          <TextField
            ref={authPasswordInput}
            value={authPassword}
            onChangeText={setAuthPassword}
            containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            secureTextEntry={isAuthPasswordHidden}
            labelTx="loginScreen.passwordFieldLabel"
            placeholderTx="loginScreen.passwordFieldPlaceholder"
            onSubmitEditing={() => {
              authConfirmPasswordInput.current?.focus()
            }}
            RightAccessory={PasswordRightAccessory}
            status={signUpLoading ? "disabled" : undefined}
          />
          <TextField
            ref={authConfirmPasswordInput}
            value={authConfirmPassword}
            onChangeText={setAuthConfirmPassword}
            containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            secureTextEntry={isAuthPasswordHidden}
            labelTx="loginScreen.passwordFieldLabel"
            placeholderTx="loginScreen.passwordFieldPlaceholder"
            onSubmitEditing={()=>{
              if(isSignUpEnabled){
                signUp()                
              }
            }}
            RightAccessory={PasswordRightAccessory}
            status={signUpLoading ? "disabled" : undefined}
          />

          <Button
            testID="signup-button"
            tx="signUpScreen.signIn"
            style={$tapButton}
            preset={isSignUpEnabled ? "default" : "disabled"}
            onPress={signUp}
            loading={signUpLoading}
            disabled={!isSignUpEnabled}
          />
          <Button
            testID="login-button"
            tx="signUpScreen.login"
            style={$linkButton}
            preset="link"
            onPress={() => {
              setAuthEmail("")
              setAuthPassword(undefined)
              setAuthConfirmPassword(undefined)
              setLoginMode(LoginMode.LOGIN)
            }}
            disabled={!!signUpLoading}
          />
        </>
      )}
      {loginMode === LoginMode.CONFIRM && (
        <>
          <Text testID="login-heading" tx="signUpScreen.confirm" preset="heading" style={$signIn} />
          <Text tx="signUpScreen.confirmCodeDetails" preset="subheading" style={$enterDetails} />
          {/* // {attemptsCount > 2 && (
          //   <Text tx="loginScreen.hint" size="sm" weight="light" style={$hint} />
          // )} */}

          <TextField
            ref={authConfirmCodeInput}
            value={authConfirmCode}
            onChangeText={setAuthConfirmCode}
            containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            // secureTextEntry={isAuthPasswordHidden}
            labelTx="signUpScreen.confirm"
            placeholderTx="signUpScreen.codeLabel"
            onSubmitEditing={confirmCode}
            keyboardType="number-pad"
            returnKeyType="done"
            RightAccessory={PasswordRightAccessory}
          />

          <Button
            testID="signup-button"
            tx="signUpScreen.tapToConfirm"
            style={$tapButton}
            preset="reversed"
            onPress={confirmCode}
            loading={confirmLoading}
          />
          <Button
            testID="login-button"
            tx="signUpScreen.resendCode"
            style={$linkButton}
            preset="link"
            loading={resendLoading}
            disabled={resendLoading}
            onPress={() => {
              handleResendConfirmCode(authEmail)
            }}
          />
        </>
      )}
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.xxl,
  paddingHorizontal: spacing.lg,
}

const $signIn: TextStyle = {
  marginBottom: spacing.sm,
}

const $enterDetails: TextStyle = {
  marginBottom: spacing.lg,
}

const $hint: TextStyle = {
  color: colors.tint,
  marginBottom: spacing.md,
}

const $textField: ViewStyle = {
  marginBottom: spacing.lg,
}

const $tapButton: ViewStyle = {
  marginTop: spacing.xs,
}

const $linkButton: ViewStyle = {
  marginTop: spacing.xs,
  alignSelf: "flex-end",
}

function makeid(length: number) {
  let result = ""
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}
