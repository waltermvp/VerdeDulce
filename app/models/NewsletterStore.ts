import { type Instance, type SnapshotOut, types } from "mobx-state-tree"
// import config from "../aws_config"
import { withSetPropAction } from "./helpers/withSetPropAction"

import { generateClient } from "aws-amplify/data"
import type { Schema } from "../../amplify/data/resource"

// type SignUpParameters = {
//   username: string;
//   password: string;
//   email: string;
//   phone_number: string;
// };

const client = generateClient<Schema>()

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
      const enabled = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(store.email)
      //&& (store.authPassword?.length ?? 0) > 4
      return enabled
    },
    get signUpValidationError() {
      if (store.email.length === 0) return "can't be blank"
      if (store.email.length < 6) return "must be at least 6 characters"
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(store.email)) return "must be a valid email address"
      return ""
    },
  }))
  .actions((store) => ({
    async signUp(email: string) {
      store.setProp("signUpLoading", true)
      try {
        const result = await client.mutations.registerUser(
          { email: "walter.vargaspena@gmail.com" },
          { authMode: "apiKey" },
        )

        // create(
        //   { email, available: true },
        //   { authMode: "apiKey" },
        // )
        console.log("result", result)
        store.setProp("signUpLoading", false)
        store.setProp("status", "success")
      } catch (error) {
        store.setProp("signUpLoading", false)
        throw error
      }
    },
    setEmail(email: string) {
      store.setProp("email", email)
    },
  }))

export interface NewsletterStoreStore extends Instance<typeof NewsletterStoreModel> {}
export interface NewsletterStoreSnapshot extends SnapshotOut<typeof NewsletterStoreModel> {}
