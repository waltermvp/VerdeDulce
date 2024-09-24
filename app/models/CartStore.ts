import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { Item, ItemModel } from "./Item";
import { withSetPropAction } from "./helpers/withSetPropAction";
import { useEffect } from "react";
import { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import { imageCDNURL } from "../../app/utils/linkbuilder";
import { CartItemModel } from "./Cart";
import { auth } from "@/amplify/auth/resource";
import outputs from "../../amplify_outputs.json";
import { Amplify } from "aws-amplify";
import { addToCart } from "@/amplify/data/addToCart/graphql/mutations";

// type Item = Schema["Item"]["type"]

export const CartStoreModel = types
  .model("CartStore")
  .props({
    cartId: types.identifier,
    cart: types.array(CartItemModel),
    // cart: CartItem[] = [];
    totalAmount: 0,
    isLoading: false,
    errorMessage: "",
  })
  .actions(withSetPropAction)
  .actions((store) => ({
    async fetchCart() {
      // if (response.data?.id) {
      //   console.log("response.data", response.data);
      //   // store.setProp("cart", response.data.cartItems);
      // }
      // if (response.kind === "ok") {
      //   store.setProp("episodes", response.episodes);
      // } else {
      //   console.error(`Error fetching episodes: ${JSON.stringify(response)}`);
      // }
    },

    async addToCart(itemId: string) {
      store.setProp("isLoading", true);
      const fetchParams = {
        authMode: "userPool",
        itemId,
        selectedIngredients: [
          JSON.stringify({ ingredientId: "1", quantity: 1 }),
          JSON.stringify({ ingredientId: "2", quantity: 1 }),
          JSON.stringify({ ingredientId: "3", quantity: 2 }),
        ],
        quantity: 1,
      };
      console.log("will fetchParams:", fetchParams);
      Amplify.configure(outputs);
      const client = generateClient<Schema>();
      try {
        const response = await client.mutations.addToCart(fetchParams);
        console.log("response", response);
        store.setProp("isLoading", false);
      } catch (error) {
        console.log("error", error);
        store.setProp("isLoading", false);
      }
    },
  }))
  .views((store) => ({
    get episodesForList() {
      return "store.favoritesOnly ? store.favorites : store.items";
    },

    // hasFavorite(item: Item) {
    //   return store.favorites.includes(item);
    // },
  }))
  .actions((store) => ({
    // toggleFavorite(item: Item) {
    //   if (store.hasFavorite(item)) {
    //     store.removeFavorite(item);
    //   } else {
    //     store.addFavorite(item);
    //   }
    // },
  }));

export interface CartStore extends Instance<typeof CartStoreModel> {}
export interface CartStoreSnapshot extends SnapshotOut<typeof CartStoreModel> {}
