import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { Schema } from "../../data/resource";
import { env } from "$amplify/env/addToCart"; // replace with your function name
import { getUser, listCarts } from "./graphql/queries";
import { createCart } from "./graphql/mutations";

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT, // replace with your defineData name
        region: env.AWS_REGION,
        defaultAuthMode: "identityPool",
      },
    },
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {
          /* noop */
        },
      },
    },
  }
);

const dataClient = generateClient<Schema>();

// export const handler = async (event) => {
//   // your function code goes here
// };
const region = "us-east-1";

export const handler: Schema["addToCart"]["functionHandler"] = async (
  event
) => {
  const { itemId, quantity, selectedIngredients } = event.arguments;

  console.log("event.arguments", JSON.stringify(event, null, 2));

  try {
    // Fetch or create Cart for user
    let cart = await fetchUserCart(userId);
    if (!cart) {
      cart = await createNewCart(userId);
    }

    // Add Item to Cart
    //@ts-ignore Unreachable code error
    const cartItem = await addItemToCart(
      //@ts-ignore Unreachable code error

      cart.id,
      //@ts-ignore Unreachable code error

      itemId,
      quantity,
      selectedIngredients
    );
    //@ts-ignore Unreachable code error

    return cartItem.id;
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      error,
    };

    // throw error;
  }
};

async function fetchUserCart(userId: string) {
  // GraphQL query to fetch user cart

  const user = await dataClient.graphql({
    query: getUser,
    variables: { id: userId },
  });

  if (!user.data.getUser) {
    return null;
  }
  if (user.data.getUser.cart) {
    return user.data.getUser.cart;
  }
  return null;
}

async function createNewCart(userId: string) {
  // GraphQL mutation to create a new cart for user
  try {
    const cart = await dataClient.graphql({
      query: createCart,
      variables: { input: { userId } },
    });
    return cart.data.createCart;
  } catch (error) {
    console.error("Error creating cart:", error);
    return null;
  }
}

async function addItemToCart(
  cartId: string,
  itemId: string,
  quantity: string,
  selectedIngredients: string
) {
  // GraphQL mutation to add item to cart
  return null;
}

const palette = {
  lightBackground: "#f2f1e4",
  veryLightGray: "#f4f3f2",
  darkTeal: "#1b463c",
  lightGreen: "#d8ed6d",
  veryDarkGreen: "#0f150f",
  lightYellowGreen: "#ebfe72",
  paleBlue: "#dae8e9",
  greenFont: "#0B3E35",
  darkKale: "#0E150E",

  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#D7CEC9",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  // primary100: "#F4E0D9",
  // primary200: "#E8C1B4",
  // primary300: "#DDA28E",
  // primary400: "#D28468",
  // primary500: "#C76542",
  // primary600: "#A54F31",
  primary100: "#ebfe72", // lightYellowGreen
  primary200: "#bfcf5e",
  primary300: "#93a14a",
  primary400: "#677237",
  primary500: "#3b4423",
  primary600: "#0f150f", // veryDarkGreen
  footerGreen: "#D8E5D6",
  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",

  orderButtonTextColor: "#E6FF55",
  orderButtonHoverColor: "transparent",
  orderButtonHoverTextColor: "#0E150E",
  orderButtonHoverBorderColor: "#0E150E",
} as const;

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral800,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral200,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,
};
