const { DataSource } = require('apollo-datasource');

class UserAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  intialize(config) {
    this.context = config.context;
  }

  async getUser(id) {
    const user = await this.store.users.findById(id);
    console.log(user);
    return user;
  }

  // follow/unfollow user

  // post photo

  // update bio, name, email, website, profile photo
}

module.exports = UserAPI;
