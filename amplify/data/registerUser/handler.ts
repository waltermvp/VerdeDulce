import type { Schema } from "../resource"
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2" // ES Modules import

import { TReaderDocument } from "@usewaypoint/email-builder"
import { renderToStaticMarkup } from "@usewaypoint/email-builder"
const region = "sa-east-1"
//import ses from amplify gen 2
// AWS.config.update({ region: "sa-east-1" })

// const mjml = require("mjml")
// const mjml2html = require("mjml")

// const sendEmail = () => {
//   console.log("sendEmail reached")
//   return mjml2html(`
//   <mjml>
//   <mj-body>
//     <mj-section>
//       <mj-column>

//         <mj-image width="100px" src="/assets/img/logo-small.png"></mj-image>

//         <mj-divider border-color="#F45E43"></mj-divider>

//         <mj-text font-size="20px" color="#F45E43" font-family="helvetica">Hello World</mj-text>

//       </mj-column>
//     </mj-section>
//   </mj-body>
// </mjml>
// `)
// }

const CONFIGURATION: TReaderDocument = {
  // root: {
  //   type: "EmailLayout",
  //   data: {
  //     backdropColor: "#F8F8F8",
  //     canvasColor: "#FFFFFF",
  //     textColor: "#242424",
  //     fontFamily: "MODERN_SANS",
  //     childrenIds: ["block-1709578146127"],
  //   },
  // },
  // "block-1709578146127": {
  //   type: "Text",
  //   data: {
  //     style: {
  //       fontWeight: "normal",
  //       padding: {
  //         top: 16,
  //         bottom: 16,
  //         right: 24,
  //         left: 24,
  //       },
  //     },
  //     props: {
  //       text: "Hello world",
  //     },
  //   },
  // },

  root: {
    type: "EmailLayout",
    data: {
      backdropColor: "#1b463c",
      canvasColor: "#1b463c",
      textColor: "#FFFFFF",
      fontFamily: "MODERN_SANS",
      childrenIds: [
        "block-1709571212684",
        "block-1709571228545",
        "block-1709571228544",
        "block-1709571234315",
        "block-1709571228549",
        "block-1709571247550",
        "block-1709571258507",
        "block-1709571281151",
        "block-1709571302968",
        "block-1709571282795",
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
        url: "https://d1iiu589g39o6c.cloudfront.net/live/platforms/platform_A9wwKSL6EV6orh6f/images/wptemplateimage_JTNBBPGrNs2Ph4JL/marketbase.png",
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
        fontWeight: "bold",
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
        padding: {
          top: 0,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: `1. Ve a [verdedulce.com](https://verdedulce.com/)  y pide tu ensalada: Explora nuestro menú y personaliza tu comida según tus gustos y necesidades dietéticas.
2.	Mezcla Tu Ensalada: Agita bien con nuestros ingredientes frescos y aderezos.
3.	Disfruta Tu Ensalada: Saborea los sabores de Verde Dulce, sabiendo que estás haciendo una elección saludable y sostenible.

¡Únete a Nosotros Hoy!

Visita verdedulce.com para hacer tu pedido y haz que tu próxima comida sea una experiencia fresca y sabrosa.
`,
      },
    },
  },
  "block-1709571258507": {
    type: "Image",
    data: {
      style: {
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        url: "https://d1iiu589g39o6c.cloudfront.net/live/platforms/platform_A9wwKSL6EV6orh6f/images/wptemplateimage_oWB821TUkDXvr2f4/Screenshot%202023-11-22%20at%2011.51.30%20AM.png",
        alt: "Video thumbnail",
        linkHref: "https://capture.dropbox.com/NBQEmoCKKP9RGBWr",
        contentAlignment: "middle",
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
        text: "If you ever need help, just reply to this email and one of us will get back to you shortly. We’re here to help.",
      },
    },
  },
  "block-1709571282795": {
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
        url: "https://d1iiu589g39o6c.cloudfront.net/live/platforms/platform_A9wwKSL6EV6orh6f/images/wptemplateimage_cAK8FpmBEGoSRNi3/Screenshot%202023-11-22%20at%2011.48.53%20AM.png",
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
        buttonBackgroundColor: "#ebfe72",
        buttonStyle: "rectangle",
        text: "Ordena Ya",
        url: "https://www.verdedulce.com",
      },
    },
  },
}

export const handler: Schema["registerUser"]["functionHandler"] = async (event, context) => {
  const start = performance.now()
  const email = event.arguments.email
  // Set up the parameters for the email
  try {
    const client = new SESv2Client({ region })
    const string = renderToStaticMarkup(CONFIGURATION, { rootBlockId: "root" })

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
            Data: "Test Email",
          },
        },
      },
      FromEmailAddress: "walter@epiphanyapps.com",
    }
    // @ts-ignore: Unreachable code error
    const command = new SendEmailCommand(input)
    const response = await client.send(command)

    return {
      email: `Echoing content: ${event.arguments.email}`,
      executionDuration: performance.now() - start,
    }
  } catch (error) {
    console.error("Error sending email:", error)
    throw error
  }
}
