const { DataSource } = require('apollo-datasource');

class UserAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  intialize(config) {
    this.context = config.context;
  }

  async getUserData(id) {
    const user = await this.store.users.findById(id);

    const userPosts = await this.store.posts.findAll({
      where: {
        userId: id,
      },
    });
    const postCount = userPosts.length;

    const userFollowers = await this.store.relationships.findAll({
      where: { followingId: id },
    });
    const followers = userFollowers.length;

    const userFollowing = await this.store.relationships.findAll({
      where: { userId: id },
    });
    const following = userFollowing.length;

    user.postCount = postCount;
    user.followers = followers;
    user.following = following;

    return user;
  }

  // follow/unfollow user

  // post photo

  // update bio, name, email, website, profile photo
}

module.exports = UserAPI;