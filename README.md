# mk-service-provider

## Requirements

- Node version: 12.13.0
- Yarn version: 1.0.0
> Will change one of them to be more consistent
- A Firebase service set up



## Prerequisites

1. Install the dependencies

- `npm install` at the root of the project
- `npm install` at the root of the server folder
- `yarn` at the root of the client folder

2. Put your Firebase key file at the root of server folder

You can generate it at the bottom of the `Service Account` tab in the `Settings` page on Firebase console.

3. Upload the seed data

There is a test suite in `test/config/database.spec.js`, whose description is `Set SeedData`. Change the skip to only and run the test suite at the root of the server folder by
```
npm run test:file test/config/database.spec.js
```

Make sure there are data in the Firebase console.



## How to run it

### Client Part

1. `cd client`
2. `yarn start`

### Server Part

1. `cd server`
2. `npm run server`

### Or to launch both the client and the server at one place

`npm start`



## How to run the tests in the server folder

Make sure the test suite for uploading seed date to be skipped Then run the below at the root of the server folder.
```
npm run test
```
