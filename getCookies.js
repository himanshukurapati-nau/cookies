// getCookies.js
const http = require('http');
const express = require('express');  // require express
const cookieParser = require('cookie-parser');  // require cookie-parser

const app = express();  // create an express app
app.use(cookieParser());  // use cookie-parser middleware

app.get('/getcookies', (req, res) => {
    const name = req.cookies.name || 'Unknown';
    const email = req.cookies.email || 'Unknown';

    if (name !== 'Unknown' && email !== 'Unknown') {
        res.send(`Welcome back, ${name} (${email})!`);
    } else {
        res.status(401).send('Authentication failed. Please log in.');
    }
});

const PORT = process.env.PORT || 3001;  // use environment port or default to 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
