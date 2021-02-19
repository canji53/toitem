// common
const SERVICE_NAME = 'toitem' as const

export type TEnvironmentStage = 'development' | 'staging' | 'production' // environment stages type

const NAKED_DOMAIN = process.env.NAKED_DOMAIN as string
const DOMAIN_NAME: Record<TEnvironmentStage, string> = {
  development: 'localhost',
  staging: `staging.${NAKED_DOMAIN}`,
  production: `www.${NAKED_DOMAIN}`,
}

// aws
const AWS_ACCOUNT_ID = process.env.AWS_ACCOUNT_ID as string
const AWS_DEFAULT_REGION = 'ap-northeast-1' as const
const AWS_REGION = process.env.AWS_REGION || AWS_DEFAULT_REGION

export interface IConfig {
  SERVICE_NAME: typeof SERVICE_NAME
  AWS_ACCOUNT_ID: string
  AWS_REGION: string
  NAKED_DOMAIN: string
  DOMAIN_NAME: Record<TEnvironmentStage, string>
}
export const config: IConfig = {
  SERVICE_NAME,
  AWS_ACCOUNT_ID,
  AWS_REGION,
  NAKED_DOMAIN,
  DOMAIN_NAME,
}

// 検証を行いたい暗黙的な環境変数のオブジェクト（一覧）
export const implicitEnvironmentObject = {
  AWS_ACCOUNT_ID: process.env.AWS_ACCOUNT_ID,
  AWS_REGION: process.env.AWS_REGION,
  NAKED_DOMAIN: process.env.NAKED_DOMAIN,
}
