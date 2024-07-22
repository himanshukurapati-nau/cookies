const http = require('http');
const cookie = require('cookie');

const server = http.createServer((req, res) => {
    const cookies = cookie.parse(req.headers.cookie || '');
    
    const name = cookies.name || 'Unknown';
    const email = cookies.email || 'Unknown';

    if (req.url === '/getcookies') { // Handle GET request for /getcookies
        if (name !== 'Unknown' && email !== 'Unknown') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Welcome back, ${name} (${email})!`);
        } else {
            res.writeHead(401, { 'Content-Type': 'text/plain' });
            res.end('Authentication failed. Please log in.');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
