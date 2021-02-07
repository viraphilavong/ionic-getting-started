# ionic-getting-started
Getting familiar with ionic, angular and graphql

Clone the repo
Create a file called .env in the root of your directory
Create the following keys TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN,TWILIO_NUMBER with the respective values from your twilio account
Start the app via ionic serve
Start server via node server.js
Start twilio listener via twilio phone-numbers:update "+19094734884" --sms-url="http://localhost:1337/sms"

TODO
Create UI to create a text box and "To Number" text box
Send sms to "To Number" with content within textbox
Hookin mapbox api 