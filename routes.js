var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetch from 'node-fetch';
export const helloRoute = () => "Hello World!";
export const namesRoute = () => __awaiter(void 0, void 0, void 0, function* () {
    const URL = 'https://www.usemodernfullstack.dev/api/v1/users';
    let data = [];
    try {
        const response = yield fetch(URL);
        data = (yield response.json());
    }
    catch (error) {
        return error;
    }
    const names = data.map((user) => user.name).join('<br>');
    return names;
});
export const weatherRoute = (query) => queryWeatherData(query);
export const queryWeatherData = (query) => {
    return {
        zipcode: query.zipcode,
        weather: "sunny",
        temp: 35
    };
};
// export const helloRoute = (() => (req, res) => {
//   res.send('Hello World!');
// })();
// export const namesRoute = async (req, res) => {
//     const URL = 'https://www.usemodernfullstack.dev/api/v1/users';
//     try {
//         const response = await fetch(URL);
//         const data = await response.json();
//         const names = data.map(user => user.name);
//         res.send(names.join('<br>'));
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('There was a problem fetching the names.');
//     }
// };
