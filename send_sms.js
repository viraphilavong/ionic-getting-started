// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = "ACcaa85cc50f8b0e53be92b6ae2c1a064c";
const authToken = "8bf6255e62166bccc8590efd86de3d11";
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: "+19094734884",
     to: '+16125590640'
   })
  .then(message => console.log(message.sid));