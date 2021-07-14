import {useState, useEffect} from 'react'
import axios from 'axios';
import Tokens from './auth/Tokens';

// https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ?si=3kGy8SN9R0eWQQpBX5iRhw&dl_branch=1

const useAuth = (code: string) => {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setResfreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();
    const [tokenType, setTokenType] = useState();

    useEffect(() => {
        const params = new URLSearchParams();
        const tokens = Tokens.getInstance();
        const verifier = tokens.getVerifier()!;

        params.append('client_id', '72bd15495cfe4f5f8418be092849b08a');
        params.append('grant_type', 'authorization_code');
        params.append('code', code);
        params.append('redirect_uri', 'http://localhost:3000')
        params.append('code_verifier', verifier);

        axios.post('https://accounts.spotify.com/api/token', params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(res => {
            // setAccessToken(res.data.access_token);
            // setResfreshToken(res.data.refresh_token);
            // setExpiresIn(res.data.expires_in);
            // setTokenType(res.data.token_type);

            const q = 'bob'

            axios.get('https://api.spotify.com/v1/search?q=bob&type=artist', {
                headers: {
                    'Authorization': res.data.token_type + ' ' + res.data.access_token,
                }
            }).then(res => {
                console.log(res.data);
            }).catch(err => {
                console.log(err);
            })
            // window.history.pushState({}, '', '/')
        }).catch(err => {
            console.log(err);
        })
    })
}

export default useAuth;