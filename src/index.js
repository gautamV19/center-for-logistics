import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createTheme, ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    primary: {
      main: "#E0FFFF", //white
      dark: "#000000",
    },
    secondary: {
      main: "#00FFFF", //grey
      dark: "#000000",
    },
  },
  typography: {
    fontFamily: "sans-serif",
  },
});

root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);

