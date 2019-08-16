module.exports = {
  Booking: {
    async brewery(parent, args, { postgres }, info) {
      const getBreweryQuery = {
        text: "SELECT * FROM brewtime.breweries WHERE id = $1",
        values: [parent.brewery_id]
      }

      const getBreweryResult = await postgres.query(getBreweryQuery)

      return getBreweryResult.rows[0]
    },
    async images(parent, args, { postgres }, info) {
      const getImagesQuery = {
        text:
          "SELECT id, uri, description, width, height FROM brewtime.images INNER JOIN brewtime.bookings_images ON brewtime.images.id = brewtime.bookings_images.image_id WHERE brewtime.bookings_images.booking_id = $1",
        values: [parent.id]
      }

      const getImagesResult = await postgres.query(getImagesQuery)

      return getImagesResult.rows
    },
    async location(parent, args, { postgres }, info) {
      const getLocationQuery = {
        text: "SELECT * FROM brewtime.locations WHERE id = $1",
        values: [parent.location_id]
      }

      const getLocationResult = await postgres.query(getLocationQuery)

      return getLocationResult.rows[0]
    }
  }
}
