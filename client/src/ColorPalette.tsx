import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import React from 'react';

/*
darkBorder: #191D28
inactiveBackground: #1D212F
activeBackground: #242938
focusBackground: #a6accd10
textColor: #a6accd
focusBackground2: #a6accd05
focusBackground3: #a6accd60
*/

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    surface: {
      darkBorder: React.CSSProperties['color'],
      inactiveBackground: React.CSSProperties['color'],
      activeBackground: React.CSSProperties['color'],
    }

    text: {
      primary: React.CSSProperties['color'],
      secondary: React.CSSProperties['color'],
    }
  }
  interface ThemeOptions {
    surface: {
      darkBorder: React.CSSProperties['color'],
      inactiveBackground: React.CSSProperties['color'],
      activeBackground: React.CSSProperties['color'],
    }

    text: {
      primary: React.CSSProperties['color'],
      secondary: React.CSSProperties['color'],
    }
  }
}

const theme = createTheme({
  surface: {
    darkBorder: '#191D28',
    inactiveBackground: '#1D212F',
    activeBackground: '#242938'
  },

  text: {
    primary: '#27e8a7',
    secondary: '#add7ff',
  },
});

type Props = { 
  children?: JSX.Element | JSX.Element[];
};

const ColorPalette = ({children}: Props) => {
    
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}

export default ColorPalette;