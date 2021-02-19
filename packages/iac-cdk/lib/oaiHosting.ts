import * as cdk from '@aws-cdk/core'
import * as s3 from '@aws-cdk/aws-s3'
import * as iam from '@aws-cdk/aws-iam'
import * as cloudfront from '@aws-cdk/aws-cloudfront'
import * as certificateManager from '@aws-cdk/aws-certificatemanager'

import { TEnvironmentStage, IConfig } from '../config'

interface IOAIHostingProps extends cdk.StackProps {
  env: cdk.Environment
  config: IConfig
  environmentStage: TEnvironmentStage
  certificate: certificateManager.DnsValidatedCertificate
}

export class OAIHosting extends cdk.Stack {
  public readonly bucket: s3.Bucket
  public readonly cloudfrontDistribution: cloudfront.CloudFrontWebDistribution

  constructor(scope: cdk.App, id: string, props: IOAIHostingProps) {
    super(scope, id, props)

    const {
      config: { SERVICE_NAME, DOMAIN_NAME },
      environmentStage,
      certificate,
    } = props

    this.bucket = new s3.Bucket(
      this,
      `${SERVICE_NAME}-${environmentStage}-static-hosting`,
      {
        bucketName: `${SERVICE_NAME}-${environmentStage}-static-hosting`,
        blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
        publicReadAccess: false,
      }
    )

    // OAI for bucket policy
    const originAccessIdentity = new cloudfront.OriginAccessIdentity(
      this,
      `${SERVICE_NAME}-${environmentStage}-static-hosting-access-identity`,
      {
        comment: `${SERVICE_NAME}-${environmentStage}-static-hosting-access-identity`,
      }
    )

    // bucket policy
    const bucketPolicy = new iam.PolicyStatement({
      actions: ['s3:GetObject', 's3:ListBucket'],
      resources: [
        this.bucket.arnForObjects(''),
        this.bucket.arnForObjects('/*'),
      ],
    })
    bucketPolicy.addCanonicalUserPrincipal(
      originAccessIdentity.cloudFrontOriginAccessIdentityS3CanonicalUserId
    )

    // add policy to bucket
    this.bucket.addToResourcePolicy(bucketPolicy)

    this.cloudfrontDistribution = new cloudfront.CloudFrontWebDistribution(
      this,
      `${SERVICE_NAME}-${environmentStage}-static-hosting-access-identity`,
      {
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        priceClass: cloudfront.PriceClass.PRICE_CLASS_ALL,
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: this.bucket,
              originAccessIdentity,
            },
            behaviors: [
              {
                allowedMethods: cloudfront.CloudFrontAllowedMethods.GET_HEAD,
                cachedMethods:
                  cloudfront.CloudFrontAllowedCachedMethods.GET_HEAD,
                isDefaultBehavior: true,
                minTtl: cdk.Duration.seconds(0),
                maxTtl: cdk.Duration.seconds(31536000),
                defaultTtl: cdk.Duration.seconds(86400),
                forwardedValues: {
                  cookies: {
                    forward: 'none',
                  },
                  queryString: false,
                },
              },
            ],
          },
        ],
        errorConfigurations: [
          {
            responseCode: 404,
            responsePagePath: '/404.html',
            errorCachingMinTtl: 10,
            errorCode: 404,
          },
        ],
        viewerCertificate: cloudfront.ViewerCertificate.fromAcmCertificate(
          certificate,
          {
            aliases: [DOMAIN_NAME[environmentStage]],
            securityPolicy: cloudfront.SecurityPolicyProtocol.TLS_V1,
            sslMethod: cloudfront.SSLMethod.SNI,
          }
        ),
      }
    )
  }
}
