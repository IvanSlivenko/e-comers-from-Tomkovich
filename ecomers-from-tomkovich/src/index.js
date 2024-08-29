import React from 'react';
import {createRoot, } from 'react-dom/client'
import {BrowseRouter, BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'

import "./styles/index.css";
import "./styles/index.css";


import App from "./components/App/App"


import { store } from './features/store';

createRoot(document.getElementById('root')).render(
<Provider store={store}>    
<BrowserRouter>
    <App />
</BrowserRouter>
</Provider>

);

