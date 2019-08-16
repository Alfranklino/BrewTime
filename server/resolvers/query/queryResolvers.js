module.exports = {
  Query: {
    async getBreweries(parent, args, { postgres }, info) {
      const getBreweriesQuery = {
        text: "SELECT * FROM brewtime.breweries"
      }

      const getBreweriesResult = await postgres.query(getBreweriesQuery)

      return getBreweriesResult.rows
    },
    async getBreweryInfo(parent, { input }, { postgres }, info) {
      const getBreweryQuery = {
        text: "SELECT * FROM brewtime.breweries WHERE id = $1",
        values: [input.brewery_id]
      }

      const getBreweryResult = await postgres.query(getBreweryQuery)

      return getBreweryResult.rows[0]
    },
    async getMapData(parent, { input }, { postgres }, info) {
      const getMapQuery = {
        text:
          'SELECT *, latitudedelta AS "latitudeDelta", longitudedelta AS "longitudeDelta" FROM brewtime.maps WHERE brewery_id = $1',
        values: [input.brewery_id]
      }

      const getMapResult = await postgres.query(getMapQuery)

      return getMapResult.rows[0]
    },
    async getBookings(parent, { input }, { postgres }, info) {
      const getBookingsQuery = {
        text: "SELECT * FROM brewtime.bookings WHERE brewery_id = $1",
        values: [input.brewery_id]
      }

      const getBookingsResult = await postgres.query(getBookingsQuery)

      return getBookingsResult.rows
    },
    async getBooking(parent, { input }, { postgres }, info) {
      const getBookingQuery = {
        text: "SELECT * FROM brewtime.bookings WHERE id = $1",
        values: [input.booking_id]
      }

      const getBookingResult = await postgres.query(getBookingQuery)

      return getBookingResult.rows[0]
    },
    async getProducts(parent, { input }, { postgres }, info) {
      const getProductsQuery = {
        text: "SELECT * FROM brewtime.products WHERE brewery_id = $1",
        values: [input.brewery_id]
      }

      const getProductsResult = await postgres.query(getProductsQuery)

      return getProductsResult.rows
    },
    async getProduct(parent, { input }, { postgres }, info) {
      const getProductQuery = {
        text: "SELECT * FROM brewtime.product WHERE id = $1",
        values: [input.product_id]
      }

      const getProductResult = await postgres.query(getProductResult)

      return getProductResult.rows[0]
    }
  }
}
