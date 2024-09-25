/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const addToCart = /* GraphQL */ `mutation AddToCart(
  $itemId: ID
  $quantity: Int
  $selectedIngredients: [AWSJSON]
) {
  addToCart(
    itemId: $itemId
    quantity: $quantity
    selectedIngredients: $selectedIngredients
  ) {
    cartItems
    __typename
  }
}
` as GeneratedMutation<
  APITypes.AddToCartMutationVariables,
  APITypes.AddToCartMutation
>;
export const createCart = /* GraphQL */ `mutation CreateCart(
  $condition: ModelCartConditionInput
  $input: CreateCartInput!
) {
  createCart(condition: $condition, input: $input) {
    authenticated
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
` as GeneratedMutation<
  APITypes.CreateCartMutationVariables,
  APITypes.CreateCartMutation
>;
export const createCartIngredient = /* GraphQL */ `mutation CreateCartIngredient(
  $condition: ModelCartIngredientConditionInput
  $input: CreateCartIngredientInput!
) {
  createCartIngredient(condition: $condition, input: $input) {
    cartItem {
      cartId
      createdAt
      id
      itemId
      quantity
      updatedAt
      userId
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
` as GeneratedMutation<
  APITypes.CreateCartIngredientMutationVariables,
  APITypes.CreateCartIngredientMutation
