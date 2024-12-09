const http = require('http');
const chalk = require('chalk');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1 style="color: green;">Hello, World!</h1>');
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(chalk.green(`Server is running on http://localhost:${PORT}`));
});
