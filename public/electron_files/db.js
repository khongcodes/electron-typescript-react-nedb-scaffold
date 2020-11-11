const {app} = require('electron');
const Datastore = require('nedb-promises');

const dbFactory = (fileName) => Datastore.create({
  filename: process.env.NODE_ENV === 'development' ? `./database/${fileName}` : `${app.getPath("userData")}/database/${fileName}`,
  timestampData: true,
  autoload: true
});

const db = {
  tags: dbFactory("tags.db"),
  posts: dbFactory("posts.db")
};

const createTag = async (label) => {
  const tag = await db.tags.insert({label});
  return tag;
};

const selectAllTags = async () => {
  const proxies = await db.tags.find({});
  return {proxies};
}

module.exports = { db, createTag, selectAllTags };