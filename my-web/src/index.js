import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TabBar from './page/tab/TabBar'
import 'antd/dist/antd.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TabBar />, document.getElementById('root'));
registerServiceWorker();
