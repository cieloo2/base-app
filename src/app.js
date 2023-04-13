const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")

const app = express()

app.set("views", path.join(__dirname,"views"))
app.use(bodyParser.urlencoded({extend:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(require("./routes/index"))


app.use(express.static(path.join(__dirname, "public")))

module.exports = app
