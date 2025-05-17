import express from "express";
import qr from "qr-image";
import fs from "fs";
import ejs from "ejs";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const path = "public/images/image.png";
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("home.ejs");
});
app.post("/", (req, res) => {
    const url = req.body.url;
    let qr_png = qr.image(url, { type: "png" });
    qr_png.pipe(fs.createWriteStream(path));
    setTimeout(() => {
        res.render("home.ejs",{imagePath : "images/image.png",url:url})
    }, 1000);
});

app.listen(port, () => {
    console.log("start");
});
