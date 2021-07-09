import {LoginButton, CardActionsCenter} from './CustomComponents';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

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
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Card className={classes.card}>
                <CardHeader className={classes.header} title="Spotify Guessing Game" />
                <CardContent>
                    <CardActionsCenter>
                        <LoginButton
                            variant="contained"
                            size="large">
                            Spotify Login
                        </LoginButton>
                    </CardActionsCenter>
                </CardContent>
            </Card>
        </Container>

    )
}