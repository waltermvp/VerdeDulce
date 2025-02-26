import { Instance, SnapshotOut, types } from "mobx-state-tree";
// import { api } from "../services/api"
import { Item, ItemModel } from "./Item";
import { withSetPropAction } from "./helpers/withSetPropAction";
import { useEffect } from "react";
import { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/api";

// type Item = Schema["Item"]["type"]

export const CreateItemStoreModel = types
  .model("CreateItemStore")
  .props({
    name: "",
    category: "",
    description: "",
    price: 0,
    calories: 0,
    url: "",
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
    setData(data: any) {
      const { name, category, description, price, calories, url } = data;
      typeof name !== "undefined" && store.setProp("name", name);
      typeof category !== "undefined" && store.setProp("category", category);
      typeof description !== "undefined" &&
        store.setProp("description", description);
      typeof price !== "undefined" && store.setProp("price", price);
      typeof calories !== "undefined" && store.setProp("calories", calories);
      typeof url !== "undefined" && store.setProp("url", url);
      // store.setProp("url", data.url)
    },
    // addFavorite(item: Item) {
    //   store.favorites.push(item)
    // },
    // removeFavorite(item: Item) {
    //   store.favorites.remove(item)
    // },
  }))

  .views((store) => ({
    get createItemReady() {
      return true;
      return !!(
        (
          store.name &&
          store.category &&
          store.description &&
          store.price &&
          store.calories
        )
        //  &&
        // store.url
      );
    },
    // get episodesForList() {
    //   return store.favoritesOnly ? store.favorites : store.items
    // },

    // hasFavorite(item: Item) {
    //   return store.favorites.includes(item)
    // },
  }))
  .actions((store) => ({
    // toggleFavorite(item: Item) {
    //   if (store.hasFavorite(item)) {
    //     store.removeFavorite(item)
    //   } else {
    //     store.addFavorite(item)
    //   }
    // },
  }));

export interface CreateItemStore
  extends Instance<typeof CreateItemStoreModel> {}
export interface CreateItemStoreSnapshot
  extends SnapshotOut<typeof CreateItemStoreModel> {}

export const useReactQuerySubscription = () => {
  const client = generateClient<Schema>();

  useEffect(() => {
    const sub = client.models.Item.observeQuery({
      // filter: { displayId: { eq: displayID } },
      authMode: "apiKey",
    }).subscribe({
      next: ({ items, isSynced }) => {
        console.log("Items.observeQuery items", items.length, isSynced);
        if (isSynced) {
          // const data = JSON.parse(items)
          // console.log("data", items)
          // console.log("data", typeof items)
          // const queryKey = [...items.entity, data.id].filter(Boolean)
          // queryClient.invalidateQueries({ queryKey })
        }
      },
    });

    // websocket.onmessage = (event) => {
    //   const data = JSON.parse(event.data)
    //   queryClient.setQueriesData(data.entity, (oldData) => {
    //     const update = (entity) =>
    //       entity.id === data.id
    //         ? { ...entity, ...data.payload }
    //         : entity
    //     return Array.isArray(oldData)
    //       ? oldData.map(update)
    //       : update(oldData)
    //   })
    // }
    return () => {
      sub.unsubscribe();
    };
  }, [client]);
};

// useEffect(() => {
//   if (!displayID) {
//     // setMode(MODE.MISSING_UDID)
//     return
//   }

//   const sub = client.models.Slide.observeQuery({
//     filter: { displayId: { eq: displayID } },
//     authMode: "userPool",
//   }).subscribe({
//     next: ({ items, isSynced }) => {
//       console.log("els.Slide.observeQuery items", items.length, isSynced)
//       if (isSynced) {
//         setSlides(items)
//         setSlideCount(items.length)
//       }
//     },
//   })
//   return () => {
//     sub.unsubscribe()
//   }
// }, [displayID])
