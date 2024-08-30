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
    signInLoading: false,
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
        await client.models.User.create({ email })
        store.setProp("signUpLoading", false)
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
