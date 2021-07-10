import React from 'react';
import {Dashboard} from './Dashboard';
import ColorPalette from './ColorPalette';
import './App.css';
import {Login} from './Login';
import {BrowserRouter, Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const code = new URLSearchParams(window.location.search)
  .get('code');

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
        {code ? <Dashboard code={code} /> : <Login />}
      </div>
    </ColorPalette>
  );
}

export default App;