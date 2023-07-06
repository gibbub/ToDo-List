const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const motivationGenerator = require(__dirname + "/motivation.js");

const app = express();

const items = [];
const workItems = [];
let motivation = "";

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {

    let day = date.getDate();

    res.render("list", {
        listTitle: day,
        newListItems: items,
        motivationText: motivation
    });

});

app.post("/", (req, res) => {

    if (req.body.delete) {
        items.splice(req.body.delete, 1);
        motivation = motivationGenerator.generateText(items.length);
        res.redirect("/");
    }
    else {
        let item = req.body.newItem;
        motivation = "";

        if (req.body.list === "Work") {
            workItems.push(item);
            res.redirect("/work");
        } else {
            items.push(item);
            res.redirect("/");
        }
    }


});

app.get("/work", (req, res) => {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems
    });
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started on port 3000");
});