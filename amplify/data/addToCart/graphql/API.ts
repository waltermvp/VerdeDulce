/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ModelCartFilterInput = {
  and?: Array< ModelCartFilterInput | null > | null,
  authenticated?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelCartFilterInput | null,
  or?: Array< ModelCartFilterInput | null > | null,
  totalAmount?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCartConnection = {
  __typename: "ModelCartConnection",
  items:  Array<Cart | null >,
  nextToken?: string | null,
};

export type Cart = {
  __typename: "Cart",
  authenticated?: boolean | null,
  createdAt: string,
  id: string,
  totalAmount?: number | null,
  updatedAt: string,
  userId: string,
};

export type CartIngredient = {
  __typename: "CartIngredient",
  cartItemId: string,
  createdAt: string,
  id: string,
  ingredientId: string,
  quantity: number,
  updatedAt: string,
};

export type CartItem = {
  __typename: "CartItem",
  cartId: string,
  createdAt: string,
  id: string,
  itemId: string,
  quantity: number,
  updatedAt: string,
  userId: string,
};

export type Category = {
  __typename: "Category",
  createdAt: string,
  description?: string | null,
  id: string,
  name: string,
  updatedAt: string,
};

export type Ingredient = {
  __typename: "Ingredient",
  available?: boolean | null,
  calories?: number | null,
  carbs?: number | null,
  createdAt: string,
  id: string,
  item?: Item | null,
  itemId?: string | null,
  name: string,
  price?: number | null,
  protein?: number | null,
  updatedAt: string,
};

export type Item = {
  __typename: "Item",
  available?: boolean | null,
  calories?: number | null,
  carbs?: number | null,
  categoryId?: string | null,
  createdAt: string,
  description?: string | null,
  id: string,
  ingredients?: ModelIngredientConnection | null,
  metaData?: string | null,
  name: string,
  price?: number | null,
  protein?: number | null,
  updatedAt: string,
  url?: string | null,
};

export type ModelIngredientConnection = {
  __typename: "ModelIngredientConnection",
  items:  Array<Ingredient | null >,
  nextToken?: string | null,
};

export type Order = {
  __typename: "Order",
  createdAt: string,
  id: string,
  orderNumber: string,
  status?: string | null,
  totalAmount?: number | null,
  updatedAt: string,
  userId?: string | null,
};

export type OrderIngredient = {
  __typename: "OrderIngredient",
  createdAt: string,
  id: string,
  ingredientId: string,
  orderItemId?: string | null,
  quantity: number,
  updatedAt: string,
};

export type OrderItem = {
  __typename: "OrderItem",
  createdAt: string,
  id: string,
  itemId: string,
  orderId?: string | null,
  quantity: number,
  updatedAt: string,
};

export type Review = {
  __typename: "Review",
  comment?: string | null,
  createdAt: string,
  id: string,
  itemId?: string | null,
  rating: number,
  updatedAt: string,
  userId?: string | null,
};

export type User = {
  __typename: "User",
  available?: boolean | null,
  createdAt: string,
  email: string,
  id: string,
  password: string,
  role?: string | null,
  updatedAt: string,
  username: string,
};

export type ModelCartIngredientFilterInput = {
  and?: Array< ModelCartIngredientFilterInput | null > | null,
  cartItemId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  ingredientId?: ModelIDInput | null,
  not?: ModelCartIngredientFilterInput | null,
  or?: Array< ModelCartIngredientFilterInput | null > | null,
  quantity?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelCartIngredientConnection = {
  __typename: "ModelCartIngredientConnection",
  items:  Array<CartIngredient | null >,
  nextToken?: string | null,
};

export type ModelCartItemFilterInput = {
  and?: Array< ModelCartItemFilterInput | null > | null,
  cartId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  itemId?: ModelIDInput | null,
  not?: ModelCartItemFilterInput | null,
  or?: Array< ModelCartItemFilterInput | null > | null,
  quantity?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
};

export type ModelCartItemConnection = {
  __typename: "ModelCartItemConnection",
  items:  Array<CartItem | null >,
  nextToken?: string | null,
};

export type ModelCategoryFilterInput = {
  and?: Array< ModelCategoryFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelCategoryFilterInput | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type ModelIngredientFilterInput = {
  and?: Array< ModelIngredientFilterInput | null > | null,
  available?: ModelBooleanInput | null,
  calories?: ModelIntInput | null,
  carbs?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  itemId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelIngredientFilterInput | null,
  or?: Array< ModelIngredientFilterInput | null > | null,
  price?: ModelIntInput | null,
  protein?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelItemFilterInput = {
  and?: Array< ModelItemFilterInput | null > | null,
  available?: ModelBooleanInput | null,
  calories?: ModelIntInput | null,
  carbs?: ModelIntInput | null,
  categoryId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  metaData?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelItemFilterInput | null,
  or?: Array< ModelItemFilterInput | null > | null,
  price?: ModelIntInput | null,
  protein?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  url?: ModelStringInput | null,
};

export type ModelItemConnection = {
  __typename: "ModelItemConnection",
  items:  Array<Item | null >,
  nextToken?: string | null,
};

export type ModelOrderIngredientFilterInput = {
  and?: Array< ModelOrderIngredientFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  ingredientId?: ModelIDInput | null,
  not?: ModelOrderIngredientFilterInput | null,
  or?: Array< ModelOrderIngredientFilterInput | null > | null,
  orderItemId?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelOrderIngredientConnection = {
  __typename: "ModelOrderIngredientConnection",
  items:  Array<OrderIngredient | null >,
  nextToken?: string | null,
};

export type ModelOrderItemFilterInput = {
  and?: Array< ModelOrderItemFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  itemId?: ModelIDInput | null,
  not?: ModelOrderItemFilterInput | null,
  or?: Array< ModelOrderItemFilterInput | null > | null,
  orderId?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelOrderItemConnection = {
  __typename: "ModelOrderItemConnection",
  items:  Array<OrderItem | null >,
  nextToken?: string | null,
};

export type ModelOrderFilterInput = {
  and?: Array< ModelOrderFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelOrderFilterInput | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  orderNumber?: ModelStringInput | null,
  status?: ModelStringInput | null,
  totalAmount?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type ModelReviewFilterInput = {
  and?: Array< ModelReviewFilterInput | null > | null,
  comment?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  itemId?: ModelIDInput | null,
  not?: ModelReviewFilterInput | null,
  or?: Array< ModelReviewFilterInput | null > | null,
  rating?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelReviewConnection = {
  __typename: "ModelReviewConnection",
  items:  Array<Review | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  and?: Array< ModelUserFilterInput | null > | null,
  available?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelUserFilterInput | null,
  or?: Array< ModelUserFilterInput | null > | null,
  password?: ModelStringInput | null,
  role?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type AddToCartResponse = {
  __typename: "AddToCartResponse",
  cartItems?: Array< string | null > | null,
};

export type ModelCartConditionInput = {
  and?: Array< ModelCartConditionInput | null > | null,
  authenticated?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelCartConditionInput | null,
  or?: Array< ModelCartConditionInput | null > | null,
  totalAmount?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateCartInput = {
  authenticated?: boolean | null,
  id?: string | null,
  totalAmount?: number | null,
  userId: string,
};

export type ModelCartIngredientConditionInput = {
  and?: Array< ModelCartIngredientConditionInput | null > | null,
  cartItemId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  ingredientId?: ModelIDInput | null,
  not?: ModelCartIngredientConditionInput | null,
  or?: Array< ModelCartIngredientConditionInput | null > | null,
  quantity?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateCartIngredientInput = {
  cartItemId: string,
  id?: string | null,
  ingredientId: string,
  quantity: number,
};

export type ModelCartItemConditionInput = {
  and?: Array< ModelCartItemConditionInput | null > | null,
  cartId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  itemId?: ModelIDInput | null,
  not?: ModelCartItemConditionInput | null,
  or?: Array< ModelCartItemConditionInput | null > | null,
  quantity?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
};

export type CreateCartItemInput = {
  cartId: string,
  id?: string | null,
  itemId: string,
  quantity: number,
  userId: string,
};

export type ModelCategoryConditionInput = {
  and?: Array< ModelCategoryConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelCategoryConditionInput | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateCategoryInput = {
  description?: string | null,
  id?: string | null,
  name: string,
};

export type ModelIngredientConditionInput = {
  and?: Array< ModelIngredientConditionInput | null > | null,
  available?: ModelBooleanInput | null,
  calories?: ModelIntInput | null,
  carbs?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  itemId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelIngredientConditionInput | null,
  or?: Array< ModelIngredientConditionInput | null > | null,
  price?: ModelIntInput | null,
  protein?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateIngredientInput = {
  available?: boolean | null,
  calories?: number | null,
  carbs?: number | null,
  id?: string | null,
  itemId?: string | null,
  name: string,
  price?: number | null,
  protein?: number | null,
};

export type ModelItemConditionInput = {
  and?: Array< ModelItemConditionInput | null > | null,
  available?: ModelBooleanInput | null,
  calories?: ModelIntInput | null,
  carbs?: ModelIntInput | null,
  categoryId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  metaData?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelItemConditionInput | null,
  or?: Array< ModelItemConditionInput | null > | null,
  price?: ModelIntInput | null,
  protein?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  url?: ModelStringInput | null,
};

export type CreateItemInput = {
  available?: boolean | null,
  calories?: number | null,
  carbs?: number | null,
  categoryId?: string | null,
  description?: string | null,
  id?: string | null,
  metaData?: string | null,
  name: string,
  price?: number | null,
  protein?: number | null,
  url?: string | null,
};

export type ModelOrderConditionInput = {
  and?: Array< ModelOrderConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelOrderConditionInput | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  orderNumber?: ModelStringInput | null,
  status?: ModelStringInput | null,
  totalAmount?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateOrderInput = {
  id?: string | null,
  orderNumber: string,
  status?: string | null,
  totalAmount?: number | null,
  userId?: string | null,
};

export type ModelOrderIngredientConditionInput = {
  and?: Array< ModelOrderIngredientConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  ingredientId?: ModelIDInput | null,
  not?: ModelOrderIngredientConditionInput | null,
  or?: Array< ModelOrderIngredientConditionInput | null > | null,
  orderItemId?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateOrderIngredientInput = {
  id?: string | null,
  ingredientId: string,
  orderItemId?: string | null,
  quantity: number,
};

export type ModelOrderItemConditionInput = {
  and?: Array< ModelOrderItemConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  itemId?: ModelIDInput | null,
  not?: ModelOrderItemConditionInput | null,
  or?: Array< ModelOrderItemConditionInput | null > | null,
  orderId?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateOrderItemInput = {
  id?: string | null,
  itemId: string,
  orderId?: string | null,
  quantity: number,
};

export type ModelReviewConditionInput = {
  and?: Array< ModelReviewConditionInput | null > | null,
  comment?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  itemId?: ModelIDInput | null,
  not?: ModelReviewConditionInput | null,
  or?: Array< ModelReviewConditionInput | null > | null,
  rating?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateReviewInput = {
  comment?: string | null,
  id?: string | null,
  itemId?: string | null,
  rating: number,
  userId?: string | null,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  available?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  not?: ModelUserConditionInput | null,
  or?: Array< ModelUserConditionInput | null > | null,
  password?: ModelStringInput | null,
  role?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
};

export type CreateUserInput = {
  available?: boolean | null,
  email: string,
  id?: string | null,
  password: string,
  role?: string | null,
  username: string,
};

export type DeleteCartInput = {
  id: string,
};

export type DeleteCartIngredientInput = {
  id: string,
};

export type DeleteCartItemInput = {
  id: string,
};

export type DeleteCategoryInput = {
  id: string,
};

export type DeleteIngredientInput = {
  id: string,
};

export type DeleteItemInput = {
  id: string,
};

export type DeleteOrderInput = {
  id: string,
};

export type DeleteOrderIngredientInput = {
  id: string,
};

export type DeleteOrderItemInput = {
  id: string,
};

export type DeleteReviewInput = {
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type LoadInitialDataReturnType = {
  __typename: "LoadInitialDataReturnType",
  message?: string | null,
};

export type RegisterResponse = {
  __typename: "RegisterResponse",
  email?: string | null,
  metadata?: string | null,
};

export type UpdateCartInput = {
  authenticated?: boolean | null,
  id: string,
  totalAmount?: number | null,
  userId?: string | null,
};

export type UpdateCartIngredientInput = {
  cartItemId?: string | null,
  id: string,
  ingredientId?: string | null,
  quantity?: number | null,
};

export type UpdateCartItemInput = {
  cartId?: string | null,
  id: string,
  itemId?: string | null,
  quantity?: number | null,
  userId?: string | null,
};

export type UpdateCategoryInput = {
  description?: string | null,
  id: string,
  name?: string | null,
};

export type UpdateIngredientInput = {
  available?: boolean | null,
  calories?: number | null,
  carbs?: number | null,
  id: string,
  itemId?: string | null,
  name?: string | null,
  price?: number | null,
  protein?: number | null,
};

export type UpdateItemInput = {
  available?: boolean | null,
  calories?: number | null,
  carbs?: number | null,
  categoryId?: string | null,
  description?: string | null,
  id: string,
  metaData?: string | null,
  name?: string | null,
  price?: number | null,
  protein?: number | null,
  url?: string | null,
};

export type UpdateOrderInput = {
  id: string,
  orderNumber?: string | null,
  status?: string | null,
  totalAmount?: number | null,
  userId?: string | null,
};

export type UpdateOrderIngredientInput = {
  id: string,
  ingredientId?: string | null,
  orderItemId?: string | null,
  quantity?: number | null,
};

export type UpdateOrderItemInput = {
  id: string,
  itemId?: string | null,
  orderId?: string | null,
  quantity?: number | null,
};

export type UpdateReviewInput = {
  comment?: string | null,
  id: string,
  itemId?: string | null,
  rating?: number | null,
  userId?: string | null,
};

export type UpdateUserInput = {
  available?: boolean | null,
  email?: string | null,
  id: string,
  password?: string | null,
  role?: string | null,
  username?: string | null,
};

export type ModelSubscriptionCartFilterInput = {
  and?: Array< ModelSubscriptionCartFilterInput | null > | null,
  authenticated?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionCartFilterInput | null > | null,
  totalAmount?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCartIngredientFilterInput = {
  and?: Array< ModelSubscriptionCartIngredientFilterInput | null > | null,
  cartItemId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  ingredientId?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionCartIngredientFilterInput | null > | null,
  quantity?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionCartItemFilterInput = {
  and?: Array< ModelSubscriptionCartItemFilterInput | null > | null,
  cartId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  itemId?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionCartItemFilterInput | null > | null,
  quantity?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionIngredientFilterInput = {
  and?: Array< ModelSubscriptionIngredientFilterInput | null > | null,
  available?: ModelSubscriptionBooleanInput | null,
  calories?: ModelSubscriptionIntInput | null,
  carbs?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  itemId?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionIngredientFilterInput | null > | null,
  price?: ModelSubscriptionIntInput | null,
  protein?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionItemFilterInput = {
  and?: Array< ModelSubscriptionItemFilterInput | null > | null,
  available?: ModelSubscriptionBooleanInput | null,
  calories?: ModelSubscriptionIntInput | null,
  carbs?: ModelSubscriptionIntInput | null,
  categoryId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  metaData?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionItemFilterInput | null > | null,
  price?: ModelSubscriptionIntInput | null,
  protein?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionOrderFilterInput = {
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  orderNumber?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  totalAmount?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionOrderIngredientFilterInput = {
  and?: Array< ModelSubscriptionOrderIngredientFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  ingredientId?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionOrderIngredientFilterInput | null > | null,
  orderItemId?: ModelSubscriptionIDInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionOrderItemFilterInput = {
  and?: Array< ModelSubscriptionOrderItemFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  itemId?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionOrderItemFilterInput | null > | null,
  orderId?: ModelSubscriptionIDInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionReviewFilterInput = {
  and?: Array< ModelSubscriptionReviewFilterInput | null > | null,
  comment?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  itemId?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionReviewFilterInput | null > | null,
  rating?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  available?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  password?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
};

export type CartByUserQueryVariables = {
  filter?: ModelCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  userId: string,
};

export type CartByUserQuery = {
  cartByUser?:  {
    __typename: "ModelCartConnection",
    items:  Array< {
      __typename: "Cart",
      authenticated?: boolean | null,
      createdAt: string,
      id: string,
      totalAmount?: number | null,
      updatedAt: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCartQueryVariables = {
  id: string,
};

export type GetCartQuery = {
  getCart?:  {
    __typename: "Cart",
    authenticated?: boolean | null,
    createdAt: string,
    id: string,
    totalAmount?: number | null,
    updatedAt: string,
    userId: string,
  } | null,
};

export type GetCartIngredientQueryVariables = {
  id: string,
};

export type GetCartIngredientQuery = {
  getCartIngredient?:  {
    __typename: "CartIngredient",
    cartItemId: string,
    createdAt: string,
    id: string,
    ingredientId: string,
    quantity: number,
    updatedAt: string,
  } | null,
};

export type GetCartItemQueryVariables = {
  id: string,
};

export type GetCartItemQuery = {
  getCartItem?:  {
    __typename: "CartItem",
    cartId: string,
    createdAt: string,
    id: string,
    itemId: string,
    quantity: number,
    updatedAt: string,
    userId: string,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    updatedAt: string,
  } | null,
};

export type GetIngredientQueryVariables = {
  id: string,
};

export type GetIngredientQuery = {
  getIngredient?:  {
    __typename: "Ingredient",
    available?: boolean | null,
    calories?: number | null,
    carbs?: number | null,
    createdAt: string,
    id: string,
    item?:  {
      __typename: "Item",
      available?: boolean | null,
      calories?: number | null,
      carbs?: number | null,
      categoryId?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      metaData?: string | null,
      name: string,
      price?: number | null,
      protein?: number | null,
      updatedAt: string,
      url?: string | null,
    } | null,
    itemId?: string | null,
    name: string,
    price?: number | null,
    protein?: number | null,
    updatedAt: string,
  } | null,
};

export type GetItemQueryVariables = {
  id: string,
};

export type GetItemQuery = {
  getItem?:  {
    __typename: "Item",
    available?: boolean | null,
    calories?: number | null,
    carbs?: number | null,
    categoryId?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    ingredients?:  {
      __typename: "ModelIngredientConnection",
      nextToken?: string | null,
    } | null,
    metaData?: string | null,
    name: string,
    price?: number | null,
    protein?: number | null,
    updatedAt: string,
    url?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    createdAt: string,
    id: string,
    orderNumber: string,
    status?: string | null,
    totalAmount?: number | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type GetOrderIngredientQueryVariables = {
  id: string,
};

export type GetOrderIngredientQuery = {
  getOrderIngredient?:  {
    __typename: "OrderIngredient",
    createdAt: string,
    id: string,
    ingredientId: string,
    orderItemId?: string | null,
    quantity: number,
    updatedAt: string,
  } | null,
};

export type GetOrderItemQueryVariables = {
  id: string,
};

export type GetOrderItemQuery = {
  getOrderItem?:  {
    __typename: "OrderItem",
    createdAt: string,
    id: string,
    itemId: string,
    orderId?: string | null,
    quantity: number,
    updatedAt: string,
  } | null,
};

export type GetReviewQueryVariables = {
  id: string,
};

export type GetReviewQuery = {
  getReview?:  {
    __typename: "Review",
    comment?: string | null,
    createdAt: string,
    id: string,
    itemId?: string | null,
    rating: number,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    available?: boolean | null,
    createdAt: string,
    email: string,
    id: string,
    password: string,
    role?: string | null,
    updatedAt: string,
    username: string,
  } | null,
};

export type ListCartIngredientsQueryVariables = {
  filter?: ModelCartIngredientFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCartIngredientsQuery = {
  listCartIngredients?:  {
    __typename: "ModelCartIngredientConnection",
    items:  Array< {
      __typename: "CartIngredient",
      cartItemId: string,
      createdAt: string,
      id: string,
      ingredientId: string,
      quantity: number,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCartItemByCartIdQueryVariables = {
  cartId: string,
  filter?: ModelCartItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCartItemByCartIdQuery = {
  listCartItemByCartId?:  {
    __typename: "ModelCartItemConnection",
    items:  Array< {
      __typename: "CartItem",
      cartId: string,
      createdAt: string,
      id: string,
      itemId: string,
      quantity: number,
      updatedAt: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCartItemByUserIdQueryVariables = {
  filter?: ModelCartItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  userId: string,
};

export type ListCartItemByUserIdQuery = {
  listCartItemByUserId?:  {
    __typename: "ModelCartItemConnection",
    items:  Array< {
      __typename: "CartItem",
      cartId: string,
      createdAt: string,
      id: string,
      itemId: string,
      quantity: number,
      updatedAt: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCartItemsQueryVariables = {
  filter?: ModelCartItemFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCartItemsQuery = {
  listCartItems?:  {
    __typename: "ModelCartItemConnection",
    items:  Array< {
      __typename: "CartItem",
      cartId: string,
      createdAt: string,
      id: string,
      itemId: string,
      quantity: number,
      updatedAt: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCartsQueryVariables = {
  filter?: ModelCartFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCartsQuery = {
  listCarts?:  {
    __typename: "ModelCartConnection",
    items:  Array< {
      __typename: "Cart",
      authenticated?: boolean | null,
      createdAt: string,
      id: string,
      totalAmount?: number | null,
      updatedAt: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      createdAt: string,
      description?: string | null,
      id: string,
      name: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListIngredientsQueryVariables = {
  filter?: ModelIngredientFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListIngredientsQuery = {
  listIngredients?:  {
    __typename: "ModelIngredientConnection",
    items:  Array< {
      __typename: "Ingredient",
      available?: boolean | null,
      calories?: number | null,
      carbs?: number | null,
      createdAt: string,
      id: string,
      itemId?: string | null,
      name: string,
      price?: number | null,
      protein?: number | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListItemsQuery = {
  listItems?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      available?: boolean | null,
      calories?: number | null,
      carbs?: number | null,
      categoryId?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      metaData?: string | null,
      name: string,
      price?: number | null,
      protein?: number | null,
      updatedAt: string,
      url?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOrderIngredientsQueryVariables = {
  filter?: ModelOrderIngredientFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListOrderIngredientsQuery = {
  listOrderIngredients?:  {
    __typename: "ModelOrderIngredientConnection",
    items:  Array< {
      __typename: "OrderIngredient",
      createdAt: string,
      id: string,
      ingredientId: string,
      orderItemId?: string | null,
      quantity: number,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOrderItemsQueryVariables = {
  filter?: ModelOrderItemFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListOrderItemsQuery = {
  listOrderItems?:  {
    __typename: "ModelOrderItemConnection",
    items:  Array< {
      __typename: "OrderItem",
      createdAt: string,
      id: string,
      itemId: string,
      orderId?: string | null,
      quantity: number,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      createdAt: string,
      id: string,
      orderNumber: string,
      status?: string | null,
      totalAmount?: number | null,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListReviewsQueryVariables = {
  filter?: ModelReviewFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListReviewsQuery = {
  listReviews?:  {
    __typename: "ModelReviewConnection",
    items:  Array< {
      __typename: "Review",
      comment?: string | null,
      createdAt: string,
      id: string,
      itemId?: string | null,
      rating: number,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      available?: boolean | null,
      createdAt: string,
      email: string,
      id: string,
      password: string,
      role?: string | null,
      updatedAt: string,
      username: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AddToCartMutationVariables = {
  itemId?: string | null,
  quantity?: number | null,
  selectedIngredients?: Array< string | null > | null,
};

export type AddToCartMutation = {
  addToCart?:  {
    __typename: "AddToCartResponse",
    cartItems?: Array< string | null > | null,
  } | null,
};

export type CreateCartMutationVariables = {
  condition?: ModelCartConditionInput | null,
  input: CreateCartInput,
};

export type CreateCartMutation = {
  createCart?:  {
    __typename: "Cart",
    authenticated?: boolean | null,
    createdAt: string,
    id: string,
    totalAmount?: number | null,
    updatedAt: string,
    userId: string,
  } | null,
};

export type CreateCartIngredientMutationVariables = {
  condition?: ModelCartIngredientConditionInput | null,
  input: CreateCartIngredientInput,
};

export type CreateCartIngredientMutation = {
  createCartIngredient?:  {
    __typename: "CartIngredient",
    cartItemId: string,
    createdAt: string,
    id: string,
    ingredientId: string,
    quantity: number,
    updatedAt: string,
  } | null,
};

export type CreateCartItemMutationVariables = {
  condition?: ModelCartItemConditionInput | null,
  input: CreateCartItemInput,
};

export type CreateCartItemMutation = {
  createCartItem?:  {
    __typename: "CartItem",
    cartId: string,
    createdAt: string,
    id: string,
    itemId: string,
    quantity: number,
    updatedAt: string,
    userId: string,
  } | null,
};

export type CreateCategoryMutationVariables = {
  condition?: ModelCategoryConditionInput | null,
  input: CreateCategoryInput,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    updatedAt: string,
  } | null,
};

export type CreateIngredientMutationVariables = {
  condition?: ModelIngredientConditionInput | null,
  input: CreateIngredientInput,
};

export type CreateIngredientMutation = {
  createIngredient?:  {
    __typename: "Ingredient",
    available?: boolean | null,
    calories?: number | null,
    carbs?: number | null,
    createdAt: string,
    id: string,
    item?:  {
      __typename: "Item",
      available?: boolean | null,
      calories?: number | null,
      carbs?: number | null,
      categoryId?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      metaData?: string | null,
      name: string,
      price?: number | null,
      protein?: number | null,
      updatedAt: string,
      url?: string | null,
    } | null,
    itemId?: string | null,
    name: string,
    price?: number | null,
    protein?: number | null,
    updatedAt: string,
  } | null,
};

export type CreateItemMutationVariables = {
  condition?: ModelItemConditionInput | null,
  input: CreateItemInput,
};

export type CreateItemMutation = {
  createItem?:  {
    __typename: "Item",
    available?: boolean | null,
    calories?: number | null,
    carbs?: number | null,
    categoryId?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    ingredients?:  {
      __typename: "ModelIngredientConnection",
      nextToken?: string | null,
    } | null,
    metaData?: string | null,
    name: string,
    price?: number | null,
    protein?: number | null,
    updatedAt: string,
    url?: string | null,
  } | null,
};

export type CreateOrderMutationVariables = {
  condition?: ModelOrderConditionInput | null,
  input: CreateOrderInput,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    createdAt: string,
    id: string,
    orderNumber: string,
    status?: string | null,
    totalAmount?: number | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type CreateOrderIngredientMutationVariables = {
  condition?: ModelOrderIngredientConditionInput | null,
  input: CreateOrderIngredientInput,
};

export type CreateOrderIngredientMutation = {
  createOrderIngredient?:  {
    __typename: "OrderIngredient",
    createdAt: string,
    id: string,
    ingredientId: string,
    orderItemId?: string | null,
    quantity: number,
    updatedAt: string,
  } | null,
};

export type CreateOrderItemMutationVariables = {
  condition?: ModelOrderItemConditionInput | null,
  input: CreateOrderItemInput,
};

export type CreateOrderItemMutation = {
  createOrderItem?:  {
    __typename: "OrderItem",
    createdAt: string,
    id: string,
    itemId: string,
    orderId?: string | null,
    quantity: number,
    updatedAt: string,
  } | null,
};

export type CreateReviewMutationVariables = {
  condition?: ModelReviewConditionInput | null,
  input: CreateReviewInput,
};

export type CreateReviewMutation = {
  createReview?:  {
    __typename: "Review",
    comment?: string | null,
    createdAt: string,
    id: string,
    itemId?: string | null,
    rating: number,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    available?: boolean | null,
    createdAt: string,
    email: string,
    id: string,
    password: string,
    role?: string | null,
    updatedAt: string,
    username: string,
  } | null,
};

export type DeleteCartMutationVariables = {
  condition?: ModelCartConditionInput | null,
  input: DeleteCartInput,
};

export type DeleteCartMutation = {
  deleteCart?:  {
    __typename: "Cart",
    authenticated?: boolean | null,
    createdAt: string,
    id: string,
    totalAmount?: number | null,
    updatedAt: string,
    userId: string,
  } | null,
};

export type DeleteCartIngredientMutationVariables = {
  condition?: ModelCartIngredientConditionInput | null,
  input: DeleteCartIngredientInput,
};

export type DeleteCartIngredientMutation = {
  deleteCartIngredient?:  {
    __typename: "CartIngredient",
    cartItemId: string,
    createdAt: string,
    id: string,
    ingredientId: string,
    quantity: number,
    updatedAt: string,
  } | null,
};

export type DeleteCartItemMutationVariables = {
  condition?: ModelCartItemConditionInput | null,
  input: DeleteCartItemInput,
};

export type DeleteCartItemMutation = {
  deleteCartItem?:  {
    __typename: "CartItem",
    cartId: string,
    createdAt: string,
    id: string,
    itemId: string,
    quantity: number,
    updatedAt: string,
    userId: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  condition?: ModelCategoryConditionInput | null,
  input: DeleteCategoryInput,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    updatedAt: string,
  } | null,
};

export type DeleteIngredientMutationVariables = {
  condition?: ModelIngredientConditionInput | null,
  input: DeleteIngredientInput,
};

export type DeleteIngredientMutation = {
  deleteIngredient?:  {
    __typename: "Ingredient",
    available?: boolean | null,
    calories?: number | null,
    carbs?: number | null,
    createdAt: string,
    id: string,
    item?:  {
      __typename: "Item",
      available?: boolean | null,
      calories?: number | null,
      carbs?: number | null,
      categoryId?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      metaData?: string | null,
      name: string,
      price?: number | null,
      protein?: number | null,
      updatedAt: string,
      url?: string | null,
    } | null,
    itemId?: string | null,
    name: string,
    price?: number | null,
    protein?: number | null,
    updatedAt: string,
  } | null,
};

export type DeleteItemMutationVariables = {
  condition?: ModelItemConditionInput | null,
  input: DeleteItemInput,
};

export type DeleteItemMutation = {
  deleteItem?:  {
    __typename: "Item",
    available?: boolean | null,
    calories?: number | null,
    carbs?: number | null,
    categoryId?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    ingredients?:  {
      __typename: "ModelIngredientConnection",
      nextToken?: string | null,
    } | null,
    metaData?: string | null,
    name: string,
    price?: number | null,
    protein?: number | null,
    updatedAt: string,
    url?: string | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  condition?: ModelOrderConditionInput | null,
  input: DeleteOrderInput,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    createdAt: string,
    id: string,
    orderNumber: string,
    status?: string | null,
    totalAmount?: number | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type DeleteOrderIngredientMutationVariables = {
  condition?: ModelOrderIngredientConditionInput | null,
  input: DeleteOrderIngredientInput,
};

export type DeleteOrderIngredientMutation = {
  deleteOrderIngredient?:  {
    __typename: "OrderIngredient",
    createdAt: string,
    id: string,
    ingredientId: string,
    orderItemId?: string | null,
    quantity: number,
    updatedAt: string,
  } | null,
};

export type DeleteOrderItemMutationVariables = {
  condition?: ModelOrderItemConditionInput | null,
  input: DeleteOrderItemInput,
};

export type DeleteOrderItemMutation = {
  deleteOrderItem?:  {
    __typename: "OrderItem",
    createdAt: string,
    id: string,
    itemId: string,
    orderId?: string | null,
    quantity: number,
    updatedAt: string,
  } | null,
};

export type DeleteReviewMutationVariables = {
  condition?: ModelReviewConditionInput | null,
  input: DeleteReviewInput,
};

export type DeleteReviewMutation = {
  deleteReview?:  {
    __typename: "Review",
    comment?: string | null,
    createdAt: string,
    id: string,
    itemId?: string | null,
    rating: number,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    available?: boolean | null,
    createdAt: string,
    email: string,
    id: string,
    password: string,
    role?: string | null,
    updatedAt: string,
    username: string,
  } | null,
};

export type LoadInitialDataMutationVariables = {
  clear?: boolean | null,
};

export type LoadInitialDataMutation = {
  loadInitialData?:  {
    __typename: "LoadInitialDataReturnType",
    message?: string | null,
  } | null,
};

export type RegisterUserMutationVariables = {
  email?: string | null,
};

export type RegisterUserMutation = {
  registerUser?:  {
    __typename: "RegisterResponse",
    email?: string | null,
    metadata?: string | null,
  } | null,
};

export type UpdateCartMutationVariables = {
  condition?: ModelCartConditionInput | null,
  input: UpdateCartInput,
};

export type UpdateCartMutation = {
  updateCart?:  {
    __typename: "Cart",
    authenticated?: boolean | null,
    createdAt: string,
    id: string,
    totalAmount?: number | null,
    updatedAt: string,
    userId: string,
  } | null,
};

export type UpdateCartIngredientMutationVariables = {
  condition?: ModelCartIngredientConditionInput | null,
  input: UpdateCartIngredientInput,
};

export type UpdateCartIngredientMutation = {
  updateCartIngredient?:  {
    __typename: "CartIngredient",
    cartItemId: string,
    createdAt: string,
    id: string,
    ingredientId: string,
    quantity: number,
    updatedAt: string,
  } | null,
};

export type UpdateCartItemMutationVariables = {
  condition?: ModelCartItemConditionInput | null,
  input: UpdateCartItemInput,
};

export type UpdateCartItemMutation = {
  updateCartItem?:  {
    __typename: "CartItem",
    cartId: string,
    createdAt: string,
    id: string,
    itemId: string,
    quantity: number,
    updatedAt: string,
    userId: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  condition?: ModelCategoryConditionInput | null,
  input: UpdateCategoryInput,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    updatedAt: string,
  } | null,
};

export type UpdateIngredientMutationVariables = {
  condition?: ModelIngredientConditionInput | null,
  input: UpdateIngredientInput,
};

export type UpdateIngredientMutation = {
  updateIngredient?:  {
    __typename: "Ingredient",
    available?: boolean | null,
    calories?: number | null,
    carbs?: number | null,
    createdAt: string,
    id: string,
    item?:  {
      __typename: "Item",
      available?: boolean | null,
      calories?: number | null,
      carbs?: number | null,
      categoryId?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      metaData?: string | null,
      name: string,
      price?: number | null,
      protein?: number | null,
      updatedAt: string,
      url?: string | null,
    } | null,
    itemId?: string | null,
    name: string,
    price?: number | null,
    protein?: number | null,
    updatedAt: string,
  } | null,
};

export type UpdateItemMutationVariables = {
  condition?: ModelItemConditionInput | null,
  input: UpdateItemInput,
};

export type UpdateItemMutation = {
  updateItem?:  {
    __typename: "Item",
    available?: boolean | null,
    calories?: number | null,
    carbs?: number | null,
    categoryId?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    ingredients?:  {
      __typename: "ModelIngredientConnection",
      nextToken?: string | null,
    } | null,
    metaData?: string | null,
    name: string,
    price?: number | null,
    protein?: number | null,
    updatedAt: string,
    url?: string | null,
  } | null,
};

export type UpdateOrderMutationVariables = {
  condition?: ModelOrderConditionInput | null,
  input: UpdateOrderInput,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    createdAt: string,
    id: string,
    orderNumber: string,
    status?: string | null,
    totalAmount?: number | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type UpdateOrderIngredientMutationVariables = {
  condition?: ModelOrderIngredientConditionInput | null,
  input: UpdateOrderIngredientInput,
};

export type UpdateOrderIngredientMutation = {
  updateOrderIngredient?:  {
    __typename: "OrderIngredient",
    createdAt: string,
    id: string,
    ingredientId: string,
    orderItemId?: string | null,
    quantity: number,
    updatedAt: string,
  } | null,
};

export type UpdateOrderItemMutationVariables = {
  condition?: ModelOrderItemConditionInput | null,
  input: UpdateOrderItemInput,
};

export type UpdateOrderItemMutation = {
  updateOrderItem?:  {
    __typename: "OrderItem",
    createdAt: string,
    id: string,
    itemId: string,
    orderId?: string | null,
    quantity: number,
    updatedAt: string,
  } | null,
};

export type UpdateReviewMutationVariables = {
  condition?: ModelReviewConditionInput | null,
  input: UpdateReviewInput,
};

export type UpdateReviewMutation = {
  updateReview?:  {
    __typename: "Review",
    comment?: string | null,
    createdAt: string,
    id: string,
    itemId?: string | null,
    rating: number,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    available?: boolean | null,
    createdAt: string,
    email: string,
    id: string,
    password: string,
    role?: string | null,
    updatedAt: string,
    username: string,
  } | null,
};

export type OnCreateCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnCreateCartSubscription = {
  onCreateCart?:  {
    __typename: "Cart",
    authenticated?: boolean | null,
    createdAt: string,
    id: string,
    totalAmount?: number | null,
    updatedAt: string,
    userId: string,
  } | null,
};

export type OnCreateCartIngredientSubscriptionVariables = {
  filter?: ModelSubscriptionCartIngredientFilterInput | null,
};

export type OnCreateCartIngredientSubscription = {
  onCreateCartIngredient?:  {
    __typename: "CartIngredient",
    cartItemId: string,
    createdAt: string,
    id: string,
    ingredientId: string,
    quantity: number,
    updatedAt: string,
  } | null,
};

export type OnCreateCartItemSubscriptionVariables = {
  filter?: ModelSubscriptionCartItemFilterInput | null,
};

export type OnCreateCartItemSubscription = {
  onCreateCartItem?:  {
    __typename: "CartItem",
    cartId: string,
    createdAt: string,
    id: string,
    itemId: string,
    quantity: number,
    updatedAt: string,
    userId: string,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    updatedAt: string,
  } | null,
};

export type OnCreateIngredientSubscriptionVariables = {
  filter?: ModelSubscriptionIngredientFilterInput | null,
};

export type OnCreateIngredientSubscription = {
  onCreateIngredient?:  {
    __typename: "Ingredient",
    available?: boolean | null,
    calories?: number | null,
    carbs?: number | null,
    createdAt: string,
    id: string,
    item?:  {
      __typename: "Item",
      available?: boolean | null,
      calories?: number | null,
      carbs?: number | null,
      categoryId?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      metaData?: string | null,
      name: string,
      price?: number | null,
      protein?: number | null,
      updatedAt: string,
      url?: string | null,
    } | null,
    itemId?: string | null,
    name: string,
    price?: number | null,
    protein?: number | null,
    updatedAt: string,
  } | null,
};

export type OnCreateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnCreateItemSubscription = {
  onCreateItem?:  {
    __typename: "Item",
    available?: boolean | null,
    calories?: number | null,
    carbs?: number | null,
    categoryId?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    ingredients?:  {
      __typename: "ModelIngredientConnection",
      nextToken?: string | null,
    } | null,
    metaData?: string | null,
    name: string,
    price?: number | null,
    protein?: number | null,
    updatedAt: string,
    url?: string | null,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    createdAt: string,
    id: string,
    orderNumber: string,
    status?: string | null,
    totalAmount?: number | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type OnCreateOrderIngredientSubscriptionVariables = {
  filter?: ModelSubscriptionOrderIngredientFilterInput | null,
};

export type OnCreateOrderIngredientSubscription = {
  onCreateOrderIngredient?:  {
    __typename: "OrderIngredient",
    createdAt: string,
    id: string,
    ingredientId: string,
    orderItemId?: string | null,
    quantity: number,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderItemSubscriptionVariables = {
  filter?: ModelSubscriptionOrderItemFilterInput | null,
};

export type OnCreateOrderItemSubscription = {
  onCreateOrderItem?:  {
    __typename: "OrderItem",
    createdAt: string,
    id: string,
    itemId: string,
    orderId?: string | null,
    quantity: number,
    updatedAt: string,
  } | null,
};

export type OnCreateReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnCreateReviewSubscription = {
  onCreateReview?:  {
    __typename: "Review",
    comment?: string | null,
    createdAt: string,
    id: string,
    itemId?: string | null,
    rating: number,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    available?: boolean | null,
    createdAt: string,
    email: string,
    id: string,
    password: string,
    role?: string | null,
    updatedAt: string,
    username: string,
  } | null,
};

export type OnDeleteCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnDeleteCartSubscription = {
  onDeleteCart?:  {
    __typename: "Cart",
    authenticated?: boolean | null,
    createdAt: string,
    id: string,
    totalAmount?: number | null,
    updatedAt: string,
    userId: string,
  } | null,
};

export type OnDeleteCartIngredientSubscriptionVariables = {
  filter?: ModelSubscriptionCartIngredientFilterInput | null,
};

export type OnDeleteCartIngredientSubscription = {
  onDeleteCartIngredient?:  {
    __typename: "CartIngredient",
    cartItemId: string,
    createdAt: string,
    id: string,
    ingredientId: string,
    quantity: number,
    updatedAt: string,
  } | null,
};

export type OnDeleteCartItemSubscriptionVariables = {
  filter?: ModelSubscriptionCartItemFilterInput | null,
};

export type OnDeleteCartItemSubscription = {
  onDeleteCartItem?:  {
    __typename: "CartItem",
    cartId: string,
    createdAt: string,
    id: string,
    itemId: string,
    quantity: number,
    updatedAt: string,
    userId: string,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIngredientSubscriptionVariables = {
  filter?: ModelSubscriptionIngredientFilterInput | null,
};

export type OnDeleteIngredientSubscription = {
  onDeleteIngredient?:  {
    __typename: "Ingredient",
    available?: boolean | null,
    calories?: number | null,
    carbs?: number | null,
    createdAt: string,
    id: string,
    item?:  {
      __typename: "Item",
      available?: boolean | null,
      calories?: number | null,
      carbs?: number | null,
      categoryId?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      metaData?: string | null,
      name: string,
      price?: number | null,
      protein?: number | null,
      updatedAt: string,
      url?: string | null,
    } | null,
    itemId?: string | null,
    name: string,
    price?: number | null,
    protein?: number | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnDeleteItemSubscription = {
  onDeleteItem?:  {
    __typename: "Item",
    available?: boolean | null,
    calories?: number | null,
    carbs?: number | null,
    categoryId?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    ingredients?:  {
      __typename: "ModelIngredientConnection",
      nextToken?: string | null,
    } | null,
    metaData?: string | null,
    name: string,
    price?: number | null,
    protein?: number | null,
    updatedAt: string,
    url?: string | null,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    createdAt: string,
    id: string,
    orderNumber: string,
    status?: string | null,
    totalAmount?: number | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type OnDeleteOrderIngredientSubscriptionVariables = {
  filter?: ModelSubscriptionOrderIngredientFilterInput | null,
};

export type OnDeleteOrderIngredientSubscription = {
  onDeleteOrderIngredient?:  {
    __typename: "OrderIngredient",
    createdAt: string,
    id: string,
    ingredientId: string,
    orderItemId?: string | null,
    quantity: number,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderItemSubscriptionVariables = {
  filter?: ModelSubscriptionOrderItemFilterInput | null,
};

export type OnDeleteOrderItemSubscription = {
  onDeleteOrderItem?:  {
    __typename: "OrderItem",
    createdAt: string,
    id: string,
    itemId: string,
    orderId?: string | null,
    quantity: number,
    updatedAt: string,
  } | null,
};

export type OnDeleteReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnDeleteReviewSubscription = {
  onDeleteReview?:  {
    __typename: "Review",
    comment?: string | null,
    createdAt: string,
    id: string,
    itemId?: string | null,
    rating: number,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    available?: boolean | null,
    createdAt: string,
    email: string,
    id: string,
    password: string,
    role?: string | null,
    updatedAt: string,
    username: string,
  } | null,
};

export type OnUpdateCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnUpdateCartSubscription = {
  onUpdateCart?:  {
    __typename: "Cart",
    authenticated?: boolean | null,
    createdAt: string,
    id: string,
    totalAmount?: number | null,
    updatedAt: string,
    userId: string,
  } | null,
};

export type OnUpdateCartIngredientSubscriptionVariables = {
  filter?: ModelSubscriptionCartIngredientFilterInput | null,
};

export type OnUpdateCartIngredientSubscription = {
  onUpdateCartIngredient?:  {
    __typename: "CartIngredient",
    cartItemId: string,
    createdAt: string,
    id: string,
    ingredientId: string,
    quantity: number,
    updatedAt: string,
  } | null,
};

export type OnUpdateCartItemSubscriptionVariables = {
  filter?: ModelSubscriptionCartItemFilterInput | null,
};

export type OnUpdateCartItemSubscription = {
  onUpdateCartItem?:  {
    __typename: "CartItem",
    cartId: string,
    createdAt: string,
    id: string,
    itemId: string,
    quantity: number,
    updatedAt: string,
    userId: string,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIngredientSubscriptionVariables = {
  filter?: ModelSubscriptionIngredientFilterInput | null,
};

export type OnUpdateIngredientSubscription = {
  onUpdateIngredient?:  {
    __typename: "Ingredient",
    available?: boolean | null,
    calories?: number | null,
    carbs?: number | null,
    createdAt: string,
    id: string,
    item?:  {
      __typename: "Item",
      available?: boolean | null,
      calories?: number | null,
      carbs?: number | null,
      categoryId?: string | null,
      createdAt: string,
      description?: string | null,
      id: string,
      metaData?: string | null,
      name: string,
      price?: number | null,
      protein?: number | null,
      updatedAt: string,
      url?: string | null,
    } | null,
    itemId?: string | null,
    name: string,
    price?: number | null,
    protein?: number | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnUpdateItemSubscription = {
  onUpdateItem?:  {
    __typename: "Item",
    available?: boolean | null,
    calories?: number | null,
    carbs?: number | null,
    categoryId?: string | null,
    createdAt: string,
    description?: string | null,
    id: string,
    ingredients?:  {
      __typename: "ModelIngredientConnection",
      nextToken?: string | null,
    } | null,
    metaData?: string | null,
    name: string,
    price?: number | null,
    protein?: number | null,
    updatedAt: string,
    url?: string | null,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    createdAt: string,
    id: string,
    orderNumber: string,
    status?: string | null,
    totalAmount?: number | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type OnUpdateOrderIngredientSubscriptionVariables = {
  filter?: ModelSubscriptionOrderIngredientFilterInput | null,
};

export type OnUpdateOrderIngredientSubscription = {
  onUpdateOrderIngredient?:  {
    __typename: "OrderIngredient",
    createdAt: string,
    id: string,
    ingredientId: string,
    orderItemId?: string | null,
    quantity: number,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderItemSubscriptionVariables = {
  filter?: ModelSubscriptionOrderItemFilterInput | null,
};

export type OnUpdateOrderItemSubscription = {
  onUpdateOrderItem?:  {
    __typename: "OrderItem",
    createdAt: string,
    id: string,
    itemId: string,
    orderId?: string | null,
    quantity: number,
    updatedAt: string,
  } | null,
};

export type OnUpdateReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnUpdateReviewSubscription = {
  onUpdateReview?:  {
    __typename: "Review",
    comment?: string | null,
    createdAt: string,
    id: string,
    itemId?: string | null,
    rating: number,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    available?: boolean | null,
    createdAt: string,
    email: string,
    id: string,
    password: string,
    role?: string | null,
    updatedAt: string,
    username: string,
  } | null,
};
