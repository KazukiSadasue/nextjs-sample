# つくつく会 Next.jsアプリケーション

## 開発環境について
- Node.js v12.16.1

Docker環境を用意していますが、動作がとても遅いです。
ローカル環境で開発することをおすすめします。

## 環境構築

## 準備
nodebrew等を利用して、Node.js v12.16.1 をインストール

## next.js環境構築
1. `cd nextjs`
2. `npm ci`
3. `npm run dev`

http://localhost:3000 にアクセス  
ホットリロードに対応しているため、コード変更時に自動的に反映される。


## モックサーバー環境構築
1. `cd graphql-stub`
2. `npm ci`
3. `npm run start`

GraphQLクエリの実行  
http://localhost:4000/graphiql にアクセス

サンプルリクエストクエリ
```
query {
  findTrend(word: "コロナ") {
    word,
    childSuggest {
      word,
      growth {
        short
        midium
        long
      }
      graphs {
        date
        value
      }
    }
  }
}
```
