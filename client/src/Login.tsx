import {LoginButton, CardActionsCenter} from './CustomComponents';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import {createVerifier, createChallengeFromVerifier, createState} from './auth/Hash';
import Tokens from './auth/Tokens';
import { Button } from '@material-ui/core';

const CLIENT_ID: String = '72bd15495cfe4f5f8418be092849b08a';
const RESPONSE_TYPE: String = 'code';
const REDIRECT_URI: String = 'http://localhost:3000'
const CODE_CHALLENGE_METHOD: String = 'S256';
const SCOPE: Array<String> = [
    'streaming',
    'user-read-email',
    'user-read-private',
    'user-library-read',
    'user-library-modify',
    'user-read-playback-state',
    'user-modify-playback-state',
]

const AUTH_URL = `https://accounts.spotify.com/authorize?
client_id=${CLIENT_ID}&
response_type=${RESPONSE_TYPE}&
redirect_uri=${REDIRECT_URI}&
scope=${encodeURIComponent(SCOPE.join(' '))}`;

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        loginBtn: {
            marginTop: theme.spacing(2),
            flexGrow: 1,
        },
        container: {
            flexWrap: 'wrap',
            width: 500,
            margin: `${theme.spacing(0)} auto`
        },
        card: {
            marginTop: theme.spacing(10),
            // backgroundColor: 'rgba(166, 172, 205, .10)',
            backgroundColor: 'rgba(166, 172, 205, .10)',
            border: '1px solid #506477'
        },
        header: {
            color: '#27e8a7',
            fontWeight: 300
        }
    })
);

export const Login = () => {
    const tokens = Tokens.getInstance();

    const handleLogin = async () => {
        let state = createState();
        let verifier = createVerifier();
        let challenge = await createChallengeFromVerifier(verifier);

        tokens.setVerifier(verifier);
        tokens.setChallenge(challenge);
        tokens.setState(state);

        const authUrl = `https://accounts.spotify.com/authorize?response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${encodeURIComponent(SCOPE.join(' '))}&state=${state}&code_challenge=${challenge}&code_challenge_method=${CODE_CHALLENGE_METHOD}`;

        window.location.href = authUrl;
    }

    const clear = () => {
        tokens.clear()
    }

    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Card className={classes.card}>
                <CardHeader className={classes.header} title="Spotify Guessing Game" />
                <CardContent>
                    <CardActionsCenter>
                        <LoginButton
                            variant="contained"
                            size="large"
                            onClick={handleLogin}>
                            Spotify Login
                        </LoginButton>

                        <Button
                            variant="contained"
                            size="large"
                            onClick={clear}>
                                clear state
                        </Button>
                    </CardActionsCenter>
                </CardContent>
            </Card>
        </Container>

    )
}