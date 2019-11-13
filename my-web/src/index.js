import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import registerServiceWorker from './registerServiceWorker';
import Login from './page/login/Login';

ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();
