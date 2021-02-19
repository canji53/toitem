import * as cdk from '@aws-cdk/core'
import * as certificateManager from '@aws-cdk/aws-certificatemanager'
import * as route53 from '@aws-cdk/aws-route53'

import { IConfig } from '../config'

interface ICertificateManagerProps extends cdk.StackProps {
  env: cdk.Environment
  config: IConfig
  hostedZone: route53.HostedZone
}

export class CertificateManager extends cdk.Stack {
  public readonly apNotheast1Certificate: certificateManager.DnsValidatedCertificate
  public readonly usEast1Certificate: certificateManager.DnsValidatedCertificate

  constructor(scope: cdk.App, id: string, props: ICertificateManagerProps) {
    super(scope, id, props)

    const {
      config: { SERVICE_NAME, NAKED_DOMAIN },
      hostedZone,
    } = props

    this.apNotheast1Certificate = new certificateManager.DnsValidatedCertificate(
      this,
      `${SERVICE_NAME}-apNotheast1-certification`,
      {
        domainName: NAKED_DOMAIN,
        subjectAlternativeNames: [`*.${NAKED_DOMAIN}`],
        hostedZone,
        region: 'ap-northeast-1',
      }
    )

    this.usEast1Certificate = new certificateManager.DnsValidatedCertificate(
      this,
      `${SERVICE_NAME}-usEast1-certification`,
      {
        domainName: NAKED_DOMAIN,
        subjectAlternativeNames: [`*.${NAKED_DOMAIN}`],
        hostedZone,
        region: 'us-east-1',
      }
    )
  }
}
