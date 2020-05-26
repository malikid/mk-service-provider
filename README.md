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
2. `yarn start`

##### Server Part

1. `cd server`
2. `npm run server`

### Launch both the client and the server with one script in development mode

`npm start`

### Run as one web service in production mode

```
npm run heroku-prebuild  // or use ./install-dependencies.sh
// heroku-prebuild takes care of npm installs,
// so it's not necessary if you've already installed all the packages

npm run heroku-postbuild
NODE_ENV=production npm start

```



## How to run the tests in the server folder

Make sure the test suite for uploading seed date to be skipped Then run the below at the root of the server folder.
```
npm run test
```
