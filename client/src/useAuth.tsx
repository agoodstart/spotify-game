import {useState, useEffect} from 'react'
import axios from 'axios';
import Tokens from './auth/Tokens';


const useAuth = (code: String) => {
    const tokens = Tokens.getInstance();
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setResfreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    // useEffect(() => {
    //     axios.post('http://localhost:3001/login', {
    //         code,
    //     }).then(res => {
    //         const verifier = generateRandomString();
    //         console.log(verifier);
    //         console.log(res.data)
    //         window.history.pushState({}, '', '/')
    //     }).catch(() => {
    //         window.location.href = '/';
    //     })
    // }, [code])
}

export default useAuth;