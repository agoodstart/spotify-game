import express from 'express';
import SpotifyWebApi from 'spotify-web-api-node';

const app = express();

app.post('/login', (req, res) => {
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: ''
    })

})