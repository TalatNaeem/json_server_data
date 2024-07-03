const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');  // Make sure 'db.json' path is correct
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;  // Vercel dynamically assigns the port

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log('JSON Server is running on port', port);
});