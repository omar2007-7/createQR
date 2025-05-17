import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "enter the url",
      name: "url",
    },
  ])
  .then((result) => {
    const respo = result.url;
    let qr_png = qr.image(respo, { type: "png" });
    qr_png.pipe(fs.createWriteStream("image.png"));
  })
  .catch((err) => {
    console.log(err);
  });

