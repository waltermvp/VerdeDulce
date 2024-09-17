import { type Instance, type SnapshotOut, types } from "mobx-state-tree";
// import config from "../aws_config"
import { withSetPropAction } from "./helpers/withSetPropAction";
import {
  signUp,
  signIn,
  confirmSignUp,
  getCurrentUser,
  autoSignIn,
  signOut,
  resendSignUpCode,
  SignUpInput,
} from "aws-amplify/auth";

// import { generateClient } from "aws-amplify/data"
// import type { Schema } from "../../amplify/data/resource"

// type SignUpParameters = {
//   username: string;
//   password: string;
//   email: string;
//   phone_number: string;
// };

// const client = generateClient<Schema>()
export const AuthenticationStoreModel = types
  .model("AuthenticationStore")
  .props({
    authToken: types.maybe(types.string),
    subjectID: types.maybe(types.string),
    orgID: types.maybe(types.string),
    authEmail: "",
    signInLoading: false,

    // TODO: move to it's own sign up store
    // email: types.maybe(types.string),
    authPassword: types.maybe(types.string),
    authConfirmPassword: types.maybe(types.string),
    signUpLoading: false,

    // Confirm Code
    authConfirmCode: types.maybe(types.string),
    confirmLoading: false,

    // Resending
    resendLoading: false,
  })
  .actions(withSetPropAction)
  .views((store) => ({
    get isAuthenticated() {
      return !!store.authToken;
    },
    get loginValidationError() {
      if (store.authEmail.length === 0) return "can't be blank";
      if (store.authEmail.length < 6) return "must be at least 6 characters";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(store.authEmail))
        return "must be a valid email address";
      return "";
    },
    get isSignInEnabled() {
      const enabled =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(store.authEmail) &&
        (store.authPassword?.length ?? 0) > 4;
      return enabled;
    },
    get signUpValidationError() {
      if (store.authEmail.length === 0) return "can't be blank";
      if (store.authEmail.length < 6) return "must be at least 6 characters";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(store.authEmail))
        return "must be a valid email address";
      return "";
    },
    get isSignUpEnabled() {
      const enabled =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(store.authEmail) &&
        (store.authPassword?.length ?? 0) > 4 &&
        store.authConfirmPassword === store.authPassword;
      console.log(enabled, "enabled");
      console.log(
        store.authPassword,
        store.authEmail,
        store.authConfirmPassword,
        "enabled"
      );
      return enabled;
    },
  }))
  .actions((store) => ({
    async signOutAuth() {
      try {
        await signOut();
        store.setProp("authToken", undefined);
        store.setProp("authEmail", "");
        this.clear();
        console.log("scleareddd");
      } catch (error) {
        console.log("error", error);
      }
    },
    async signInAuth({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) {
      const result = await signIn({ username, password });
      if (result.isSignedIn) {
        await this.refreshAuthStatus;
      }

      store.setProp("authToken", JSON.stringify(result));
      console.log(result, "result");
    },
    setAuthToken(value?: string) {
      store.authToken = value;
    },
    // TODO: see if we need value.replace()
    setAuthEmail(value: string) {
      console.log("set auth email1", value, "<--");
      // console.log("set auth email1", typeof value)
      // store.authEmail = value.replace(/ /g, "")
      store.setProp("authEmail", value);
    },
    setAuthPassword(value?: string) {
      // store.authPassword = value.replace(/ /g, "")
      store.authPassword = value;
    },
    setSignInLoading(value: boolean) {
      store.signInLoading = value;
    },
    setAuthConfirmPassword(value?: string) {
      // store.authConfirmPassword = value.replace(/ /g, "")
      store.authConfirmPassword = value;
    },
    setAuthConfirmCode(value?: string) {
      store.authConfirmCode = value;
    },
    setConfirmLoading(value: boolean) {
      store.confirmLoading = value;
    },
    setSignUpLoading(value: boolean) {
      store.signUpLoading = value;
    },
    setResendLoading(value: boolean) {
      store.resendLoading = value;
    },
    setAuthData(email: string, userID: string) {
      store.setProp("authEmail", email);
      store.setProp("subjectID", userID);
      store.setProp("authToken", userID);
    },
    setOrgID(orgID: string) {
      store.orgID = orgID;
    },
    clear() {
      store.authEmail = "";
      store.authToken = undefined;
      store.subjectID = undefined;
      // self.setProp('authToken', null);
      // store.setProp('authEmail', null);
      // store.setProp('subjectID', null);
    },
    async refreshAuthStatus() {
      try {
        const result = await getCurrentUser();
        console.log("result", result);
        this.setAuthData(
          result.signInDetails?.loginId ? result.signInDetails?.loginId : "",
          result.username
        );
        // const getOrgVars = {
        //   creatorSubID: result.userId + "::" + result.username,
        //   authMode: "userPool",
        // }
        // // console.log("getOrgVars", getOrgVars)
        // const org = await client.models.Org.orgsByUser(getOrgVars)
        // // console.log("org", org)
        // // console.log("org", org.errors)
        // if (org.data) {
        //   // console.log("setting orgID", org.data[0].id)
        //   this.setOrgID(org.data[0].id)
        //   return true
        // } else {
        //   console.log("no org found in AuthenStore refreshAuthStatus")
        //   return false
        // }
        // store.setProp("orgID", result.orgID)
      } catch (error) {
        console.log("refreshAuthStatus error: ", error);
        this.clear();
        // throw error
      }
    },
    async handleLogin() {
      this.setSignInLoading(true);

      try {
        const signInParams = {
          username: store.authEmail,
          password: store.authPassword,
        };
        await signIn(signInParams);
        this.setSignInLoading(false);
        const user = await getCurrentUser();
        // tODO: get org
        // const org = await client.graphql({
        //   query: queries.orgsByCreatorSubIDAndCreatedAt,
        //   variables: { creatorSubID: user.userId },
        // });
        // // console.log('org', org.data.orgsByCreatorSubIDAndCreatedAts.items);
        this.setAuthData(
          user.userId,
          user.signInDetails?.loginId || "",
          user.userId
        );
      } catch (error) {
        this.setSignInLoading(false);
        console.log("errrrr", error);
        throw error;
      }
    },
    async handleSignUp() {
      console.log("handle sign up start");
      this.setSignUpLoading(true);
      try {
        // setZoneInfo("share-invite-oPpphJKOZsar_QQxFivh7")
        const signUpParams: SignUpInput = {
          username: store.authEmail,
          password: store.authPassword || "", // Add a default value of an empty string if store.authPassword is undefined
          options: {
            userAttributes: {
              email: store.authEmail,
              // phone_number, // E.164 number convention
            },
            // optional
            autoSignIn: true,
            // autoSignIn: { authFlowType: "USER_SRP_AUTH" },
            // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
          },
        };
        console.log(signUpParams, "signUpParams");
        // store.zoneinfo
        //   ? (signUpParams.options.userAttributes.zoneinfo = store.zoneinfo)
        //   : null;

        const { isSignUpComplete, userId, nextStep } = await signUp(
          signUpParams
        );
        console.log(isSignUpComplete, "isSignUpComplete");
        console.log(userId, "userId");
        console.log(nextStep, "nextStep");
        this.setSignUpLoading(false);
      } catch (error) {
        console.log("error: ", error);
        this.setSignUpLoading(false);
        throw error;
      }
    },
    async handleConfirmCode() {
      console.log("confirmCode``");
      this.setConfirmLoading(true);
      try {
        const result = await confirmSignUp({
          username: store.authEmail,
          confirmationCode: store.authConfirmCode || "", // Add a default value of an empty string if store.authConfirmCode is undened
        });
        console.log("result: ", result);
        const autoSignInResult = await autoSignIn();
        console.log("autoSignInResult: ", autoSignInResult);
        const user = await getCurrentUser();
        console.log("user: ", user);

        this.setAuthToken(user.userId);

        this.setAuthConfirmCode();
        this.setConfirmLoading(false);
        this.refreshAuthStatus();
      } catch (error) {
        console.log("error: ", error);
        this.setConfirmLoading(false);
        throw error;
      }
    },
    async handleResendConfirmCode(email: string) {
      try {
        this.setResendLoading(true);
        await resendSignUpCode({
          username: email,
          options: {
            autoSignIn: true,
          },
        });
        await autoSignIn();
        const user = await getCurrentUser();
        this.setAuthToken(user.userId);
      } catch (error) {
        console.log("error: ", error);
      } finally {
        this.setResendLoading(false);
      }
    },
    async logout() {
      await signOut();
      this.refreshAuthStatus();
    },
  }));

export interface AuthenticationStore
  extends Instance<typeof AuthenticationStoreModel> {}
export interface AuthenticationStoreSnapshot
  extends SnapshotOut<typeof AuthenticationStoreModel> {}
