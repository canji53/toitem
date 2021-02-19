#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from '@aws-cdk/core'

import { validateEnvironmentObject } from '../utils/env'
import { implicitEnvironmentObject, TEnvironmentStage, config } from '../config'

import { HostedZone, Route53Record } from '../lib/route53'
import { CertificateManager } from '../lib/certificateManager'
import { OAIHosting } from '../lib/oaiHosting'

validateEnvironmentObject(implicitEnvironmentObject)

const env: cdk.Environment = {
  region: config.AWS_REGION,
  account: config.AWS_ACCOUNT_ID,
}

const app = new cdk.App()

/**
 * whole common
 */
const hostedZone = new HostedZone(app, `${config.SERVICE_NAME}-hostedZone`, {
  env,
  config,
})

const certificateManager = new CertificateManager(
  app,
  `${config.SERVICE_NAME}-certificateManager`,
  {
    env,
    config,
    hostedZone: hostedZone.public,
  }
)

/**
 * production
 */
const productionStage: TEnvironmentStage = 'production'

const oaiHosting = new OAIHosting(app, `${config.SERVICE_NAME}-oaiHosting`, {
  env,
  config,
  environmentStage: productionStage,
  certificate: certificateManager.usEast1Certificate,
})

/**
 * after common
 */
new Route53Record(app, `${config.SERVICE_NAME}-route53-record`, {
  env,
  config,
  environmentStage: productionStage,
  hostedZone: hostedZone.public,
  cloudfrontDistribution: oaiHosting.cloudfrontDistribution,
})
