import type { Schema } from "../resource";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
import {
  renderToStaticMarkup,
  TReaderDocument,
} from "@usewaypoint/email-builder";
import { env } from "$amplify/env/registerUser"; // the import is '$amplify/env/<function-name>'

/**
 * IF main then it should exist if
 */
//TODO: get from secret manager
const emailableAPIKey = env.EMAILABLE_SECRET // "live_1a785c41a3ad8511db30";
  ? env.EMAILABLE_SECRET
  : "test_11e33507f7608e3af558";
console.log("JSON.stringify(env", JSON.stringify(env));
console.log(JSON.parse(JSON.stringify(env.EMAILABLE_SECRET)));
console.log("emailableAPIKey", emailableAPIKey);
var emailable = require("emailable")(emailableAPIKey);

const region = "us-east-1";

export const handler: Schema["registerUser"]["functionHandler"] = async (
  event,
  context
) => {
  const email = event.arguments.email;
  // Set up the parameters for the email
  console.log("emailable", JSON.stringify({ env }));

  try {
    const verificationResponse = await new Promise((resolve, reject) => {
      emailable
        .verify(email)
        .then((response: unknown) => resolve(response))
        .catch((error: any) => reject(error));
    });
    console.log("verificationResponse", verificationResponse);

    //The state of the verified email. (e.g. deliverable, undeliverable, risky, unknown)
    //@ts-ignore: Unreachable code error
    if (verificationResponse?.state === "deliverable") {
      const client = new SESv2Client({ region });
      const string = renderToStaticMarkup(CONFIGURATION, {
        rootBlockId: "root",
      });

      const input = {
        Destination: {
          ToAddresses: [email],
        },
        Content: {
          Simple: {
            Body: {
              // Body
              // Text: {
              //   Data: "STRING_VALUE", // required
              //   Charset: "STRING_VALUE",
              // },
              Html: {
                Data: string, // required
                // Charset: "STRING_VALUE",
              },
            },
            Subject: {
              Data: "¡Bienvenido a verdedulce.com!",
            },
          },
        },
        FromEmailAddress: "contact@verdedulce.com",
      };
      console.log("will send :", input);
      // @ts-ignore: Unreachable code error
      const command = new SendEmailCommand(input);
      const response = await client.send(command);

      return {
        email: `Echoing content: ${event.arguments.email}`,
        // executionDuration: performance.now() - start,
      };
    } else {
      return {
        email: `Not Deliverable: ${event.arguments.email}`,
        //@ts-ignore: Unreachable code error
        reason: verificationResponse?.state,
      };
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      error,
    };

    // throw error;
  }
};

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

