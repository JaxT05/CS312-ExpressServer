import express from 'express';
const server = express();
const port = 3000;
import { helloRoute, namesRoute } from './routes.js';

server.get('/hello', helloRoute);
server.get('/api/names', namesRoute);

server.listen(port, function () {
    console.log(`
        Listening on port: ${port}

        - http://localhost:${port}/hello
        - http://localhost:${port}/api/names`
    );
});