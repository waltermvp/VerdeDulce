import { type Instance, type SnapshotOut, types } from "mobx-state-tree"
// import config from "../aws_config"
import { withSetPropAction } from "./helpers/withSetPropAction"
import {
  signUp,
  signIn,
  confirmSignUp,
  getCurrentUser,
  autoSignIn,
  signOut,
  resendSignUpCode,
  SignUpInput,
} from "aws-amplify/auth"

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
    async signUp() {
      await signOut()
    },
  }))

export interface AuthenticationStore extends Instance<typeof AuthenticationStoreModel> {}
export interface AuthenticationStoreSnapshot extends SnapshotOut<typeof AuthenticationStoreModel> {}
