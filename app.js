var bodyParser = require("body-parser"),
expressSanitizer = require("express-sanitizer"),
express        = require("express"),
app            = express();

// APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());



app.get("/", function(req, res){
   res.render("landing");  
});

app.get("/about", function(req, res){
   res.render("about");  
});

app.get("/contact", function(req, res){
   res.render("contact");  
});

app.get("/blog", function(req, res){
   res.render("blog");  
});

app.get("/Sale", function(req, res){
   res.render("sale");  
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("I Love My Mom");
})
