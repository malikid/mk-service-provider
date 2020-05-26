const firebaseServiceAccount = require('../service-provider-firebase-key.json');

console.log(Buffer.from(JSON.stringify(firebaseServiceAccount)).toString('base64'));
