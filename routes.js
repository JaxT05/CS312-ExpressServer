import fetch from 'node-fetch';

export const helloRoute = (() => (req, res) => {
  res.send('Hello World!');
})();

export const namesRoute = async (req, res) => {
    const URL = 'https://www.usemodernfullstack.dev/api/v1/users';
    try {
        const response = await fetch(URL);
        const data = await response.json();
        const names = data.map(user => user.name);
        res.send(names.join('<br>'));
    } catch (error) {
        console.error(error);
        res.status(500).send('There was a problem fetching the names.');
    }
};

