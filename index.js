var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import { helloRoute, namesRoute, weatherRoute } from './routes.js';
const server = express();
const port = 3000;
server.get('/hello', function (_req, res) {
    const response = helloRoute();
    res.send(response);
});
server.get('/api/names', function (_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let response;
        try {
            response = yield namesRoute();
            res.send(response);
        }
        catch (error) {
            res.status(500).send(error);
            console.error(error);
        }
    });
});
server.get('/api/weather/:zipcode', function (req, res) {
    const response = weatherRoute({ zipcode: req.params.zipcode });
    res.send(response);
});
server.listen(port, function () {
    console.log(`
        Listening on port: ${port}

        - http://localhost:${port}/hello
        - http://localhost:${port}/api/names
        - http://localhost:${port}/api/weather/12345`);
});
