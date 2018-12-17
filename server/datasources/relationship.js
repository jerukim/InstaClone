const { DataSource } = require('apollo-datasource');

class RelationshipAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getUserFollowing(userId) {
    const userFollowing = await this.store.relationships.findAll({
      where: { userId },
    });
    return userFollowing;
  }
}

module.exports = RelationshipAPI;
