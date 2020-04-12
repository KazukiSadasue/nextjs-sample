const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");

// モックデータ
const books = [
    {
        title: "Harry Potter and the Sorcerer's stone",
        author: "J.K. Rowling",
        price: 2000
    },
    {
        title: "Jurassic Park",
        author: "Michael Crichton",
        price: 3000
    }
];

// GraphQLのスキーマ情報
const typeDefs = `
type Query {
    verifyUser(user: User!): Boolean!
    findTrend(word: String!): [Suggest!]!
  }

  type Mutation {
    createUser(user: User!): Boolean!
  }

  input User {
    email: String!
    password: String!
  }

  type Suggest {
    word: String!
    childSuggests: [ChildSuggest!]!
  }

  type ChildSuggest {
    word: String!
    growth: Growth!
    graphs: [Graph!]!
  }

  type Growth {
    short: Arrow!
    midium: Arrow!
    long: Arrow!
  }

  type Graph {
    date: DateTime!
    value: Float!
  }

  enum Arrow {
    Up
    Flat
    Down
  }

  scalar DateTime
`;

// resolver(データ処理)の設定
// DBからデータを取得したり、APIを呼び出したりする処理もここで記述
const resolvers = {
    Query: { books: () => books }
};

// GraphQL の Schema 設定
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

// Expressの初期化
const app = express();

// Cross-origin resource sharing (CORS) の設定
const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
// GraphQLのエンドポイントの追加
app.use(
    "/graphql",
    bodyParser.json(),
    cors(corsOptions),
    graphqlExpress({ schema })
);

// GraphiQLのエンドポイントの追加 (テストで使う GraphQLのWeb GUI)
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

// サーバの起動
app.listen(4000, () => {
    console.log("Go to http://localhost:4000/graphiql to run queries!");
});

module.exports = app;