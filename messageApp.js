const http = require('http');

const routes=require('./messageAppRoutes')//it will automatically add .js=>routes.js

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);
