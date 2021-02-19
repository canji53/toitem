import * as cdk from '@aws-cdk/core'
import * as route53 from '@aws-cdk/aws-route53'
import * as route53Targets from '@aws-cdk/aws-route53-targets'
import * as cloudfront from '@aws-cdk/aws-cloudfront'

import { IConfig, TEnvironmentStage } from '../config'

interface IHostedZoneProps extends cdk.StackProps {
  env: cdk.Environment
  config: IConfig
}

export class HostedZone extends cdk.Stack {
  public readonly public: route53.HostedZone

  constructor(scope: cdk.App, id: string, props: IHostedZoneProps) {
    super(scope, id, props)

    const {
      config: { SERVICE_NAME, NAKED_DOMAIN },
    } = props

    this.public = new route53.HostedZone(
      this,
      `${SERVICE_NAME}-public-hostedZone`,
      {
        zoneName: NAKED_DOMAIN,
      }
    )
  }
}

interface IRecordProps extends cdk.StackProps {
  env: cdk.Environment
  config: IConfig
  environmentStage: TEnvironmentStage
  hostedZone: route53.HostedZone
  cloudfrontDistribution: cloudfront.CloudFrontWebDistribution
}

export class Route53Record extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props: IRecordProps) {
    super(scope, id, props)

    const {
      config: { SERVICE_NAME, DOMAIN_NAME },
      environmentStage,
      hostedZone,
      cloudfrontDistribution,
    } = props

    // A Record for oai hosting (cloudfront)
    new route53.ARecord(
      this,
      `${SERVICE_NAME}-${environmentStage}-oaiHosting-route53-record`,
      {
        zone: hostedZone,
        recordName: DOMAIN_NAME[environmentStage],
        target: route53.RecordTarget.fromAlias(
          new route53Targets.CloudFrontTarget(cloudfrontDistribution)
        ),
      }
    )
  }
}
