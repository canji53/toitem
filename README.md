# toItemJamstack

## 概要

* [toItem](https://www.toitem.info)のフロントソース
  * 超個人的なガジェットや雑貨・日用品をつづるブログ
* とにかくシンプルなデザインを意識
* 高速で安価な Jamstack な構成

## 画面例

![toitemの画面例](https://raw.githubusercontent.com/canji53/toItemJamstack/master/.documents/image/view.png)

## 構成図

![toitemの構成図](https://raw.githubusercontent.com/canji53/toItemJamstack/master/.documents/image/diagram.png)

## 技術スタック

* Serverless, Jamstack, Atomic Design, Monorepo
* JavaScript, Node.js
* Vue 2 / Nuxt.js
* SendGrid API, Font Awesome
* AWS, API Gateway, Lambda, Lambda@Edge, S3, CloudFront (OAI), IAM
* AWS SAM, AWS CLI, CloudFormation
* Jest, npm, Babel, ESLint, Prettier
* Git, GitHub, GitHub Actions

## 特徴

* ドキュメントが読み易いということもあり、日本製 Headless CMS の MicroCMS を採用
* GitHub Actions でディレクトリ・ファイル単位で変更監視が可能なため、モノリポジトリを採用
* /XXX/ 等の index.html が省かれた URL を Lambda@Edge で /XXX/index.html 等にリダイレクト（静的ホスティング時の弱点をカバーするため）
* PWA でスマホ対応、と言いつつもドキュメントをそのままなぞっている程度

## 課題点

* コンテンツがへぼい :full_moon_with_face:
* カテゴリー、タグ、ランキング等の機能が未実装（コンテンツが増えたら対応予定）
