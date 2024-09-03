import type { Schema } from "../resource"
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2" // ES Modules import
const region = "sa-east-1"
//import ses from amplify gen 2
// AWS.config.update({ region: "sa-east-1" })

// import mjml2html from "mjml"
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

export const handler: Schema["registerUser"]["functionHandler"] = async (event, context) => {
  const start = performance.now()
  const email = event.arguments.email
  // Set up the parameters for the email
  const params = {
    Destination: {
      ToAddresses: [email], // Replace with the recipient's email address
    },
    Message: {
      Body: {
        Text: {
          Data: "Hello, this is a test email.", // Replace with the email content
          // Data: sendEmail().html,
        },
      },
      Subject: {
        Data: "Test Email", // Replace with the email subject
      },
    },
    Source: "walter@epiphanyapps.com", // Replace with the sender's email address
  }
  console.log("params: ", params)
  try {
    const client = new SESv2Client({ region })

    const input = {
      Destination: {
        ToAddresses: [email],
      },
      Content: {
        Simple: {
          Body: {
            Text: {
              Data: "Hello, this is a test email.",
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
