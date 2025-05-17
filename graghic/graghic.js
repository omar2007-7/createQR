import qr from "qr-image";
import fs from "fs";
const container = $("#container");
const urlInput = $("#url");
const submit = $("#submit");
const imagePlace = $("#imageQR");

const path = "./image.png";
submit.on("click", function () {
    submit.css("backgroundColor", "red");
    const url = urlInput.val();
    console.log(url);
    let qr_png = qr.image(url, { type: "png" });
    qr_png.pipe(fs.createWriteStream(path));

    imagePlace.attr("src", `${path}`);
});