>;
export const createCartItem = /* GraphQL */ `mutation CreateCartItem(
  $condition: ModelCartItemConditionInput
  $input: CreateCartItemInput!
) {
  createCartItem(condition: $condition, input: $input) {
    cart {
      authenticated
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
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCartItemMutationVariables,
  APITypes.CreateCartItemMutation
>;
export const createCategory = /* GraphQL */ `mutation CreateCategory(
  $condition: ModelCategoryConditionInput
  $input: CreateCategoryInput!
) {
  createCategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateCategoryMutationVariables,
  APITypes.CreateCategoryMutation
>;
export const createIngredient = /* GraphQL */ `mutation CreateIngredient(
  $condition: ModelIngredientConditionInput
  $input: CreateIngredientInput!
) {
  createIngredient(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateIngredientMutationVariables,
  APITypes.CreateIngredientMutation
>;
export const createItem = /* GraphQL */ `mutation CreateItem(
  $condition: ModelItemConditionInput
  $input: CreateItemInput!
) {
  createItem(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateItemMutationVariables,
  APITypes.CreateItemMutation
>;
export const createOrder = /* GraphQL */ `mutation CreateOrder(
  $condition: ModelOrderConditionInput
  $input: CreateOrderInput!
) {
  createOrder(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateOrderMutationVariables,
  APITypes.CreateOrderMutation
>;
export const createOrderIngredient = /* GraphQL */ `mutation CreateOrderIngredient(
  $condition: ModelOrderIngredientConditionInput
  $input: CreateOrderIngredientInput!
) {
  createOrderIngredient(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateOrderIngredientMutationVariables,
  APITypes.CreateOrderIngredientMutation
>;
export const createOrderItem = /* GraphQL */ `mutation CreateOrderItem(
  $condition: ModelOrderItemConditionInput
  $input: CreateOrderItemInput!
) {
  createOrderItem(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateOrderItemMutationVariables,
  APITypes.CreateOrderItemMutation
>;
export const createReview = /* GraphQL */ `mutation CreateReview(
  $condition: ModelReviewConditionInput
  $input: CreateReviewInput!
) {
  createReview(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateReviewMutationVariables,
  APITypes.CreateReviewMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $condition: ModelUserConditionInput
  $input: CreateUserInput!
) {
  createUser(condition: $condition, input: $input) {
    available
    cart {
      authenticated
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const deleteCart = /* GraphQL */ `mutation DeleteCart(
  $condition: ModelCartConditionInput
  $input: DeleteCartInput!
) {
  deleteCart(condition: $condition, input: $input) {
    authenticated
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
` as GeneratedMutation<
  APITypes.DeleteCartMutationVariables,
  APITypes.DeleteCartMutation
>;
export const deleteCartIngredient = /* GraphQL */ `mutation DeleteCartIngredient(
  $condition: ModelCartIngredientConditionInput
  $input: DeleteCartIngredientInput!
) {
  deleteCartIngredient(condition: $condition, input: $input) {
    cartItem {
      cartId
      createdAt
      id
      itemId
      quantity
      updatedAt
      userId
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
` as GeneratedMutation<
  APITypes.DeleteCartIngredientMutationVariables,
  APITypes.DeleteCartIngredientMutation
>;
export const deleteCartItem = /* GraphQL */ `mutation DeleteCartItem(
  $condition: ModelCartItemConditionInput
  $input: DeleteCartItemInput!
) {
  deleteCartItem(condition: $condition, input: $input) {
    cart {
      authenticated
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
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCartItemMutationVariables,
  APITypes.DeleteCartItemMutation
>;
export const deleteCategory = /* GraphQL */ `mutation DeleteCategory(
  $condition: ModelCategoryConditionInput
  $input: DeleteCategoryInput!
) {
  deleteCategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteCategoryMutationVariables,
  APITypes.DeleteCategoryMutation
>;
export const deleteIngredient = /* GraphQL */ `mutation DeleteIngredient(
  $condition: ModelIngredientConditionInput
  $input: DeleteIngredientInput!
) {
  deleteIngredient(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteIngredientMutationVariables,
  APITypes.DeleteIngredientMutation
>;
export const deleteItem = /* GraphQL */ `mutation DeleteItem(
  $condition: ModelItemConditionInput
  $input: DeleteItemInput!
) {
  deleteItem(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteItemMutationVariables,
  APITypes.DeleteItemMutation
>;
export const deleteOrder = /* GraphQL */ `mutation DeleteOrder(
  $condition: ModelOrderConditionInput
  $input: DeleteOrderInput!
) {
  deleteOrder(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteOrderMutationVariables,
  APITypes.DeleteOrderMutation
>;
export const deleteOrderIngredient = /* GraphQL */ `mutation DeleteOrderIngredient(
  $condition: ModelOrderIngredientConditionInput
  $input: DeleteOrderIngredientInput!
) {
  deleteOrderIngredient(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteOrderIngredientMutationVariables,
  APITypes.DeleteOrderIngredientMutation
>;
export const deleteOrderItem = /* GraphQL */ `mutation DeleteOrderItem(
  $condition: ModelOrderItemConditionInput
  $input: DeleteOrderItemInput!
) {
  deleteOrderItem(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteOrderItemMutationVariables,
  APITypes.DeleteOrderItemMutation
>;
export const deleteReview = /* GraphQL */ `mutation DeleteReview(
  $condition: ModelReviewConditionInput
  $input: DeleteReviewInput!
) {
  deleteReview(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteReviewMutationVariables,
  APITypes.DeleteReviewMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $condition: ModelUserConditionInput
  $input: DeleteUserInput!
) {
  deleteUser(condition: $condition, input: $input) {
    available
    cart {
      authenticated
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const registerUser = /* GraphQL */ `mutation RegisterUser($email: String) {
  registerUser(email: $email) {
    email
    metadata
    __typename
  }
}
` as GeneratedMutation<
  APITypes.RegisterUserMutationVariables,
  APITypes.RegisterUserMutation
>;
export const updateCart = /* GraphQL */ `mutation UpdateCart(
  $condition: ModelCartConditionInput
  $input: UpdateCartInput!
) {
  updateCart(condition: $condition, input: $input) {
    authenticated
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
` as GeneratedMutation<
  APITypes.UpdateCartMutationVariables,
  APITypes.UpdateCartMutation
>;
export const updateCartIngredient = /* GraphQL */ `mutation UpdateCartIngredient(
  $condition: ModelCartIngredientConditionInput
  $input: UpdateCartIngredientInput!
) {
  updateCartIngredient(condition: $condition, input: $input) {
    cartItem {
      cartId
      createdAt
      id
      itemId
      quantity
      updatedAt
      userId
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
` as GeneratedMutation<
  APITypes.UpdateCartIngredientMutationVariables,
  APITypes.UpdateCartIngredientMutation
>;
export const updateCartItem = /* GraphQL */ `mutation UpdateCartItem(
  $condition: ModelCartItemConditionInput
  $input: UpdateCartItemInput!
) {
  updateCartItem(condition: $condition, input: $input) {
    cart {
      authenticated
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
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCartItemMutationVariables,
  APITypes.UpdateCartItemMutation
>;
export const updateCategory = /* GraphQL */ `mutation UpdateCategory(
  $condition: ModelCategoryConditionInput
  $input: UpdateCategoryInput!
) {
  updateCategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateCategoryMutationVariables,
  APITypes.UpdateCategoryMutation
>;
export const updateIngredient = /* GraphQL */ `mutation UpdateIngredient(
  $condition: ModelIngredientConditionInput
  $input: UpdateIngredientInput!
) {
  updateIngredient(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateIngredientMutationVariables,
  APITypes.UpdateIngredientMutation
>;
export const updateItem = /* GraphQL */ `mutation UpdateItem(
  $condition: ModelItemConditionInput
  $input: UpdateItemInput!
) {
  updateItem(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateItemMutationVariables,
  APITypes.UpdateItemMutation
>;
export const updateOrder = /* GraphQL */ `mutation UpdateOrder(
  $condition: ModelOrderConditionInput
  $input: UpdateOrderInput!
) {
  updateOrder(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateOrderMutationVariables,
  APITypes.UpdateOrderMutation
>;
export const updateOrderIngredient = /* GraphQL */ `mutation UpdateOrderIngredient(
  $condition: ModelOrderIngredientConditionInput
  $input: UpdateOrderIngredientInput!
) {
  updateOrderIngredient(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateOrderIngredientMutationVariables,
  APITypes.UpdateOrderIngredientMutation
>;
export const updateOrderItem = /* GraphQL */ `mutation UpdateOrderItem(
  $condition: ModelOrderItemConditionInput
  $input: UpdateOrderItemInput!
) {
  updateOrderItem(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateOrderItemMutationVariables,
  APITypes.UpdateOrderItemMutation
>;
export const updateReview = /* GraphQL */ `mutation UpdateReview(
  $condition: ModelReviewConditionInput
  $input: UpdateReviewInput!
) {
  updateReview(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateReviewMutationVariables,
  APITypes.UpdateReviewMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $condition: ModelUserConditionInput
  $input: UpdateUserInput!
) {
  updateUser(condition: $condition, input: $input) {
    available
    cart {
      authenticated
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
