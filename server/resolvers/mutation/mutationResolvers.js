module.exports = {
  Mutation: {
    async test(parent, args, { postgres }, info) {
      return "Hello World"
    }
  }
}
