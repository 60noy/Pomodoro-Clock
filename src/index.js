import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import '../node_modules/grommet/scss/vanilla/index.scss';
import '../node_modules/grommet-css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
