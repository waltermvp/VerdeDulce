import { type Instance, type SnapshotOut, types } from "mobx-state-tree";
import { withSetPropAction } from "./helpers/withSetPropAction";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";
import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";
import { record } from "aws-amplify/analytics";

export const NewsletterStoreModel = types
  .model("NewsletterStore")
  .props({
    email: "",
    status: "idle", // "idle" | "loading" | "error" | "success"
    signUpLoading: false,

    // Resending
    resendLoading: false,
  })
  .actions(withSetPropAction)
  .views((store) => ({
    get isSignInEnabled() {
      const enabled = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(store.email);
      //&& (store.authPassword?.length ?? 0) > 4
      return enabled;
    },
    get signUpValidationError() {
      if (store.email.length === 0) return "can't be blank";
      if (store.email.length < 6) return "must be at least 6 characters";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(store.email))
        return "must be a valid email address";
      return "";
    },
  }))
  .actions((store) => ({
    async signUp(email: string) {
      store.setProp("signUpLoading", true);
      try {
        //MARK: needs to be in this action to not cause an error (web thing)

        Amplify.configure({
          ...outputs,
          Analytics: {
            Pinpoint: {
              appId: outputs.analytics.amazon_pinpoint.app_id,
              region: outputs.analytics.amazon_pinpoint.aws_region,
            },
          },
        });

        record({ name: "newsletter_signup", attributes: { email } });
        const client = generateClient<Schema>();

        const result = await client.mutations.registerUser(
          { email },
          { authMode: "apiKey" }
        );

        // create(
        //   { email, available: true },
        //   { authMode: "apiKey" },
        // )
        console.log("result", result);
        if (result.errors) {
          store.setProp("status", "error");
          // throw result.errors[0]
        } else {
          store.setProp("status", "success");
        }
        store.setProp("signUpLoading", false);
      } catch (error) {
        store.setProp("signUpLoading", false);
        throw error;
      }
    },
    setEmail(email: string) {
      store.setProp("email", email);
    },
  }));

export interface NewsletterStoreStore
  extends Instance<typeof NewsletterStoreModel> {}
export interface NewsletterStoreSnapshot
  extends SnapshotOut<typeof NewsletterStoreModel> {}
