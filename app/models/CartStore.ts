import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { Item, ItemModel } from "./Item";
import { withSetPropAction } from "./helpers/withSetPropAction";
import { useEffect } from "react";
import { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import { imageCDNURL } from "../../app/utils/linkbuilder";

// type Item = Schema["Item"]["type"]

export const CartStoreModel = types
  .model("CartStore")
  .props({
    cardId: types.identifier,
    items: types.array(ItemModel),
    // favoritesOnly: false,
  })
  .actions(withSetPropAction)
  .actions((store) => ({
    async fetchEpisodes() {
      // const response = await api.getEpisodes()
      // if (response.kind === "ok") {
      //   store.setProp("episodes", response.episodes)
      // } else {
      //   console.error(`Error fetching episodes: ${JSON.stringify(response)}`)
      // }
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
