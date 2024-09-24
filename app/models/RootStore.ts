import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { AuthenticationStoreModel } from "./AuthenticationStore";
import { CreateItemStoreModel } from "./CreateItemStore";
import { NewsletterStoreModel } from "./NewsletterStore";
import { CartStoreModel } from "./CartStore";

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  authenticationStore: types.optional(AuthenticationStoreModel, {}),
  createSignUpStore: types.optional(NewsletterStoreModel, {}),
  createItemStore: types.optional(CreateItemStoreModel, {}),
  cartStore: types.optional(CartStoreModel, {
    cartId: "defaultCartId",
    cart: [],
    totalAmount: 0,
    isLoading: false,
    errorMessage: "",
  }),
});

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
