const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");

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
    childSuggest: [ChildSuggest!]!
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
    Query: { verifyUser: () => verifyUser },
    Query: { findTrend: () => findTrend }
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

// user認証モックデータ
const verifyUser = true;

// FTモックデータ
const findTrend = [
    {
        "word": "リモート",
        "childSuggest": [
            {
                "word": "Zoom",
                "growth": {
                    "short": "Up",
                    "midium": "Flat",
                    "long": "Down"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "Skype",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "やり方",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "無料",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "ツール",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "コツ",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            }
        ]
    },
    {
        "word": "フリーランス",
        "childSuggest": [
            {
                "word": "保証",
                "growth": {
                    "short": "Up",
                    "midium": "Flat",
                    "long": "Down"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "SE",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "未経験",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "とは",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "ものづくり",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "コツ",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            }
        ]
    },
    {
        "word": "マスク",
        "childSuggest": [
            {
                "word": "Amazon",
                "growth": {
                    "short": "Up",
                    "midium": "Flat",
                    "long": "Down"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "fitty",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "売り切れ",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "インフルエンザ",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "薬局",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "購入",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            }
        ]
    },
    {
        "word": "収束",
        "childSuggest": [
            {
                "word": "いつ",
                "growth": {
                    "short": "Up",
                    "midium": "Flat",
                    "long": "Down"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "しない",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "終息",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "政府",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "まだ",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "4月",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            }
        ]
    },
    {
        "word": "オリンピック",
        "childSuggest": [
            {
                "word": "延期",
                "growth": {
                    "short": "Up",
                    "midium": "Flat",
                    "long": "Down"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "中止",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "前例",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "海外",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "いつ",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "とは",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            }
        ]
    },
    {
        "word": "イタリア",
        "childSuggest": [
            {
                "word": "感染者数",
                "growth": {
                    "short": "Up",
                    "midium": "Flat",
                    "long": "Down"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "暴動",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "日本人",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "政府",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "EU",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            },
            {
                "word": "フランス",
                "growth": {
                    "short": "Up",
                    "midium": "Up",
                    "long": "Flat"
                },
                "graphs": [
                    {
                        "date": "20200326",
                        "value": 100
                    },
                    {
                        "date": "20200327",
                        "value": 99
                    },
                    {
                        "date": "20200328",
                        "value": 99
                    },
                    {
                        "date": "20200329",
                        "value": 100
                    },
                    {
                        "date": "20200330",
                        "value": 99
                    },
                    {
                        "date": "20200331",
                        "value": 95
                    },
                    {
                        "date": "20200401",
                        "value": 100
                    },
                    {
                        "date": "20200402",
                        "value": 99
                    },
                    {
                        "date": "20200403",
                        "value": 98
                    }
                ]
            }
        ]
    }
];
