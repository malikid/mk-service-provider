# mk-service-provider

## Requirements

- Node version: 12.13.0
- A Firebase service set up



## Prerequisites

1. Install the dependencies

    - Install all the dependencies at once

        ```
        ./install-dependecies.sh
        ```

    - Install dependencies by projects

        - `npm install` at the root of the project
        - `npm install` at the root of the server folder
        - `npm install` at the root of the client folder

2. Put your Firebase key file at the root of server folder

    You can generate it at the bottom of the `Service Account` tab in the `Settings` page on Firebase console.

3. Upload the seed data

    There is a test suite in `test/config/database.spec.js`, whose description is `Set SeedData`. Change the skip to only and run the test suite at the root of the server folder by

    ```
    npm run test:file test/config/database.spec.js
    ```

    Make sure there are data in the Firebase console.



## How to run it

### Run separately in development mode

##### Client Part

1. `cd client`
2. `SERVER_HOST="http://localhost:3030" yarn start`

##### Server Part

1. `cd server`
2. `SERVER_PORT=3030 npm run server`

### Launch both the client and the server with one script in development mode

`npm start`

### Run as one web service in production mode

- (Optional) Install dependencies

    `heroku-prebuild` or `./install-dependencies.sh` takes care of npm installs, so it's not necessary if you've already installed all the packages.

    ```
    npm run heroku-prebuild  // or use ./install-dependencies.sh
    ```

- Build

    ```
    npm run heroku-postbuild
    ```

- Launch

    `FIREBASE_SERVICE_ACCOUNT_BASE64` can be generated with `node server/scripts/encryptFirebaseKeyToBase64.js`. And you can get `FIREBASE_DATABASE_URL` in the snippet in the `Service Account` tab at the `Settings` page on Firebase console. It should look like `https://your-project-id.firebaseio.com`.

    ```
    NODE_ENV=production FIREBASE_SERVICE_ACCOUNT_BASE64=$YOUR_FIREBASE_SERVICE_ACCOUNT_BASE64 FIREBASE_DATABASE_URL=$YOUR_FIREBASE_DATABASE_URL npm start
    ```



## How to run the tests in the server folder

Make sure the test suite for uploading seed date to be skipped Then run the below at the root of the server folder.
```
npm run test
```
