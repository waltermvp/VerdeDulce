import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { api } from "../services/api"
import { Item, ItemModel } from "./Item"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { useEffect } from "react"
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"
import { Schema } from "amplify/data/resource"
import { generateClient } from "aws-amplify/api"
import { imageCDNURL } from "app/utils/linkbuilder"

// type Item = Schema["Item"]["type"]

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
    addFavorite(item: Item) {
      store.favorites.push(item)
    },
    removeFavorite(item: Item) {
      store.favorites.remove(item)
    },
  }))
  .views((store) => ({
    get episodesForList() {
      return store.favoritesOnly ? store.favorites : store.items
    },

    hasFavorite(item: Item) {
      return store.favorites.includes(item)
    },
  }))
  .actions((store) => ({
    toggleFavorite(item: Item) {
      if (store.hasFavorite(item)) {
        store.removeFavorite(item)
      } else {
        store.addFavorite(item)
      }
    },
  }))

export interface EpisodeStore extends Instance<typeof EpisodeStoreModel> {}
export interface EpisodeStoreSnapshot extends SnapshotOut<typeof EpisodeStoreModel> {}

export const useReactQuerySubscription = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  })
  const client = generateClient<Schema>()

  useEffect(() => {
    const sub = client.models.Item.observeQuery({
      // filter: { displayId: { eq: displayID } },
      authMode: "apiKey",
    }).subscribe({
      next: ({ items, isSynced }) => {
        console.log("Items.observeQuery items", items.length, isSynced)
        if (isSynced) {
          // const data = JSON.parse(items)
          console.log("data", items)
          console.log("data", typeof items)
          const queryKey = [...items.entity, data.id].filter(Boolean)
          queryClient.invalidateQueries({ queryKey })
        }
      },
    })

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
      sub.unsubscribe()
    }
  }, [queryClient])
}

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
export const transformData = (data) => {
  // Group items by their category
  const groupedData = data.reduce((acc, item) => {
    // console.log("item", item)
    // console.log("item", item[0])
    const category = item.category?.toLowerCase() // Assuming categories are distinct and well-defined
    if (!acc[category]) {
      acc[category] = []
    }

    acc[category].push({
      id: item.id,
      name: item.name,
      description: item.description,
      price: `$${item.price?.toFixed(2)}`,
      url: item.url, //imageCDNURL(item.url.split("/").pop()), // Extracting the filename from the URL for use in imageCDNURL
    })
    return acc
  }, {})

  // Transform the grouped data into the desired structure
  const final = Object.entries(groupedData).map(([key, list], index) => ({
    title: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize the category name
    key: key,
    data: [
      {
        key: key,
        list: list.map((item, idx) => ({
          ...item,
          // id: (index * 100 + idx + 1).toString(), // Generating unique IDs for the list items
        })),
      },
    ],
  }))

  return final
}
export const transformDataForSectionList = (data) => {
  // Group items by their category
  const groupedData = data.reduce((acc, item) => {
    const category = item.category?.toLowerCase() // Assuming categories are distinct and well-defined
    if (!acc[category]) {
      acc[category] = []
    }

    acc[category].push({
      id: item.id,
      name: item.name,
      description: item.description,
      available: item.available,
      category: item.category,
      metadata: item.metadata,
      price: `$${item.price.toFixed(2)}`,
      calories: item.calories,
      carbs: item.calories,
      protein: item.protein,
      activated: item.activated,
      fat: item.fat,
      url: item.url, // Extracting the filename from the URL for use in imageCDNURL
    })
    return acc
  }, {})
  // console.log(item, "item")
  // console.log(category, "category")

  // const  sectionlistData = groupedData.map((category) => ({
  //   title: category,
  //   data: groupedData[category],
  // }))
  // Transform the grouped data into the SectionList structure
  const groupedFinal = Object.keys(groupedData).map((category) => ({
    title: category,
    data: groupedData[category],
  }))

  return groupedFinal
}
