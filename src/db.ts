import React from 'react';

// this has to be moved to electron's main function

const {app} = require("electron");
const Datastore = require("nedb-promises");

const dbFactory = (fileName: string) => Datastore.create({
  fileName: `${process.env.NODE_ENV === 'development' ? '.' : app.getPath('userData')}/data/${fileName}`,
  timestampData: true,
  autoload: true
});

const db = {
  tags: dbFactory("tags.db"),
  posts: dbFactory("posts.db")
};

module.exports = db;