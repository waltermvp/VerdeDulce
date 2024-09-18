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
    EMAILABLE_SECRET: secret("EMAILABLE_SECRET"),
  },
});

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any unauthenticated user can "create", "read", "update", 
and "delete" any "Todo" records.
=========================================================================*/
//TODO: rename to product
const schema = a.schema({
  Item: a
    .model({
      name: a.string(),
      // content: a.string(),
      url: a.string(),
      slug: a.string(),
      description: a.string(),
      price: a.integer(),
      calories: a.integer(),
      category: a.string(),
      metaData: a.json(),
      available: a.boolean(),
      ingredients: a.hasMany("Ingredient", "itemId"), // Relationship with Ingredient
    })
    .authorization((allow) => [
      allow.guest(),
      allow.publicApiKey(),
      allow.authenticated(),
    ]),
  // Ingredient Model
  Ingredient: a
    .model({
      name: a.string().required(),
      price: a.integer(), // Optional price for additional cost
      calories: a.integer(),
      itemId: a.id(),
      item: a.belongsTo("Item", "itemId"), // Belongs to an Item
      available: a.boolean(),
    })
    .authorization((allow) => [
      allow.guest(),
      allow.publicApiKey(),
      allow.authenticated(),
    ]),

  User: a
    .model({
      email: a.string(),
      available: a.boolean(),
    })
    .authorization((allow) => [
      allow.guest(),
      allow.publicApiKey(),
      allow.authenticated(),
    ]),

  RegisterResponse: a.customType({
    email: a.string(),
    executionDuration: a.float(),
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

  // OrderStatus: a.enum(["OrderPending", "OrderShipped", "OrderDelivered"]),
  // OrderStatusChange: a.customType({
  //   orderId: a.id().required(),
  //   status: a.ref("OrderStatus").required(),
  //   message: a.string().required(),
  // }),

  // Post: a.model({
  //   id: a.id(),
  //   content: a.string(),
  //   likes: a.integer()
  // }),

  // // 2. Define your mutation with the return type and, optionally, arguments
  // likePost: a
  //   .mutation()
  //   // arguments that this query accepts
  //   .arguments({
  //     postId: a.string()
  //   })
  //   // return type of the query
  //   .returns(a.ref('Post'))
  //   // only allow signed-in users to call this API
  //   .authorization(allow => [allow.authenticated()])
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
