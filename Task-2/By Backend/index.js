const nunjucks = require("nunjucks");
const data = require("./db.json");
const fs = require("fs");

nunjucks.configure("views", { autoescape: true });
nunjucks.render("index.html", { foo: "bar" });
