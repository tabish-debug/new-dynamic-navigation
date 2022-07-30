# New Dynamic Navigation

Old Dynamic Navigation Repository [Dynamic Navigation](https://github.com/tabish-debug/dynamic-navigation).

## Available Scripts

If you have docker. In project directory, you can run:

### docker compose up -d

your app is simply run also volumn is created if you want any change in project

#### Runs the app in terminal

### .env

create .env file and add environment this.\
REACT_APP_SERVER_URL=http://localhost:8080/

### `npm start`

Runs the front-end app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `node server.js x y u v a b`

x - override for rLogin delay\
y - override for rLogin success\
u - override for rFetchExperiments delay\
v - override for rFetchExperiments success\
a - override for rSubmitSelection delay\
b - override for rSubmitSelection success

Example: node server.js 3 false 15 true 4 false

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
