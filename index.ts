import express, {Request, Response} from 'express';
import { helloRoute, namesRoute, weatherRoute } from './routes.js';

const server = express();
const port = 3000;

server.get('/hello', function (_req: Request, res: Response): void {
    const response = helloRoute();
    res.send(response);
});
server.get('/api/names', async function (_req: Request, res: Response): Promise<void> {
    let response: string;
    try {
        response = await namesRoute();
        res.send(response);
    } catch (error) {
        res.status(500).send(error);
        console.error(error);
    }
});

server.get(
    '/api/weather/:zipcode', function(req: Request, res: Response): void {
        const response = weatherRoute({zipcode: req.params.zipcode})
        res.send(response);
    }
)

server.listen(port, function () {
    console.log(`
        Listening on port: ${port}

        - http://localhost:${port}/hello
        - http://localhost:${port}/api/names
        - http://localhost:${port}/api/weather/12345`
    );
})