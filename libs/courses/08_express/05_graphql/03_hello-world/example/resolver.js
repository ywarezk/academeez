/**
 * The resolver will grab the data from the data source
 */


const helloResolver = {
  Query: {
    hello: () => {
      return 'hello world'
    }
  }
}

module.exports = helloResolver;


