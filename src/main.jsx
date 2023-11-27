// packages and libraries
import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from "@mantine/core";
// pages
import App from './App.jsx'
// styles
import '@mantine/core/styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>,
)
