import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [
      {"id": "0", "likes":"0", "date": "23/10/2023", "author": "Mary Red", "body": "So many posts to read..."},
      {"id": "1", "likes":"0", "date": "10/02/2022", "author": "Joseph Green", "image": "https://www.capnunes.com/wp-content/uploads/2021/05/delta-11.jpg", "body": "Good weather"},
      {"id": "2", "likes":"0", "date": "10/10/2022", "author": "Thomas Blue", "body": "Toilets are full again :("},
      {"id": "3", "likes":"0", "date": "08/02/2023", "author": "Christopher Brown", "body": "Web application development is fun!"},
      {"id": "4", "likes":"0", "date": "10/02/2023", "author": "Susan Pink", "image": "https://www.capnunes.com/wp-content/uploads/2021/05/delta-11.jpg", "body": "Great view today!"},
      {"id": "5", "likes":"0", "date": "10/07/2023", "author": "Britney Yellow", "body": "Finally summer!!!"},
      {"id": "6", "likes":"0", "date": "10/02/2022", "author": "Maria Heleena Luud", "image": "https://blog.ut.ee/wp-content/uploads/2021/09/Tiksu.png", "body": "Oldschool Tiksu got me blushing"},
      {"id": "7", "likes":"0", "date": "10/10/2022", "author": "Maeve Black", "body": "Algorithms make me wanna go back to bed."},
      {"id": "8", "likes":"0", "date": "08/02/2023", "author": "Jilly Joe", "body": "Web application development is fun!"},
      {"id": "9", "likes":"0", "date": "10/02/2023", "author": "Ronald Donald", "body": "Thinking about the University Ball"}
    ]
  },
  getters: {
    getAllPosts: (state) => state.posts
  },
  mutations: {
    IncreaseLike: (state, id) => {
      state.posts.forEach(post => {
        if (post.id == id) {
          post.likes = parseInt(post.likes) + 1
          console.log(post.likes)
          return
        }
      })
    },
    ResetAllLikes: (state) => {
      state.posts.forEach(post => {
        post.likes = 0
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
