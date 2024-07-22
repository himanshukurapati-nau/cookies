const http = require('http');
const cookie = require('cookie');

const server = http.createServer((req, res) => {
    const cookies = cookie.parse(req.headers.cookie || '');

    const name = cookies.name || 'Unknown';
    const email = cookies.email || 'Unknown';

    if (name !== 'Unknown' && email !== 'Unknown') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Welcome back, ${name} (${email})!`);
    } else {
        res.writeHead(401, { 'Content-Type': 'text/plain' });
        res.end('Authentication failed. Please log in.');
    }
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
