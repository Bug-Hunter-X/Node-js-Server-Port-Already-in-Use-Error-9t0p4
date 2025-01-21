const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const port = 8080;

const server = http.createServer(requestListener);

function startServer(){
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

const { isPortTaken } = require('./utils');

isPortTaken(port)
.then(isTaken => {
    if (isTaken) {
        console.error(`Port ${port} is already in use. Exiting.`);
        process.exit(1);
    } else {
        startServer();
    }
})
.catch(error => {
    console.error(`Error checking port availability: ${error}`);
    process.exit(1);
});

// utils.js
const net = require('node:net');

async function isPortTaken(port) {
    return new Promise((resolve, reject) => {
        const tester = net.createServer()
            .once('error', err => {
                if (err.code === 'EADDRINUSE') {
                    resolve(true);
                } else {
                    reject(err);
                }
            })
            .once('listening', () => {
                tester.close(() => resolve(false));
            })
            .listen(port);
    });
}

module.exports = {isPortTaken};