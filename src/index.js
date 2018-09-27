import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './store/reducer.js';



// let's create our Store here only. As this is the top level component 

const store = createStore(reducer);

ReactDOM.render(
<Provider store={store}> {/* It allows to inject the global store*/}
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
