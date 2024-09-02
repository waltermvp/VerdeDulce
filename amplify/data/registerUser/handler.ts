import type { Schema } from "../resource"
// import AWS from "aws-sdk"
// import mjml2html from "mjml"
const mjml2html = require("mjml")

const sendEmail = () => {
  console.log("sendEmail reached")
  return mjml2html(`
  <mjml>
  <mj-body>
    <mj-section>
      <mj-column>

        <mj-image width="100px" src="/assets/img/logo-small.png"></mj-image>

        <mj-divider border-color="#F45E43"></mj-divider>

        <mj-text font-size="20px" color="#F45E43" font-family="helvetica">Hello World</mj-text>

      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`)
}

export const handler: Schema["registerUser"]["functionHandler"] = async (event, context) => {
  const start = performance.now()
  const email = event.arguments.email
  console.log("loggin test :", email)

  // Create an instance of the AWS SES service
  // const ses = new AWS.SES()

  // Set up the parameters for the email
  const params = {
    Destination: {
      ToAddresses: [email], // Replace with the recipient's email address
    },
    Message: {
      Body: {
        Text: {
          // Data: "Hello, this is a test email.", // Replace with the email content
          Data: sendEmail().html,
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
    // Send the email using the AWS SES service
    // @ts-ignore: Unreachable code error
    // await ses.sendEmail(params).promise()
    return {
      email: `Echoing content: ${event.arguments.email}`,
      executionDuration: performance.now() - start,
    }
  } catch (error) {
    console.error("Error sending email:", error)
    throw error
  }
}
