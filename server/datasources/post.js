const { DataSource } = require('apollo-datasource');

class PostAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getUserPosts(userId) {
    const userPosts = await this.store.posts.findAll({
      where: { userId },
    });

    return userPosts;
  }
}

module.exports = PostAPI;
