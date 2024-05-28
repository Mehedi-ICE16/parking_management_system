import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
     <Router>
     <ChakraProvider>
      <App />
    </ChakraProvider>
     </Router>
    </Provider>
  </React.StrictMode>,
)
