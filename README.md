# Electron-TypeScript-React-NeDB Scaffold

## About
This app is a work-in-progress scaffold for an Electron app in TypeScript, integrating React and NeDB.
Built with [create-react-app](https://create-react-app.dev/), [electron](https://www.electronjs.org/), and [electron-builder](https://www.electron.build/).


## Getting started
1. Start by executing **``npm run startE``** to initialize the database,
2. Then in a separate terminal instance, execute **``npm run startR``** to start React's webpack server,
3. Then restart Electron by typing **``rs``** in the first terminal or hit **``ctrl+c``** to end the process in order to restart it.


## Scripts
### ``compileEntry``
```
"compileEntry": "tsc scripts/electron_entry/**/* --outDir public/",
```
Compile TypeScript files in ``scripts/electron_entry`` to ``public/``. Required to run Electron in dev mode, as public/electron.js is the Electron entry point.
Develop in ``scripts/electron_entry``; then compile before starting server or before building.

### ``startR``
```
"startR": "react-scripts-start"
```
Starts the webpack-server; React project accessible at **http://localhost:3000**. Required to launch Electron app.

### ``startE``
```
"startE": "NODE_ENV=development nodemon --watch ./public/electron/**/* --watch . --exec 'electron .'",
```
Starts Electron in-dev with nodemon. Watches public/electron.js for changes; automatically restarts Electron if a file is changed. Type **``rs``** in terminal to manually restart Electron.
To start the Electron project in dev mode; execute **``startR``** in one terminal and **``startE``** in another.

### ``build``
```
"build": "NODE_ENV=production npm run buildR && npm run buildE"
```
Essentially runs ``react-scripts build`` and also ``electron-builder`` afterwards.


## Database
This app is being developed with [NeDB](https://github.com/louischatriot/nedb) to enable data persistence. Data in-build is created and stored in the package's ``/Resources/database`` folder.

## Helpful resources
### Electron-React
- [Kitze's React-to-Electron tutorial](https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3)
- [Mark Jordan's Electron tutorial](https://medium.com/ingeniouslysimple/building-an-electron-app-from-scratch-part-1-a1d9012c146a)
- [Shanika Wickramasinghe's React-With-Electron tutorial](https://blog.bitsrc.io/building-an-electron-app-with-electron-react-boilerplate-c7ef8d010a91)
### Databases
- [Persisting data in Electron by Techiediaries Team](https://www.techiediaries.com/electron-data-persistence/)
- [NeDB in Electron by Shivek Khurana](https://medium.com/@shivekkhurana/persist-data-in-electron-apps-using-nedb-5fa35500149a)
### Electron - IPC
- [Electron's IPC Communication](https://www.brainbell.com/javascript/ipc-communication.html)
- [Electron - ipcRenderer](https://www.electronjs.org/docs/api/ipc-renderer)
- [Electron - ipcMain](https://www.electronjs.org/docs/api/ipc-main)