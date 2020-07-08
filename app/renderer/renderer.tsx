import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import * as serviceWorker from './serviceWorker';
import '../../static/index.scss';
console.log('👋 This message is being logged by "renderer.tsx", included via webpack');

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();