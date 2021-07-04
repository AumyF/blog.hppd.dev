# blog.hppd.dev

Happy Paddy!!!!!

![CI](https://github.com/AumyF/blog.hppd.dev/workflows/CI/badge.svg?branch=develop)

## 使ってるもの

言語は(ほぼ)100% TypeScript, フレームワークは Gatsby, ブログの記事は MDX, スタイリングは Emotion と Tailwind, デプロイは Firebase Hosting, その他は package.json を読んでね

### Gatsby プラグイン

- emotion
- google-analytics
- graphql-codegen
- manifest
- mdx
  - autolink-headers
  - code-titles
  - prismjs
- postcss
- react-helmet
- typescript
- source-filesystem

### その他特記事項

Tailwind は PostCSS と Emotion(twin.macro)の 2 段構成。
gatsby-node を TypeScript で書き、gatsby-node.js で ts-node を呼んでトランスパイルしている。

## ライセンス

MIT License

## うごかす

`git clone` して `npm i` して `npm start` して `localhost:8000` に接続！以上！！

## なんかこうファイル間の依存関係が見れるやつ

brew か apt かなんかで`graphviz`を導入して `npm run depgraph` で出てくる `dependencygraph.svg` を見ると幸せになれるぞ！

![image](dependencygraph.svg)
