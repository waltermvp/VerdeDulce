/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCart = /* GraphQL */ `subscription OnCreateCart($filter: ModelSubscriptionCartFilterInput) {
  onCreateCart(filter: $filter) {
    cartItems {
      nextToken
      __typename
    }
    createdAt
    id
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
` as GeneratedSubscription<
  APITypes.OnCreateCartSubscriptionVariables,
  APITypes.OnCreateCartSubscription
>;
export const onCreateCartIngredient = /* GraphQL */ `subscription OnCreateCartIngredient(
  $filter: ModelSubscriptionCartIngredientFilterInput
) {
  onCreateCartIngredient(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCartIngredientSubscriptionVariables,
  APITypes.OnCreateCartIngredientSubscription
>;
export const onCreateCartItem = /* GraphQL */ `subscription OnCreateCartItem($filter: ModelSubscriptionCartItemFilterInput) {
  onCreateCartItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCartItemSubscriptionVariables,
  APITypes.OnCreateCartItemSubscription
>;
export const onCreateCategory = /* GraphQL */ `subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onCreateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCategorySubscriptionVariables,
  APITypes.OnCreateCategorySubscription
>;
export const onCreateIngredient = /* GraphQL */ `subscription OnCreateIngredient(
  $filter: ModelSubscriptionIngredientFilterInput
) {
  onCreateIngredient(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateIngredientSubscriptionVariables,
  APITypes.OnCreateIngredientSubscription
>;
export const onCreateItem = /* GraphQL */ `subscription OnCreateItem($filter: ModelSubscriptionItemFilterInput) {
  onCreateItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateItemSubscriptionVariables,
  APITypes.OnCreateItemSubscription
>;
export const onCreateOrder = /* GraphQL */ `subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onCreateOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrderSubscriptionVariables,
  APITypes.OnCreateOrderSubscription
>;
export const onCreateOrderIngredient = /* GraphQL */ `subscription OnCreateOrderIngredient(
  $filter: ModelSubscriptionOrderIngredientFilterInput
) {
  onCreateOrderIngredient(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrderIngredientSubscriptionVariables,
  APITypes.OnCreateOrderIngredientSubscription
>;
export const onCreateOrderItem = /* GraphQL */ `subscription OnCreateOrderItem($filter: ModelSubscriptionOrderItemFilterInput) {
  onCreateOrderItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrderItemSubscriptionVariables,
  APITypes.OnCreateOrderItemSubscription
>;
export const onCreateReview = /* GraphQL */ `subscription OnCreateReview($filter: ModelSubscriptionReviewFilterInput) {
  onCreateReview(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateReviewSubscriptionVariables,
  APITypes.OnCreateReviewSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onDeleteCart = /* GraphQL */ `subscription OnDeleteCart($filter: ModelSubscriptionCartFilterInput) {
  onDeleteCart(filter: $filter) {
    cartItems {
      nextToken
      __typename
    }
    createdAt
    id
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
` as GeneratedSubscription<
  APITypes.OnDeleteCartSubscriptionVariables,
  APITypes.OnDeleteCartSubscription
>;
export const onDeleteCartIngredient = /* GraphQL */ `subscription OnDeleteCartIngredient(
  $filter: ModelSubscriptionCartIngredientFilterInput
) {
  onDeleteCartIngredient(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCartIngredientSubscriptionVariables,
  APITypes.OnDeleteCartIngredientSubscription
>;
export const onDeleteCartItem = /* GraphQL */ `subscription OnDeleteCartItem($filter: ModelSubscriptionCartItemFilterInput) {
  onDeleteCartItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCartItemSubscriptionVariables,
  APITypes.OnDeleteCartItemSubscription
>;
export const onDeleteCategory = /* GraphQL */ `subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onDeleteCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCategorySubscriptionVariables,
  APITypes.OnDeleteCategorySubscription
>;
export const onDeleteIngredient = /* GraphQL */ `subscription OnDeleteIngredient(
  $filter: ModelSubscriptionIngredientFilterInput
) {
  onDeleteIngredient(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteIngredientSubscriptionVariables,
  APITypes.OnDeleteIngredientSubscription
>;
export const onDeleteItem = /* GraphQL */ `subscription OnDeleteItem($filter: ModelSubscriptionItemFilterInput) {
  onDeleteItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteItemSubscriptionVariables,
  APITypes.OnDeleteItemSubscription
>;
export const onDeleteOrder = /* GraphQL */ `subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
  onDeleteOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrderSubscriptionVariables,
  APITypes.OnDeleteOrderSubscription
>;
export const onDeleteOrderIngredient = /* GraphQL */ `subscription OnDeleteOrderIngredient(
  $filter: ModelSubscriptionOrderIngredientFilterInput
) {
  onDeleteOrderIngredient(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrderIngredientSubscriptionVariables,
  APITypes.OnDeleteOrderIngredientSubscription
>;
export const onDeleteOrderItem = /* GraphQL */ `subscription OnDeleteOrderItem($filter: ModelSubscriptionOrderItemFilterInput) {
  onDeleteOrderItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrderItemSubscriptionVariables,
  APITypes.OnDeleteOrderItemSubscription
>;
export const onDeleteReview = /* GraphQL */ `subscription OnDeleteReview($filter: ModelSubscriptionReviewFilterInput) {
  onDeleteReview(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteReviewSubscriptionVariables,
  APITypes.OnDeleteReviewSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onUpdateCart = /* GraphQL */ `subscription OnUpdateCart($filter: ModelSubscriptionCartFilterInput) {
  onUpdateCart(filter: $filter) {
    cartItems {
      nextToken
      __typename
    }
    createdAt
    id
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
` as GeneratedSubscription<
  APITypes.OnUpdateCartSubscriptionVariables,
  APITypes.OnUpdateCartSubscription
>;
export const onUpdateCartIngredient = /* GraphQL */ `subscription OnUpdateCartIngredient(
  $filter: ModelSubscriptionCartIngredientFilterInput
) {
  onUpdateCartIngredient(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCartIngredientSubscriptionVariables,
  APITypes.OnUpdateCartIngredientSubscription
>;
export const onUpdateCartItem = /* GraphQL */ `subscription OnUpdateCartItem($filter: ModelSubscriptionCartItemFilterInput) {
  onUpdateCartItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCartItemSubscriptionVariables,
  APITypes.OnUpdateCartItemSubscription
>;
export const onUpdateCategory = /* GraphQL */ `subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onUpdateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCategorySubscriptionVariables,
  APITypes.OnUpdateCategorySubscription
>;
export const onUpdateIngredient = /* GraphQL */ `subscription OnUpdateIngredient(
  $filter: ModelSubscriptionIngredientFilterInput
) {
  onUpdateIngredient(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateIngredientSubscriptionVariables,
  APITypes.OnUpdateIngredientSubscription
>;
export const onUpdateItem = /* GraphQL */ `subscription OnUpdateItem($filter: ModelSubscriptionItemFilterInput) {
  onUpdateItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateItemSubscriptionVariables,
  APITypes.OnUpdateItemSubscription
>;
export const onUpdateOrder = /* GraphQL */ `subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onUpdateOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrderSubscriptionVariables,
  APITypes.OnUpdateOrderSubscription
>;
export const onUpdateOrderIngredient = /* GraphQL */ `subscription OnUpdateOrderIngredient(
  $filter: ModelSubscriptionOrderIngredientFilterInput
) {
  onUpdateOrderIngredient(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrderIngredientSubscriptionVariables,
  APITypes.OnUpdateOrderIngredientSubscription
>;
export const onUpdateOrderItem = /* GraphQL */ `subscription OnUpdateOrderItem($filter: ModelSubscriptionOrderItemFilterInput) {
  onUpdateOrderItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrderItemSubscriptionVariables,
  APITypes.OnUpdateOrderItemSubscription
>;
export const onUpdateReview = /* GraphQL */ `subscription OnUpdateReview($filter: ModelSubscriptionReviewFilterInput) {
  onUpdateReview(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateReviewSubscriptionVariables,
  APITypes.OnUpdateReviewSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
