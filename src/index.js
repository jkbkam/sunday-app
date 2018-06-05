import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import SundayApp from "./components/bussiness/SundayApp/SundayApp";

ReactDOM.render(
    <SundayApp/>,
    document.getElementById('root'));
registerServiceWorker();
