/**
 * The resolver will grab the data from the data source
 */


const helloResolver = {
  Query: {
    me: () => {
      return {
        id: 1,
        firstName: 'Yariv',
        lastName: 'Katz'
      }
    }
  },
  User: {
    posts: () => {
      return [
        {
          message: 'hello world',
          date: (new Date()).getTime()
        }
      ]
    }
  }
}

module.exports = helloResolver;


