import {
  type ClientSchema,
  a,
  defineData,
  defineFunction,
  secret, // 1.Import "defineFunction" to create new functions
} from "@aws-amplify/backend";

// 2. define a function
export const registerUserFunction = defineFunction({
  name: "registerUser",
  entry: "./registerUser/handler.ts",
  environment: {
    NAME: "World",
    API_ENDPOINT: "process.env.API_ENDPOINT",
    EMAILABLE_SECRET: secret("EMAILABLE_SECRET")
      ? secret("EMAILABLE_SECRET")
      : "another value",
  },
});

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any unauthenticated user can "create", "read", "update", 
and "delete" any "Todo" records.
=========================================================================*/
/// Main Schema
const schema = a.schema({
  // Item Model
  Item: a
    .model({
      id: a.id(), // Ensure the ID field is explicitly defined
      itemId: a.id().required(),
      name: a.string().required(),
      url: a.string(),
      description: a.string(),
      price: a.integer(),
      calories: a.integer(),
      categoryId: a.id(),
      category: a.belongsTo("Category", "categoryId"), // Relationship to Category
      ingredients: a.hasMany("Ingredient", "itemId"), // Relationship with Ingredient
      orderItem: a.hasMany("OrderItem", "itemId"), // Relationship with OrderItem
      review: a.hasMany("Review", "itemId"), // Relationship with Review
      metaData: a.json(),
      available: a.boolean(),
    })
    .authorization((allow) => [
      allow.guest(),
      allow.publicApiKey(),
      allow.authenticated(),
    ]),

  // Ingredient Model
  Ingredient: a
    .model({
      id: a.id(), // Ensure ID field for Ingredient
      ingredientId: a.id().required(),
      name: a.string().required(),
      price: a.integer(), // Optional price for additional cost
      calories: a.integer(),
      itemId: a.id(), // Foreign key to Item
      item: a.belongsTo("Item", "itemId"), // Belongs to Item
      orderIngredient: a.hasMany("OrderIngredient", "ingredientId"), // Relationship with OrderIngredient
      available: a.boolean(),
    })
    .authorization((allow) => [
      allow.guest(),
      allow.publicApiKey(),
      allow.authenticated(),
    ]),

  // OrderItem Model
  OrderItem: a
    .model({
      id: a.id(), // Ensure ID field for OrderItem
      orderId: a.id(),
      order: a.belongsTo("Order", "orderId"), // Belongs to Order
      itemId: a.id().required(), // References Item
      item: a.belongsTo("Item", "itemId"), // Belongs to Item
      selectedIngredients: a.hasMany("OrderIngredient", "orderItemId"), // Track selected ingredients with quantities
      quantity: a.integer().required(), // Quantity of this item in the order
    })
    .authorization((allow) => [allow.authenticated(), allow.publicApiKey()]),

  // OrderIngredient Model (Tracks individual ingredients with quantity)
  OrderIngredient: a
    .model({
      id: a.id(), // Ensure ID field for OrderIngredient
      orderItemId: a.id(), // Foreign key to OrderItem
      orderItem: a.belongsTo("OrderItem", "orderItemId"), // Belongs to OrderItem
      ingredientId: a.id().required(), // References Ingredient
      ingredient: a.belongsTo("Ingredient", "ingredientId"), // Belongs to Ingredient
      quantity: a.integer().required(), // Quantity of this ingredient selected
    })
    .authorization((allow) => [allow.authenticated(), allow.publicApiKey()]),

  // Order Model
  Order: a
    .model({
      id: a.id(), // Ensure ID field for Order
      orderNumber: a.string().required(),
      userId: a.id(),
      user: a.belongsTo("User", "userId"), // Belongs to User
      totalAmount: a.integer(),
      orderItems: a.hasMany("OrderItem", "orderId"), // Track items in the order
      status: a.string(), // e.g., 'pending', 'completed', 'canceled'
    })
    .authorization((allow) => [allow.authenticated(), allow.publicApiKey()]),
  // Cart Model
  Cart: a
    .model({
      id: a.id(), // Cart ID
      userId: a.id().required(), // Reference to the user
      user: a.belongsTo("User", "userId"), // Each user has one cart
      cartItems: a.hasMany("CartItem", "cartId"), // Cart has many items
      totalAmount: a.integer(), // Total amount of the cart
    })
    .authorization((allow) => [allow.authenticated()]), // Only authenticated users

  // CartItem Model
  CartItem: a
    .model({
      id: a.id(), // CartItem ID
      cartId: a.id().required(), // Reference to the cart
      cart: a.belongsTo("Cart", "cartId"), // CartItem belongs to a cart
      itemId: a.id().required(), // Reference to the menu item
      item: a.belongsTo("Item", "itemId"), // Each cart item is an Item
      selectedIngredients: a.hasMany("CartIngredient", "cartItemId"), // Selected ingredients for this item
      quantity: a.integer().required(), // Quantity of the item
    })
    .authorization((allow) => [allow.authenticated()]),

  // CartIngredient Model
  CartIngredient: a
    .model({
      id: a.id(), // CartIngredient ID
      cartItemId: a.id().required(), // Reference to the CartItem
      cartItem: a.belongsTo("CartItem", "cartItemId"), // Belongs to CartItem
      ingredientId: a.id().required(), // Reference to the Ingredient
      ingredient: a.belongsTo("Ingredient", "ingredientId"), // Belongs to Ingredient
      quantity: a.integer().required(), // Quantity of this ingredient
    })
    .authorization((allow) => [allow.authenticated()]),

  // User Model
  User: a
    .model({
      id: a.id(), // Ensure ID field for User
      username: a.string().required(),
      email: a.string().required(),
      password: a.string().required(),
      role: a.string(), // e.g., 'admin', 'user'
      orders: a.hasMany("Order", "userId"), // Relationship to Orders
      reviews: a.hasMany("Review", "userId"), // Relationship to Reviews
      available: a.boolean().default(true),
    })
    .authorization((allow) => [allow.authenticated(), allow.publicApiKey()]),

  // Category Model
  Category: a
    .model({
      id: a.id(), // Ensure ID field for Category
      name: a.string().required(),
      description: a.string(),
      items: a.hasMany("Item", "categoryId"), // Relationship to Items
    })
    .authorization((allow) => [allow.authenticated(), allow.publicApiKey()]),

  // Review Model
  Review: a
    .model({
      id: a.id(), // Ensure ID field for Review
      rating: a.integer().required(),
      comment: a.string(),
      userId: a.id(), // Foreign key to User
      user: a.belongsTo("User", "userId"), // Belongs to User
      itemId: a.id(), // Foreign key to Item
      item: a.belongsTo("Item", "itemId"), // Belongs to Item
    })
    .authorization((allow) => [allow.authenticated()]),

  RegisterResponse: a.customType({
    email: a.string(),
    metadata: a.string(),
    // executionDuration: a.float(),
  }),
  registerUser: a
    .mutation()
    // arguments that this query accepts
    .arguments({
      email: a.string(),
    })
    // return type of the query
    // .returns(a.ref "User"))
    .returns(a.ref("RegisterResponse"))
    .handler(
      a.handler.function(registerUserFunction)

      // a.handler.custom({
      //   dataSource: a.ref("User"),
      //   entry: "./registerUser.js",
      // }),
    )
    // only allow signed-in users to call this API
    .authorization((allow) => [
      allow.guest(),
      allow.publicApiKey(),
      allow.authenticated(),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    apiKeyAuthorizationMode: { expiresInDays: 7 },

    //TODO:  add apikey as an authorization mode
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
// Item Model

/*
const schema = a.schema({
  // Item Model
  Item: a.model({
    name: a.string().required(),
    url: a.string(),
    description: a.string(),
    price: a.integer(),
    calories: a.integer(),
    categoryId: a.id(),
    category: a.belongsTo('Category', 'categoryId'),
    ingredients: a.hasMany('Ingredient', 'itemId'), // Relationship with Ingredient
    metaData: a.json(),
    available: a.boolean(),
  }).authorization((allow) => [allow.guest(), allow.publicApiKey(), allow.authenticated()]),

  // Ingredient Model
  Ingredient: a.model({
    name: a.string().required(),
    price: a.integer().optional(), // Optional price for additional cost
    calories: a.integer().optional(),
    itemId: a.id(),
    item: a.belongsTo('Item', 'itemId'), // Belongs to an Item
    available: a.boolean(),
  }).authorization((allow) => [allow.guest(), allow.publicApiKey(), allow.authenticated()]),

  // OrderItem Model
  OrderItem: a.model({
    orderId: a.id(),
    order: a.belongsTo('Order', 'orderId'), // Belongs to Order
    itemId: a.id().required(), // References Item
    item: a.belongsTo('Item', 'itemId'), // Correct belongsTo relationship to Item
    selectedIngredients: a.hasMany('OrderIngredient', 'orderItemId'), // Track selected ingredients with quantities
    quantity: a.integer().required(), // Quantity of this item in the order
  }).authorization((allow) => [allow.authenticated(), allow.publicApiKey()]),

  // OrderIngredient Model (Tracks individual ingredients with quantity)
  OrderIngredient: a.model({
    orderItemId: a.id(),
    orderItem: a.belongsTo('OrderItem', 'orderItemId'), // Belongs to the ordered item
    ingredientId: a.id().required(), // References Ingredient
    ingredient: a.belongsTo('Ingredient', 'ingredientId'), // Belongs to an ingredient
    quantity: a.integer().required(), // Quantity of this ingredient selected
  }).authorization((allow) => [allow.authenticated(), allow.publicApiKey()]),

  // Order Model
  Order: a.model({
    orderNumber: a.string().required(),
    userId: a.id(),
    user: a.belongsTo('User', 'userId'), // Belongs to a User
    totalAmount: a.integer(),
    orderItems: a.hasMany('OrderItem', 'orderId'), // Track items in the order
    status: a.string(), // e.g., 'pending', 'completed', 'canceled'
    createdAt: a.dateTime(),
    updatedAt: a.dateTime(),
  }).authorization((allow) => [allow.authenticated(), allow.publicApiKey()]),

  // User Model
  User: a.model({
    username: a.string().required(),
    email: a.string().required(),
    password: a.string().required(),
    role: a.string(), // e.g., 'admin', 'user'
    orders: a.hasMany('Order', 'userId'),
    reviews: a.hasMany('Review', 'userId'),
    createdAt: a.dateTime(),
    updatedAt: a.dateTime(),
  }).authorization((allow) => [allow.authenticated(), allow.publicApiKey()]),

  // Category Model
  Category: a.model({
    name: a.string().required(),
    description: a.string(),
    items: a.hasMany('Item', 'categoryId'),
    createdAt: a.dateTime(),
    updatedAt: a.dateTime(),
  }).authorization((allow) => [allow.authenticated(), allow.publicApiKey()]),

  // Review Model
  Review: a.model({
    rating: a.integer().required(),
    comment: a.string(),
    userId: a.id(),
    user: a.belongsTo('User', 'userId'),
    itemId: a.id(),
    item: a.belongsTo('Item', 'itemId'),
    createdAt: a.dateTime(),
    updatedAt: a.dateTime(),
  }).authorization((allow) => [allow.authenticated()]),
});
*/
