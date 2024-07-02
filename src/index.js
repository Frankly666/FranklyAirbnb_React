import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom"
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles'

import "./assets/css/index.css"
// import 'antd/dist/antd.css'
import 'antd/dist/antd.min.css'
import "normalize.css"

const theme = createTheme({
  palette: {
    primary: {
      main: "#484848"
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter><App/></HashRouter>
    </ThemeProvider>
  // </React.StrictMode>
);
