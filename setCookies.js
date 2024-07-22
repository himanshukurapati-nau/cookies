const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { name, email } = parsedUrl.query;

    if (name && email) {
        res.setHeader('Set-Cookie', [
            `name=${name}`,
            `email=${email}; HttpOnly`
        ]);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Cookies set successfully');
    } else {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Name and email parameters are required');
    }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
