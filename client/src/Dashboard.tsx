import React, { useReducer, useEffect } from 'react';
import useAuth from './useAuth';
import InputBase from '@material-ui/core/InputBase';
import Search from './Search';

interface Props {
    code: string,
}

export const Dashboard = (prop: Props) => {
    const accessToken = useAuth(prop.code);

    return (
        <div>
            <Search />
            {prop.code}
        </div>
    )
}
