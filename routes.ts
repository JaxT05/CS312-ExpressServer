import fetch from 'node-fetch';

export const helloRoute = (): string => "Hello World!";

export const namesRoute = async (): Promise<string> => {
    const URL = 'https://www.usemodernfullstack.dev/api/v1/users';
    let data: responseItemType[] = [];
    try {
        const response = await fetch(URL);
        data = (await response.json()) as responseItemType[];
    } catch (error) {
        return error;
    }
    const names = data.map((user) => user.name).join('<br>');
    return names;
}

export const weatherRoute = (query: WeatherQueryInterface): weatherDetailType => queryWeatherData(query);

export const queryWeatherData = (query: WeatherQueryInterface): weatherDetailType => {
    return {
        zipcode: query.zipcode,
        weather: "sunny",
        temp: 35
    }
}

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