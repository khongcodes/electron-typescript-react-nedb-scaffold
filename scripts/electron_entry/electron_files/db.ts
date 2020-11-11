import { app } from "../electron";

const Datastore = require('nedb-promises');

const dbFactory = (fileName) => Datastore.create({
  filename: process.env.NODE_ENV === 'development' ? `./database/${fileName}` : `${app.getPath("userData")}/database/${fileName}`,
  timestampData: true,
  autoload: true
});

export const db = {
  tags: dbFactory("tags.db"),
  posts: dbFactory("posts.db")
};

export const createTag = async (label) => {
  const tag = await db.tags.insert({label});
  return tag;
};

export const selectAllTags = async () => {
  const proxies = await db.tags.find({});
  return {proxies};
}

// module.exports = { db, createTag, selectAllTags };