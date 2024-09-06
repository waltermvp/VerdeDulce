import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { AuthenticationStoreModel } from "./AuthenticationStore";
import { CreateItemStoreModel } from "./CreateItemStore";
import { NewsletterStoreModel } from "./NewsletterStore";

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  authenticationStore: types.optional(AuthenticationStoreModel, {}),
  createSignUpStore: types.optional(NewsletterStoreModel, {}),
  createItemStore: types.optional(CreateItemStoreModel, {}),
});

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
