import { defineBackend } from "@aws-amplify/backend"
import { auth } from "./auth/resource"
import { data, registerUserFunction } from "./data/resource"
import { storage } from "./storage/resource"
import { EmailIdentity } from "aws-cdk-lib/aws-ses"
import { Stack } from "aws-cdk-lib/core"
import * as iam from "aws-cdk-lib/aws-iam"

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
  storage,
  registerUserFunction,
})

// console.log(backend.data., "::: backend.data.resources")
const { cfnUserPool } = backend.auth.resources.cfnResources

const authStack = Stack.of(cfnUserPool)

const email = EmailIdentity.fromEmailIdentityName(
  authStack,
  "EmailIdentity",
  // your email configured for use in SES
  // process.env.EMAIL,
  "contact@verdedulce.com",
)

cfnUserPool.emailConfiguration = {
  emailSendingAccount: "DEVELOPER",
  sourceArn: email.emailIdentityArn,
}

const statement = new iam.PolicyStatement({
  sid: "AllowSESSendEmail",
  actions: ["ses:SendEmail"],
  resources: ["*"], // Replace with specific SES resource ARN if needed
})

const something = backend.registerUserFunction.resources.lambda
something.addToRolePolicy(statement)