const CONFIGURATION: TReaderDocument = {
  root: {
    type: "EmailLayout",
    data: {
      backdropColor: colors.palette.lightBackground,
      canvasColor: colors.palette.lightBackground,
      textColor: colors.palette.darkKale,
      fontFamily: "MODERN_SANS",
      childrenIds: [
        "block-1709571212684",
        "block-1709571228545",
        "block-1709571228544",
        "block-1709571234315",
        "block-1709571228549",
        "block-1709571247550",
        "block-1709571281151",
        "block-1709571281153",
        "block-1709571281154",
        "block-1709571282795",
        "block-1709571282796",
        "block-1709571302968",
      ],
    },
  },
  "block-1709571212684": {
    type: "Image",
    data: {
      style: {
        padding: {
          top: 24,
          bottom: 24,
          right: 24,
          left: 24,
        },
      },
      props: {
        url: "https://dta56yysqj9ke.cloudfront.net/eyJidWNrZXQiOiJhbXBsaWZ5LWQxcHR2cnZsb2Fob2pkLW1hLWR1bGNlZHJpdmVidWNrZXRhMGFjMDNmMi15c2tvZWxkeWl4aXIiLCJrZXkiOiJWZXJkZUR1bGNlX2xvZ29fd2l0aF9ib3JkZXIucG5nIiwiZWRpdHMiOnsiY29udGVudE1vZGVyYXRpb24iOmZhbHNlLCJyZXNpemUiOnsid2lkdGgiOjIwMCwiaGVpZ2h0IjoyMDAsImZpdCI6ImNvdmVyIn0sInJvdGF0ZSI6MH19",
        alt: "VerdeDulce",
        linkHref: "https://verdedulce.com",
        contentAlignment: "middle",
      },
    },
  },
  "block-1709571228545": {
    type: "Text",
    data: {
      style: {
        color: "#FFFF",
        // textDecoration: "underline",
        // underlineColor: colors.palette.lightYellowGreen,
        padding: {
          top: 0,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: "¡Bienvenido a verdedulce.com!  Fresco, Rápido, Sabroso – Tu Verde Diario",
      },
    },
  },
  "block-1709571228544": {
    type: "Text",
    data: {
      style: {
        fontWeight: "normal",
        color: "#FFFF",

        padding: {
          top: 0,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: "Hola 👋,",
      },
    },
  },
  "block-1709571234315": {
    type: "Text",
    data: {
      style: {
        fontWeight: "normal",
        color: "#FFFF",

        padding: {
          top: 0,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: "En Verde Dulce, creemos en ofrecer comidas frescas, saludables y deliciosas que te harán sentir bien. Nuestro menú está diseñado para brindarte opciones nutritivas y llenas de sabor, perfectas para un almuerzo rápido o una cena satisfactoria.",
      },
    },
  },
  "block-1709571228549": {
    type: "Text",
    data: {
      style: {
        fontWeight: "bold",
        color: "#FFFF",

        padding: {
          top: 0,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: "Cómo Funciona:",
      },
    },
  },

  "block-1709571247550": {
    type: "Text",
    data: {
      style: {
        fontWeight: "normal",
        color: "#FFFF",

        padding: {
          top: 0,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: `1. Ve a verdedulce.com y pide tu ensalada: Explora nuestro menú y personaliza tu comida según tus gustos y necesidades dietéticas.`,
      },
    },
  },
  "block-1709571281151": {
    type: "Text",
    data: {
      style: {
        fontWeight: "normal",
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: "2.	Mezcla Tu Ensalada: Agita bien con nuestros ingredientes frescos y aderezos.",
      },
    },
  },
  "block-1709571281153": {
    type: "Text",
    data: {
      style: {
        fontWeight: "normal",
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: `3.	Disfruta Tu Ensalada: Saborea los sabores de Verde Dulce, sabiendo que estás haciendo una elección saludable y sostenible.
        ¡Únete a Nosotros Hoy!

Visita verdedulce.com para hacer tu pedido y haz que tu próxima comida sea una experiencia fresca y sabrosa.
`,
      },
    },
  },
  "block-1709571281154": {
    type: "Text",
    data: {
      style: {
        fontWeight: "normal",
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: `3.	Disfruta Tu Ensalada: Saborea los sabores de Verde Dulce, sabiendo que estás haciendo una elección saludable y sostenible.`,
      },
    },
  },
  "block-1709571282795": {
    type: "Text",
    data: {
      style: {
        fontWeight: "normal",

        padding: {
          top: 16,
          bottom: 40,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: `¡Únete a Nosotros Hoy!

Visita verdedulce.com para hacer tu pedido y haz que tu próxima comida sea una experiencia fresca y sabrosa.
`,
      },
    },
  },

  "block-1709571282796": {
    type: "Image",
    data: {
      style: {
        padding: {
          top: 16,
          bottom: 40,
          right: 24,
          left: 24,
        },
      },
      props: {
        url: "https://dta56yysqj9ke.cloudfront.net/eyJidWNrZXQiOiJhbXBsaWZ5LWQxcHR2cnZsb2Fob2pkLW1hLWR1bGNlZHJpdmVidWNrZXRhMGFjMDNmMi15c2tvZWxkeWl4aXIiLCJrZXkiOiJtZW51L0hvdF9Ib25leV9DaGlja2VuLnBuZyIsImVkaXRzIjp7ImNvbnRlbnRNb2RlcmF0aW9uIjpmYWxzZSwicmVzaXplIjp7IndpZHRoIjoyMDAsImhlaWdodCI6MjAwLCJmaXQiOiJjb3ZlciJ9LCJyb3RhdGUiOjB9fQ==",
        alt: "Illustration",
        linkHref: null,
        contentAlignment: "middle",
      },
    },
  },
  "block-1709571302968": {
    type: "Button",
    data: {
      style: {
        fontSize: 14,
        padding: {
          top: 16,
          bottom: 24,
          right: 24,
          left: 24,
        },
      },
      props: {
        // @ts-ignore: Unreachable code error
        buttonBackgroundColor: "#ebfe72",
        buttonStyle: "rounded",
        buttonTextColor: "#000000",
        text: "Ordena Ya",
        url: "https://www.verdedulce.com",
      },
    },
  },
};
