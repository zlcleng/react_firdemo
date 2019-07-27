import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Demo2 from './demo2'
// import 'antd-mobile/dist/antd-mobile.css';
// import Demo1 from './demo1'
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Demo2 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
