// setCookies.js
const http = require('http');
const url = require('url');
const express = require('express');  // require express
const cookieParser = require('cookie-parser');  // require cookie-parser

const app = express();  // create an express app
app.use(cookieParser());  // use cookie-parser middleware

app.get('/setcookies', (req, res) => {
    const { name, email } = req.query;

    if (name && email) {
        res.cookie('name', name);
        res.cookie('email', email, { httpOnly: true });
        res.send('Cookies set successfully');
    } else {
        res.status(400).send('Name and email parameters are required');
    }
});

const PORT = process.env.PORT || 3000;  // use environment port or default to 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
