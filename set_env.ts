const { writeFile } = require('fs');
const { argv } = require('yargs');
require('dotenv').config();

const environment = argv.environment;
const targetPath = `./src/environments/environment.ts`;
const environmentFileContent = `
export const environment = {
   production: false,
   TWILIO_ACCOUNT_SID: "${process.env.TWILIO_ACCOUNT_SID}",
   TWILIO_AUTH_TOKEN: "${process.env.TWILIO_AUTH_TOKEN}",
   TWILIO_NUMBER: "${process.env.TWILIO_NUMBER}",
   MY_NUMBER: "${process.env.MY_NUMBER}",
   MAPBOX_TOKEN: "${process.env.MAPBOX_TOKEN}"
};
`;
// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err) {
   if (err) {
      console.log(err);
   }
   console.log(`Wrote variables to ${targetPath}`);
});