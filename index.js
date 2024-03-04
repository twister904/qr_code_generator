/* 
1. Use the inquirer npm package to get user input.
*/
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
    {
    message:"enter the url",
    name: "URL"
}
  ])
  .then((answers) => {
    const URL = answers.URL;
    const qr_png = qr.imageSync(URL, { type: 'png' }); // Generate QR code image data

    fs.writeFileSync("qr_img.png", qr_png); // Save QR code image

    fs.writeFile("URL.txt", URL, (err) => {
      if (err) throw err;
      console.log("The URL has been saved!");
    });
  })

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

/*2. Use the qr-image npm package to turn the user entered URL into a QR code image.
*/



/*3. Create a txt file to save the user input using the native fs node module.
*/
