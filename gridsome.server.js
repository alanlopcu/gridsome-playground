// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// module.exports = function (api) {
//   api.loadSource(({ addCollection }) => {
//     // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
//   })

//   api.createPages(({ createPage }) => {
//     // Use the Pages API here: https://gridsome.org/docs/pages-api/
//   })
// }

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.get('https://www.reddit.com/r/aww.json?raw_json=1')

    // const collection = store.addContentType({
    //   typeName: 'RedditPost',
    //   route: '/reddit/:id',
    // })

    const collection = actions.addCollection('RedditPost')

    // Check reddit json structure -> data.data.children
    for (const post of data.data.children) {
      collection.addNode({
        id: post.data.id,
        title: post.data.title,
        path: '/reddit/' + post.data.id,
        // slug: post.slug,
        // date: post.date,
        fields: {
          thumbnail: post.data.thumbnail,
          img: post.data.preview,
        }
      })
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
