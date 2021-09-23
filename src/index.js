import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import useAxios, { configure } from 'axios-hooks';
// import LRU from 'lru-cache';

import './i18n';

import App from './App';

const axios = Axios.create({
  baseURL: 'http://localhost:8000/',
});
// const cache = new LRU({ max: 10 });

configure({ axios /*, cache*/ });

ReactDOM.render(<App />, document.getElementById('root'));
