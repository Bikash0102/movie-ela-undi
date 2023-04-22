import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
    </Router>
);

