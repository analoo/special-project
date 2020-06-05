var express = require("express");


var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, function(){
    console.log("app listening on localhost:" +PORT)
})


// db.sequelize.sync().then(function() {
//   app.listen(PORT, function() {
//     console.log("App now listening at localhost:" + PORT);
//   });
// })


