const express = require('express');
const app = express();
const cookieParser = require('cookie-parser'); // Ensure you have cookie-parser installed

app.use(cookieParser());

app.get('/getcookies', (req, res) => {
    // Your logic to retrieve and handle cookies here
    const cookies = req.cookies;
    
    if (cookies.name && cookies.email) {
        res.send(`Welcome back, ${cookies.name} (${cookies.email})!`);
    } else {
        res.status(401).send('Authentication failed. Please log in.');
    }
});

const PORT = process.env.PORT || 3000; // Use process.env.PORT for Azure compatibility

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
