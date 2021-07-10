"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const spotify_web_api_node_1 = __importDefault(require("spotify-web-api-node"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.post('/login', (req, res) => {
    const code = req.body.code;
    console.log(code);
    const spotifyApi = new spotify_web_api_node_1.default({
        redirectUri: 'http://localhost:3000',
        clientId: '72bd15495cfe4f5f8418be092849b08a',
        clientSecret: '7cefc27136604539936e4cded1d11876',
    });
    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        });
    }).catch(err => {
        console.log(err);
        res.sendStatus(400);
    });
});
app.listen(3001, () => {
    console.log('listening on port 3001');
});
//# sourceMappingURL=server.js.map