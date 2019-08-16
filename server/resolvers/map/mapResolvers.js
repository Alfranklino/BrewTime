module.exports = {
  Map: {
    async brewery(parent, args, { postgres }, info) {
      const getBreweryQuery = {
        text: "SELECT * FROM brewtime.breweries",
        values: [parent.brewery_id]
      }

      const getBreweryResult = await postgres.query(getBreweryQuery)

      return getBreweryResult.rows[0]
    },
    async locations(parent, args, { postgres }, info) {
      const getLocationsQuery = {
        text: "SELECT * FROM brewtime.locations WHERE map_id = $1",
        values: [parent.id]
      }

      const getLocationsResult = await postgres.query(getLocationsQuery)

      return getLocationsResult.rows
    }
  }
}
