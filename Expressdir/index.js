const express = require('express');
const app = express();


let port = 8080;
app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('you have reached the homepage!');
});

app.get('/:username/:id', (req, res) => {
    const { username, id } = req.params;
    let code = `<h1>Welcome to the page of @${username}</h1><p>Your ID is ${id}</p>`;
    res.send(code);
});
// app.get('/Apple', (req, res) => {
//     res.send('You have reached the Apple page!');
// });

// app.get('/Orange', (req, res) => {
//     res.send('You have reached the Orange page!');
// });

// app.get('/Mango', (req, res) => {
//     res.send('You have reached the Mango page!');
// });

// app.get(/.*/, (req, res) => {
//     res.send("Page not found");
// });

// app.post('/', (req, res) => {
//     res.send('You sent a POST request to the homepage!');
// });

// app.use ((req, res) => {
//     console.log('Request received!');
//     let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>";
//     res.send(code);
// });