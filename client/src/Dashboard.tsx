import React from 'react'
import useAuth from './useAuth';

interface Props {
    code: String,
}

export const Dashboard = (prop: Props) => {
    const accessToken = useAuth(prop.code);
    return (
        <div>
            {prop.code}
        </div>
    )
}
