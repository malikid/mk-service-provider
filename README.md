# mk-service-provider

## Requirements

- Node version: 12.13.0
- Yarn version: 1.0.0
> Will change one of them to be more consistent
- A Firebase service set up

## How to run it

### Client Part

1. `yarn`
2. `yarn start`

### Server Part

1. `npm install`

2. Put your Firebase key file at the root of server folder

You can generate it at the bottom of the `Service Account` tab in the `Settings` page on Firebase console.

3. Upload the seed data

There is a test suite in `test/config/database.spec.js`, whose description is `Set SeedData`. Change the skip to only and run the test suite at the root of the server folder by
```
npm run test:file test/config/database.spec.js
```

Make sure there are data in the Firebase console.

4. `npm run server`
