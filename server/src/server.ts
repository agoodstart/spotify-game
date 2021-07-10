import express from 'express';
import SpotifyWebApi from 'spotify-web-api-node';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
    const code = req.body.code;
    console.log(code);
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '72bd15495cfe4f5f8418be092849b08a',
        clientSecret: '',
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        })
    }).catch(err => {
        console.log(err);
        res.sendStatus(400);
    })
})

app.listen(3001, () => {
    console.log('listening on port 3001')
});