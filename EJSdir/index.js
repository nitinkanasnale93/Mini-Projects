const express = require('express');
const app = express();
const path = require('path');
// const { use } = require('react');

const port = 8080;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render("Home.ejs");
});

app.get('/Hello', (req, res) => {
    res.send("Hello, World!");
});

app.get('/ig/:username', (req, res) => {
    let username = req.params.username;
    const Instadata = require('./data.json');
    console.log(Instadata);
    const data = Instadata[username];
    res.render("Instagram", { data });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});