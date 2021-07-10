import {useState, useEffect} from 'react'
import axios from 'axios';

function dec2hex(dec: any) {
    return ('0' + dec.toString(16)).substr(-2);
}

function generateRandomString() {
    let array = new Uint32Array(56/2);
    window.crypto.getRandomValues(array);
    return Array.from(array, dec2hex).join('');
}

function sha256(plain: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest('SHA-256', data);
}

function base64urlencode(a: any) {
    let str = "";
    let bytes = new Uint8Array(a)
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        str += String.fromCharCode(bytes[i]);
    }

    return btoa(str)
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
}

async function challengeFromModifier(v: string) {
    let hashed = await sha256(v);
    let base64encoded = base64urlencode(hashed);
    return base64encoded;
}


const useAuth = (code: String) => {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setResfreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        axios.post('http://localhost:3001/login', {
            code,
        }).then(res => {
            const verifier = generateRandomString();
            console.log(verifier);
            console.log(res.data)
            window.history.pushState({}, '', '/')
        }).catch(() => {
            window.location.href = '/';
        })
    }, [code])
}

export default useAuth;