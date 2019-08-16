module.exports = {
  Brewery: {
    async descriptions(parent, args, { postgres }, info) {
      const getDescriptionsQuery = {
        text:
          "SELECT *, dorder AS order FROM brewtime.descriptions WHERE brewery_id = $1",
        values: [parent.id]
      }

      const getDescriptionsResult = await postgres.query(getDescriptionsQuery)

      return getDescriptionsResult.rows
    },
    async map(parent, args, { postgres }, info) {
      const getMapQuery = {
        text:
          "SELECT *, latitudedelta AS latitudeDelta, longitudedelta AS longitudeDelta FROM brewtime.maps WHERE brewery_id = $1",
        values: [parent.id]
      }

      const getMapResult = await postgres.query(getMapQuery)

      return getMapResult.rows[0]
    },
    async bookings(parent, args, { postgres }, info) {
      const getBookingsQuery = {
        text: "SELECT * FROM brewtime.bookings WHERE brewery_id = $1",
        values: [parent.id]
      }

      const getBookingsResult = await postgres.query(getBookingsQuery)

      return getBookingsResult.rows
    },
    async images(parent, args, { postgres }, info) {
      const getImagesQuery = {
        text:
          "SELECT id, uri, description, width, height FROM brewtime.images INNER JOIN brewtime.breweries_images ON images.id = breweries_images.image_id WHERE brewery_id = $1",
        values: [parent.id]
      }

      const getImagesResult = await postgres.query(getImagesQuery)

      return getImagesResult.rows
    },
    async products(parent, args, { postgres }, info) {
      const getProductsQuery = {
        text: "SELECT * FROM brewtime.products WHERE brewery_id = $1",
        values: [parent.id]
      }

      const getProductsResult = await postgres.query(getProductsQuery)

      return getProductsResult.rows
    }
  }
}
