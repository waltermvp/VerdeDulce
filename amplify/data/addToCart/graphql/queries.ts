/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCart = /* GraphQL */ `query GetCart($id: ID!) {
  getCart(id: $id) {
    cartItems {
      nextToken
      __typename
    }
    createdAt
    id
    totalAmount
    updatedAt
    userId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetCartQueryVariables, APITypes.GetCartQuery>;
export const getCartIngredient =
  /* GraphQL */ `query GetCartIngredient($id: ID!) {
  getCartIngredient(id: $id) {
    cartItem {
      cartId
      createdAt
      id
      itemId
      quantity
      updatedAt
      __typename
    }
    cartItemId
    createdAt
    id
    ingredient {
      available
      calories
      createdAt
      id
      ingredientId
      itemId
      name
      price
      updatedAt
      __typename
    }
    ingredientId
    quantity
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
    APITypes.GetCartIngredientQueryVariables,
    APITypes.GetCartIngredientQuery
  >;
export const getCartItem = /* GraphQL */ `query GetCartItem($id: ID!) {
  getCartItem(id: $id) {
    cart {
      createdAt
      id
      totalAmount
      updatedAt
      userId
      __typename
    }
    cartId
    createdAt
    id
    item {
      available
      calories
      categoryId
      createdAt
      description
      id
      itemId
      metaData
      name
      price
      updatedAt
      url
      __typename
    }
    itemId
    quantity
    selectedIngredients {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCartItemQueryVariables,
  APITypes.GetCartItemQuery
>;
export const getCategory = /* GraphQL */ `query GetCategory($id: ID!) {
  getCategory(id: $id) {
    createdAt
    description
    id
    items {
      nextToken
      __typename
    }
    name
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCategoryQueryVariables,
  APITypes.GetCategoryQuery
>;
export const getIngredient = /* GraphQL */ `query GetIngredient($id: ID!) {
  getIngredient(id: $id) {
    available
    calories
    cartIngredient {
      nextToken
      __typename
    }
    createdAt
    id
    ingredientId
    item {
      available
      calories
      categoryId
      createdAt
      description
      id
      itemId
      metaData
      name
      price
      updatedAt
      url
      __typename
    }
    itemId
    name
    orderIngredient {
      nextToken
      __typename
    }
    price
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetIngredientQueryVariables,
  APITypes.GetIngredientQuery
>;
export const getItem = /* GraphQL */ `query GetItem($id: ID!) {
  getItem(id: $id) {
    available
    calories
    cartItem {
      nextToken
      __typename
    }
    category {
      createdAt
      description
      id
      name
      updatedAt
      __typename
    }
    categoryId
    createdAt
    description
    id
    ingredients {
      nextToken
      __typename
    }
    itemId
    metaData
    name
    orderItem {
      nextToken
      __typename
    }
    price
    review {
      nextToken
      __typename
    }
    updatedAt
    url
    __typename
  }
}
` as GeneratedQuery<APITypes.GetItemQueryVariables, APITypes.GetItemQuery>;
export const getOrder = /* GraphQL */ `query GetOrder($id: ID!) {
  getOrder(id: $id) {
    createdAt
    id
    orderItems {
      nextToken
      __typename
    }
    orderNumber
    status
    totalAmount
    updatedAt
    user {
      available
      createdAt
      email
      id
      password
      role
      updatedAt
      username
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetOrderQueryVariables, APITypes.GetOrderQuery>;
export const getOrderIngredient =
  /* GraphQL */ `query GetOrderIngredient($id: ID!) {
  getOrderIngredient(id: $id) {
    createdAt
    id
    ingredient {
      available
      calories
      createdAt
      id
      ingredientId
      itemId
      name
      price
      updatedAt
      __typename
    }
    ingredientId
    orderItem {
      createdAt
      id
      itemId
      orderId
      quantity
      updatedAt
      __typename
    }
    orderItemId
    quantity
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
    APITypes.GetOrderIngredientQueryVariables,
    APITypes.GetOrderIngredientQuery
  >;
export const getOrderItem = /* GraphQL */ `query GetOrderItem($id: ID!) {
  getOrderItem(id: $id) {
    createdAt
    id
    item {
      available
      calories
      categoryId
      createdAt
      description
      id
      itemId
      metaData
      name
      price
      updatedAt
      url
      __typename
    }
    itemId
    order {
      createdAt
      id
      orderNumber
      status
      totalAmount
      updatedAt
      userId
      __typename
    }
    orderId
    quantity
    selectedIngredients {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetOrderItemQueryVariables,
  APITypes.GetOrderItemQuery
>;
export const getReview = /* GraphQL */ `query GetReview($id: ID!) {
  getReview(id: $id) {
    comment
    createdAt
    id
    item {
      available
      calories
      categoryId
      createdAt
      description
      id
      itemId
      metaData
      name
      price
      updatedAt
      url
      __typename
    }
    itemId
    rating
    updatedAt
    user {
      available
      createdAt
      email
      id
      password
      role
      updatedAt
      username
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetReviewQueryVariables, APITypes.GetReviewQuery>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    available
    cart {
      createdAt
      id
      totalAmount
      updatedAt
      userId
      __typename
    }
    createdAt
    email
    id
    orders {
      nextToken
      __typename
    }
    password
    reviews {
      nextToken
      __typename
    }
    role
    updatedAt
    username
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listCartIngredients = /* GraphQL */ `query ListCartIngredients(
  $filter: ModelCartIngredientFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCartIngredients(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      cartItemId
      createdAt
      id
      ingredientId
      quantity
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCartIngredientsQueryVariables,
  APITypes.ListCartIngredientsQuery
>;
export const listCartItems = /* GraphQL */ `query ListCartItems(
  $filter: ModelCartItemFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCartItems(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      cartId
      createdAt
      id
      itemId
      quantity
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCartItemsQueryVariables,
  APITypes.ListCartItemsQuery
>;
export const listCarts = /* GraphQL */ `query ListCarts(
  $filter: ModelCartFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCarts(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      id
      totalAmount
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListCartsQueryVariables, APITypes.ListCartsQuery>;
export const listCategories = /* GraphQL */ `query ListCategories(
  $filter: ModelCategoryFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCategories(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      description
      id
      name
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategoriesQueryVariables,
  APITypes.ListCategoriesQuery
>;
export const listIngredients = /* GraphQL */ `query ListIngredients(
  $filter: ModelIngredientFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listIngredients(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      available
      calories
      createdAt
      id
      ingredientId
      itemId
      name
      price
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIngredientsQueryVariables,
  APITypes.ListIngredientsQuery
>;
export const listItems = /* GraphQL */ `query ListItems(
  $filter: ModelItemFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listItems(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      available
      calories
      categoryId
      createdAt
      description
      id
      itemId
      metaData
      name
      price
      updatedAt
      url
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListItemsQueryVariables, APITypes.ListItemsQuery>;
export const listOrderIngredients = /* GraphQL */ `query ListOrderIngredients(
  $filter: ModelOrderIngredientFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listOrderIngredients(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      id
      ingredientId
      orderItemId
      quantity
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrderIngredientsQueryVariables,
  APITypes.ListOrderIngredientsQuery
>;
export const listOrderItems = /* GraphQL */ `query ListOrderItems(
  $filter: ModelOrderItemFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listOrderItems(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      id
      itemId
      orderId
      quantity
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrderItemsQueryVariables,
  APITypes.ListOrderItemsQuery
>;
export const listOrders = /* GraphQL */ `query ListOrders(
  $filter: ModelOrderFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listOrders(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      id
      orderNumber
      status
      totalAmount
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersQueryVariables,
  APITypes.ListOrdersQuery
>;
export const listReviews = /* GraphQL */ `query ListReviews(
  $filter: ModelReviewFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listReviews(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      comment
      createdAt
      id
      itemId
      rating
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReviewsQueryVariables,
  APITypes.ListReviewsQuery
>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUsers(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      available
      createdAt
      email
      id
      password
      role
      updatedAt
      username
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
