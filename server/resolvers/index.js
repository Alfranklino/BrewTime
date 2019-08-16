const bookingResolvers = require("./booking/bookingResolvers")
const breweryResolvers = require("./brewery/breweryResolvers")
const dateResolvers = require("./date/dateResolvers")
const mapResolvers = require("./map/mapResolvers")
const mutationResolvers = require("./mutation/mutationResolvers")
const productResolvers = require("./product/productResolvers")
const queryResolvers = require("./query/queryResolvers")

module.exports = {
  ...bookingResolvers,
  ...breweryResolvers,
  ...dateResolvers,
  ...mapResolvers,
  ...mutationResolvers,
  ...productResolvers,
  ...queryResolvers
}
