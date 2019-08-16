const express = require("express")
const cookieParser = require("cookie-parser")
const chalk = require("chalk")
const path = require("path")
const { ApolloServer } = require("apollo-server-express")

const postgres = require("./config/postgres")
const typeDefs = require("./schema")
const resolvers = require("./resolvers")

const app = express()
const PORT = 8080

app.use(cookieParser())

if (process.env.NODE_ENV !== "development") {
  const root = path.resolve(__dirname, "../client")

  // Serve the static front-end from /public when deployed
  app.use(express.static(root))
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/index.html"), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })
}

const apolloServer = new ApolloServer({
  context: ({ req }) => {
    return {
      app,
      req,
      postgres
    }
  },
  typeDefs,
  resolvers
})

apolloServer.applyMiddleware({
  app
})

postgres.on("error", (err, client) => {
  console.error("Unexpected error on idle postgres client", err)
  process.exit(-1)
})

app.listen(PORT, () => {
  console.log(`>> ${chalk.blue("Express running:")} http://localhost:${PORT}`)

  console.log(
    `>> ${chalk.magenta(
      "GraphQL playground:"
    )} http://localhost:${PORT}/graphql`
  )
})

app.on("error", err => {
  console.log(err)
})
