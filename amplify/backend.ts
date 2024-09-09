import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data, registerUserFunction } from "./data/resource";
import { storage } from "./storage/resource";
import { EmailIdentity } from "aws-cdk-lib/aws-ses";
import { Stack } from "aws-cdk-lib/core";
import * as iam from "aws-cdk-lib/aws-iam";

import { Policy, PolicyStatement } from "aws-cdk-lib/aws-iam";
import { CfnApp } from "aws-cdk-lib/aws-pinpoint";

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
  storage,
  registerUserFunction,
});

// console.log(backend.data., "::: backend.data.resources")
const { cfnUserPool } = backend.auth.resources.cfnResources;

const authStack = Stack.of(cfnUserPool);

const email = EmailIdentity.fromEmailIdentityName(
  authStack,
  "EmailIdentity",
  // your email configured for use in SES
  // process.env.EMAIL,
  "contact@verdedulce.com"
);

cfnUserPool.emailConfiguration = {
  emailSendingAccount: "DEVELOPER",
  sourceArn: email.emailIdentityArn,
};

const statement = new iam.PolicyStatement({
  sid: "AllowSESSendEmail",
  actions: ["ses:SendEmail"],
  resources: ["*"], // Replace with specific SES resource ARN if needed
});

const something = backend.registerUserFunction.resources.lambda;
something.addToRolePolicy(statement);

const analyticsStack = backend.createStack("analytics-stack");

// create a Pinpoint app
const pinpoint = new CfnApp(analyticsStack, "Pinpoint", {
  name: "verdedulcePinpointApp",
});

// create an IAM policy to allow interacting with Pinpoint
const pinpointPolicy = new Policy(analyticsStack, "PinpointPolicy", {
  policyName: "PinpointPolicy",
  statements: [
    new PolicyStatement({
      actions: ["mobiletargeting:UpdateEndpoint", "mobiletargeting:PutEvents"],
      resources: [pinpoint.attrArn + "/*"],
    }),
  ],
});

// apply the policy to the authenticated and unauthenticated roles
backend.auth.resources.authenticatedUserIamRole.attachInlinePolicy(
  pinpointPolicy
);
backend.auth.resources.unauthenticatedUserIamRole.attachInlinePolicy(
  pinpointPolicy
);

// patch the custom Pinpoint resource to the expected output configuration
backend.addOutput({
  analytics: {
    amazon_pinpoint: {
      app_id: pinpoint.ref,
      aws_region: Stack.of(pinpoint).region,
    },
  },
});
