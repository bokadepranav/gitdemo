const express = require('express');
const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/apple", (req, res) => {
    res.send("you contacted apple path");
});

app.get("/orange", (req, res) => {
    res.send("you contacted orange path");
});

app.get("/:username/:id", (req, res) => {
    const {username, id} = req.params;
    const htmlStr = `<h1>Welcome to page of @${username}!</h1>`;
    res.send(htmlStr); 
});

app.get("/search", (req, res) => {
    const {q} = req.query;
    res.send(`search results for query: ${q}`);
});