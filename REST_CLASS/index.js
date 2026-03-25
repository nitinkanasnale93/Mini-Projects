const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');

// Middleware
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Data
let posts = [
    { id: uuid(), username: "tony", content: "I love coding" },
    { id: uuid(), username: "bruce", content: "Hulk smash" }
];

// ================= ROUTES =================

// Show all posts
app.get('/posts', (req, res) => {
    res.render('index.ejs', { posts });
});

// New post form
app.get('/posts/new', (req, res) => {
    res.render('new.ejs');
});

// Create post
app.post('/posts', (req, res) => {
    let { username, content } = req.body;
    posts.push({ id: uuid(), username, content });
    res.redirect('/posts');
});

// 🔥 IMPORTANT: Edit route BEFORE show route
app.get('/posts/:id/edit', (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === id);

    if (!post) {
        return res.send("Post not found");
    }

    res.render('edit.ejs', { post });
});

// Show single post
app.get('/posts/:id', (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    res.render('show.ejs', { post });
});

// Update post
app.patch('/posts/:id', (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;

    let post = posts.find(p => p.id === id);

    if (!post) {
        return res.send("Post not found");
    }

    post.content = newContent;
    res.redirect('/posts');
});

app.delete('/posts/:id', (req, res) => {
    let { id } = req.params;
    posts = posts.filter(p => p.id !== id);
    res.redirect('/posts');
});

// ================= SERVER =================
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});