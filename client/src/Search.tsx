import React, { useReducer, useEffect } from 'react';
import InputBase from '@material-ui/core/InputBase';

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

function Search() {
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
        <InputBase 
        placeholder="Search..."
        onChange={handleSearchChange}
    />
    )
}

export default Search
