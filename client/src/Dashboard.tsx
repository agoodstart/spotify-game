import React, { useReducer, useEffect } from 'react';
import useAuth from './useAuth';
import InputBase from '@material-ui/core/InputBase';
import Search from './Search';

interface Props {
    code: string,
}

type State = { 
    input: string
}

const initialState:State = {
    input: ''
}

type Action = { type: 'setSearch', payload: string }

const reducer = (state: State, action: Action): State => {
    return {
        ...state,
        input: action.payload
    }
}

export const Dashboard = (prop: Props) => {
    const accessToken = useAuth(prop.code);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        document.title = state.input
    }, [state.input])

    const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        dispatch({
            type: 'setSearch',
            payload: event.target.value
        })
    }

    return (
        <div>
            <Search />
            {prop.code}
        </div>
    )
}
