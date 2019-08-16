module.exports = {
  Product: {
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
          "SELECT id, uri, description, width, height FROM brewtime.images INNER JOIN brewtime.products_images ON images.id = products_images.image_id WHERE product_id = $1",
        values: [parent.id]
      }

      const getImagesResult = await postgres.query(getImagesQuery)

      return getImagesResult.rows
    },
    async metadata(parent, args, { postgres }, info) {
      const getMetadataQuery = {
        text: "SELECT * FROM brewtime.metadata WHERE product_id = $1",
        values: [parent.id]
      }

      const getMetadataResult = await postgres.query(getMetadataQuery)

      return getMetadataResult.rows[0]
    },
    async package_dimension(parent, args, { postgres }, info) {
      const getDimensionQuery = {
        text: "SELECT * FROM brewtime.dimensions WHERE id = $1",
        values: [parent.dimension_id]
      }

      const getDimensionResult = await postgres.query(getDimensionQuery)

      return getDimensionResult.rows[0]
    }
  }
}
