import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { api } from "../services/api"
import { Item, ItemModel } from "./Item"
import { withSetPropAction } from "./helpers/withSetPropAction"

export const EpisodeStoreModel = types
  .model("EpisodeStore")
  .props({
    items: types.array(ItemModel),
    favorites: types.array(types.reference(ItemModel)),
    favoritesOnly: false,
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
    addFavorite(Item: Item) {
      store.favorites.push(Item)
    },
    removeFavorite(Item: Item) {
      store.favorites.remove(Item)
    },
  }))
  .views((store) => ({
    get episodesForList() {
      return store.favoritesOnly ? store.favorites : store.items
    },

    hasFavorite(Item: Item) {
      return store.favorites.includes(Item)
    },
  }))
  .actions((store) => ({
    toggleFavorite(Item: Item) {
      if (store.hasFavorite(Item)) {
        store.removeFavorite(Item)
      } else {
        store.addFavorite(Item)
      }
    },
  }))

export interface EpisodeStore extends Instance<typeof EpisodeStoreModel> {}
export interface EpisodeStoreSnapshot extends SnapshotOut<typeof EpisodeStoreModel> {}
