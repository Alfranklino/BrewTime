const { gql } = require("apollo-server-express")

module.exports = gql`
  scalar Date

  type Query {
    getBreweries: [Brewery]!
    getBreweryInfo(input: QueryInput!): Brewery!
    getMapData(input: QueryInput!): Map
    getBookings(input: QueryInput!): [Booking]!
    getBooking(input: BookingInput!): Booking!
    getProducts(input: QueryInput!): [Product]!
    getProduct(input: ProductInput!): Product!
  }

  type Mutation {
    test: String!
  }

  type Brewery {
    id: ID!
    name: String!
    descriptions: [Description]!
    map: Map!
    bookings: [Booking]!
    images: [Image]!
    products: [Product]!
  }

  type Description {
    id: ID!
    description: String!
    order: Int!
  }

  type Map {
    id: ID!
    latitude: Float!
    longitude: Float!
    latitudeDelta: Float!
    longitudeDelta: Float!
    brewery: Brewery!
    locations: [Location]!
  }

  type Location {
    id: ID!
    address: String!
    description: String
    latitude: Float!
    longitude: Float!
  }

  type Booking {
    id: ID!
    title: String!
    description: String!
    location: Location!
    guide: String!
    time: String!
    brewery: Brewery!
    images: [Image]!
  }

  type Image {
    id: ID!
    uri: String!
    description: String!
    width: Int!
    height: Int!
  }

  type Metadata {
    id: ID!
    order_id: Int!
  }

  type Dimension {
    id: ID!
    height: Float!
    length: Float!
    weight: Float!
    width: Float!
  }

  type Product {
    id: ID!
    object: String!
    active: Boolean!
    caption: String
    created: Date!
    deactivate_on: Date
    images: [Image]!
    description: String!
    livemode: Boolean
    metadata: Metadata
    name: String!
    package_dimension: Dimension
    shippable: Boolean
    updated: Date!
    price: Int!
    brewery: Brewery
  }

  input QueryInput {
    token: ID!
    brewery_id: ID!
  }

  input BookingInput {
    token: ID!
    booking_id: ID!
  }

  input ProductInput {
    token: ID!
    product_id: ID!
  }
`
