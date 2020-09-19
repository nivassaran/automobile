const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const mysql = require("mysql");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

var conn = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "saran3041",
   database: "car"
});

app.get("/", (req, res) => {
   res.render("index");
});

app.post("/car", (req, res) => {
   console.log(req.body.cars);
   var brand = req.body.cars;
   console.log("connected to mysql");
   var query = `select * from cars where brand = '${brand}'`;
   console.log(query);
   conn.query(query, function (err, results){
      if (err) throw err;
      console.log(results);
      res.render("cars", { posts: results});  
   });
});

app.post("/new_car", (req, res) => {
   res.render("new_car");
});

app.listen(3000, () => {
   console.log("server started on port 3000");
});

