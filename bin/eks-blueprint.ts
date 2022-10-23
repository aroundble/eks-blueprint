#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { EksBlueprintStack } from '../lib/eks-blueprint-stack';
import PipelineConstruct from '../lib/pipeline'; // IMPORT OUR PIPELINE CONSTRUCT

const app = new cdk.App();
const account = process.env.CDK_DEFAULT_ACCOUNT!;
const region = process.env.CDK_DEFAULT_REGION;
const env = { account, region }

new EksBlueprintStack(app, 'cluster', { env });
new PipelineConstruct(app, 'pipeline', { env });