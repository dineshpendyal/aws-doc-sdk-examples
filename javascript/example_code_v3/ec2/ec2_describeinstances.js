/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This sample is part of the SDK for JavaScript Developer Guide (scheduled for release September 2020) topic at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/ec2-example-managing-instances.html

Purpose:
ec2_describeinstances.js demonstrates how to retrieve information about one or more Amazon EC2 instances.

Inputs:
- REGION (into command line below)

Running the code:
node ec2_describeinstances.js REGION
 */

// snippet-start:[ec2.JavaScript.v3.Instances.describeInstances]
// Import required AWS SDK clients and commands for Node.js
const {EC2, DescribeInstancesCommand} = require("@aws-sdk/client-ec2");
// Set the AWS region
const region = process.argv[2];
// Create EC2 service object
const ec2client = new EC2(region);

async function run(){
  try {
    const data = await ec2client.send(new DescribeInstancesCommand({}))
    console.log("Success", JSON.stringify(data));
  }
  catch(err){
    console.log("Error", err);
  }
};
run();
// snippet-end:[ec2.JavaScript.v3.Instances.describeInstances]
exports.run = run; //for unit tests only
