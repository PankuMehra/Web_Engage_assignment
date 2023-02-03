const nunjucks = require("nunjucks");
const data = require("./db.json");
const fsPromise = require("fs/promises");

nunjucks.configure("views", { autoescape: true });

let content = nunjucks.render("nunjucks.njk", data);

fsPromise.writeFile("./output/nunjucks.html", content, {
  encoding: "utf-8",
});
