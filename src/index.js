import React from 'react';
import ReactDOM from 'react-dom';
import { Footer } from './components/footers';
import './index.css';

import { AppRouter } from './routers';


ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
