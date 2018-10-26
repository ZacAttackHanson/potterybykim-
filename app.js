var bodyParser = require("body-parser"),
expressSanitizer = require("express-sanitizer"),
express        = require("express"),
app            = express();

// APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());








app.listen(process.env.PORT, process.env.IP, function(){
    console.log("General Kenobi, You are a bold one!");
})
