/**
 * 環境変数が存在するか検証する関数
 * @param any 検査対象の環境変数が格納されているオブジェクト
 * @return void
 */
export const validateEnvironmentObject = (environmentObject: any): void => {
  Object.entries(environmentObject).map(([key, value]) => {
    if (!value) {
      throw new Error(`Not found process.env.${key}.`)
    }
  })
}
