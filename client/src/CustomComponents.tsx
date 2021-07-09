import { withStyles } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

const LoginButton = withStyles({
    root: {
        textTransform: 'none',
        borderRadius: '10rem',
        backgroundColor: '#27e8a7',
        '&:hover': {
            backgroundColor: '#32ae85',
        }
    }
})(Button)

const CardActionsCenter = withStyles({
    root: {
        justifyContent: 'center'
    }
})(CardActions)

export {LoginButton, CardActionsCenter};