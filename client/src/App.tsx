import React from 'react';
import ColorPalette from './ColorPalette';
import './App.css';
import {Login} from './Login';
import {BrowserRouter, Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
      root: {
        backgroundColor: '#242938'
      }
    })
);


function App() {
  const classes = useStyles();

  return (
    <ColorPalette>
      <div className="App">
        <Login />
      </div>
    </ColorPalette>
  );
}

export default App;