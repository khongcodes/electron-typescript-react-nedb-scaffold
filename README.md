# Weekly Planner

### About
This app is a work-in-progress personal weekly organizer.
Built with [create-react-app](https://create-react-app.dev/), [electron](https://www.electronjs.org/), and [electron-builder](https://www.electron.build/).

### Scripts
Development possible thanks to 2 scripts in `package.json`, using the packages [concurrently](https://www.npmjs.com/package/concurrently) and [wait-on](https://www.npmjs.com/package/wait-on):
```
"scripts": {
  ...
  "electron-dev": "concurrently \"npm start\" \"wait-on http://localhost:3000 && electron .\"",
  "electron-build": "npm run build && electron-builder --dir"
}
```

### Database
This app is being developed with [NeDB](https://github.com/louischatriot/nedb) to allow data persistence.

### Helpful resources
#### Electron-React
- [Kitze's React-to-Electron tutorial](https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3)
- [Mark Jordan's Electron tutorial](https://medium.com/ingeniouslysimple/building-an-electron-app-from-scratch-part-1-a1d9012c146a)
- [Shanika Wickramasinghe's React-With-Electron tutorial](https://blog.bitsrc.io/building-an-electron-app-with-electron-react-boilerplate-c7ef8d010a91)
#### Databases
- [Persisting data in Electron by Techiediaries Team](https://www.techiediaries.com/electron-data-persistence/)
- [NeDB in Electron by Shivek Khurana](https://medium.com/@shivekkhurana/persist-data-in-electron-apps-using-nedb-5fa35500149a)