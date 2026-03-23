const express = require('express');
const app = express();
port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/register', (req, res) => {
    let {user, password} = req.query;
    res.send('Standard GET Register Route Welcome ' + user);
});

app.post('/register', (req, res) => {
    let {user, password} = req.body;
    res.send('Standard POST Register Route Welcome ' + user);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

